/**
 * standalone data fetching module for Metrics Dashboard.
 */

/**
 * Asynchronously fetches all products from the dynamic STAC endpoint,
 * handling pagination loops if total matches exceed the limit returned.
 * Replicates the preprocessing formatting from store/index.js.
 */
export async function fetchProducts(apiUrl) {
  let items = [];
  try {
    // If the apiUrl doesn't end with /collections or /collections/, append it
    let targetUrl = apiUrl;
    if (!targetUrl.includes("/collections")) {
      targetUrl = targetUrl.endsWith("/") 
        ? `${targetUrl}collections` 
        : `${targetUrl}/collections`;
    }

    const separator = targetUrl.includes("?") ? "&" : "?";
    const firstUrl = `${targetUrl}${separator}limit=500&f=json`;
    const response = await fetch(firstUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    
    // Support both /collections (returns .collections) and /collections/metadata:main/items (returns .features)
    let fetchedItems = responseData.collections || responseData.features || [];
    const totalMatched = responseData.numberMatched || fetchedItems.length;
    const returnedCount = responseData.numberReturned || fetchedItems.length;
    
    if (returnedCount > 0 && totalMatched > returnedCount) {
      const additionalPages = Math.ceil(totalMatched / 500);
      for (let page = 2; page <= additionalPages; page++) {
        const offset = (page - 1) * 500;
        const pageUrl = `${targetUrl}${separator}limit=500&offset=${offset}&f=json`;
        const pageResponse = await fetch(pageUrl);
        if (pageResponse.ok) {
          const pageData = await pageResponse.json();
          const pageItems = pageData.collections || pageData.features || [];
          fetchedItems = [...fetchedItems, ...pageItems];
        }
      }
    }
    items = fetchedItems;
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  // Preprocessing and formatting
  const parsedProducts = items
    .filter((i) => i["osc:type"] === "product")
    .map((i) => {
      // Replicate the links structure expected by createMetrics for collections that don't have them
      const links = i.links ? [...i.links] : [];

      const addLinkIfMissing = (prefix, id, title) => {
        if (!id) return;
        const hasLink = links.some(l => l.href && l.href.includes(`..${prefix}${id}`));
        if (!hasLink) {
          links.push({
            rel: "parent",
            href: `..${prefix}${id}/catalog.json`,
            title: title || `${prefix.replace(/\//g, " ").trim()}: ${id}`
          });
        }
      };

      // Aggregate Theme link
      if (i["osc:theme"]) {
        const themeTitle = i["kb:theme:title"] || i["osc:theme"].replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        addLinkIfMissing("/themes/", i["osc:theme"], `Theme: ${themeTitle}`);
      } else if (i.themes && i.themes[0] && i.themes[0].concepts && i.themes[0].concepts[0]) {
        const themeId = i.themes[0].concepts[0].id;
        const themeTitle = i["kb:theme:title"] || themeId.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        addLinkIfMissing("/themes/", themeId, `Theme: ${themeTitle}`);
      }

      // Aggregate Project link
      if (i["osc:project"]) {
        const projectTitle = i["kb:project:title"] || i["osc:project"].replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        addLinkIfMissing("/projects/", i["osc:project"], `Project: ${projectTitle}`);
      }

      // Aggregate Variables links
      const variables = i["osc:variables"] || (i["osc:variable"] ? [i["osc:variable"]] : []);
      variables.forEach(v => {
        const varTitle = (v === i["osc:variable"] && i["kb:variable:title"]) 
          ? i["kb:variable:title"] 
          : v.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        addLinkIfMissing("/variables/", v, `Variable: ${varTitle}`);
      });

      // Aggregate Missions links
      const missions = i["osc:missions"] || (i["osc:eo-mission"] ? [i["osc:eo-mission"]] : []);
      missions.forEach(m => {
        const missionTitle = (m === i["osc:eo-mission"] && i["kb:eo-mission:title"]) 
          ? i["kb:eo-mission:title"] 
          : m.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        addLinkIfMissing("/eo-missions/", m, `EO Mission: ${missionTitle}`);
      });

      // Mapping spatial bbox to custom Polygon geometries
      let geometry = i.geometry;
      if (i.extent?.spatial?.bbox) {
        geometry = {
          type: "Polygon",
          coordinates: [
            [
              [i.extent.spatial.bbox[0][0], i.extent.spatial.bbox[0][1]],
              [i.extent.spatial.bbox[0][2], i.extent.spatial.bbox[0][1]],
              [i.extent.spatial.bbox[0][2], i.extent.spatial.bbox[0][3]],
              [i.extent.spatial.bbox[0][0], i.extent.spatial.bbox[0][3]],
            ],
          ],
        };
      }

      return {
        ...i,
        links: links,
        theme: i["osc:themes"] || i["osc:theme"] || (i.themes && i.themes[0] && i.themes[0].concepts && i.themes[0].concepts[0] ? i.themes[0].concepts[0].id : null),
        variable: i["osc:variables"] || (i["osc:variable"] ? [i["osc:variable"]] : []),
        project: i["osc:project"],
        "eo-mission": i["osc:missions"] || (i["osc:eo-mission"] ? [i["osc:eo-mission"]] : []),
        region: i["osc:region"],
        geometry: geometry,
      };
    })
    .sort((a, b) => {
      const titleA = a.title || "";
      const titleB = b.title || "";
      return titleA.localeCompare(titleB, "en", {
        sensitivity: "base",
      });
    });

  return parsedProducts;
}

/**
 * Asynchronously fetches full catalogs from static catalog (themes/catalog.json, variables/catalog.json)
 * to retrieve the empty/inactive categories when "Show Empty Items" is selected.
 */
export async function fetchAllAggregationItems(baseUrl, type) {
  const allItems = {};
  try {
    const url = `${baseUrl}${type}/catalog.json`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.links) {
      data.links
        .filter((l) => l.rel === "child")
        .forEach((v) => {
          // Extract ID from href: e.g., "./variable-id/catalog.json"
          const href = v.href;
          let variableId = href;
          if (href.startsWith("./")) {
            variableId = href.substring(2);
          }
          if (variableId.endsWith("/catalog.json")) {
            variableId = variableId.substring(0, variableId.indexOf("/catalog.json"));
          } else if (variableId.endsWith("/collection.json")) {
            variableId = variableId.substring(0, variableId.indexOf("/collection.json"));
          }

          const separatorIndex = v.title ? v.title.indexOf(": ") : -1;
          const propTitle = separatorIndex !== -1 
            ? v.title.substring(separatorIndex + 2)
            : v.title || variableId;

          allItems[variableId] = {
            id: variableId,
            name: propTitle,
            products: {},
            years: {},
          };
        });
    }
  } catch (err) {
    console.error(`Error fetching all aggregation items for ${type}:`, err);
  }
  return allItems;
}
