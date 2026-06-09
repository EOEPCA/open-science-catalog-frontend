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
    const firstUrl = `${apiUrl}/collections/metadata:main/items?type=collection&limit=500`;
    const response = await fetch(firstUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const itemsResponse = await response.json();
    
    items = itemsResponse.features || [];
    const totalMatched = itemsResponse.numberMatched || items.length;
    const returnedCount = itemsResponse.numberReturned || items.length;
    
    if (returnedCount > 0 && totalMatched > returnedCount) {
      const additionalPages = Math.ceil(totalMatched / 500);
      for (let page = 2; page <= additionalPages; page++) {
        const offset = (page - 1) * 500;
        const pageUrl = `${apiUrl}/collections/metadata:main/items?type=collection&limit=500&offset=${offset}`;
        const pageResponse = await fetch(pageUrl);
        if (pageResponse.ok) {
          const pageData = await pageResponse.json();
          if (pageData.features) {
            items = [...items, ...pageData.features];
          }
        }
      }
    }
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  // Preprocessing and formatting matching store/index.js
  const parsedProducts = items
    .filter((i) => i["osc:type"] === "product")
    .map((i) => {
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
        theme: i["osc:themes"],
        variable: i["osc:variables"],
        project: i["osc:project"],
        "eo-mission": i["osc:missions"],
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
