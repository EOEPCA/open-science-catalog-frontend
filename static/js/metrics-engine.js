/**
 * Framework-agnostic Metrics Calculation Engine.
 * Accepts a list of standard product objects (items) and returns aggregated metrics.
 */

export function createMetrics(items) {
  let numberOfProducts = 0;
  const years = {};
  const variables = {};
  const eoMissions = {};
  const projects = {};
  const themes = {};

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // total number of products
    numberOfProducts += 1;

    // years range parsing
    const getYear = (string) => {
      if (!string) {
        return null;
      }
      return parseInt(string.substring(0, string.indexOf("-")));
    };

    if (
      item.extent &&
      item.extent.temporal &&
      item.extent.temporal.interval &&
      item.extent.temporal.interval[0]
    ) {
      const yearStart = getYear(item.extent.temporal.interval[0][0]);
      const yearEnd = getYear(item.extent.temporal.interval[0][1]);
      const currentYears = {};
      if (yearStart !== null && yearEnd !== null) {
        for (let year = yearStart; year <= yearEnd; year++) {
          currentYears[year] = 1;
          years[year] = years[year] ? years[year] + 1 : 1;
        }
      }

      const transformedItem = {
        id: item.id,
        name: item.title,
        years: currentYears,
        coverage: item.extent.spatial ? item.extent.spatial.bbox : null,
        region: item["osc:region"],
        missions: item["osc:missions"] || [],
        project: item["osc:project"],
      };

      // aggregated properties
      const aggregateProperty = (propertyCheck, target) => {
        if (!item.links) return;

        const currentProperties = item.links.filter(
          (l) => l.href && l.href.includes(`..${propertyCheck}`)
        );
        for (let propI = 0; propI < currentProperties.length; propI++) {
          const propId = currentProperties[propI].href.substring(
            currentProperties[propI].href.indexOf(propertyCheck) +
              propertyCheck.length,
            Math.max(
              currentProperties[propI].href.indexOf("/catalog.json"),
              currentProperties[propI].href.indexOf("/collection.json")
            )
          );

          let propTitle = "";
          if (currentProperties[propI].title) {
            const separatorIndex = currentProperties[propI].title.indexOf(": ");
            propTitle =
              separatorIndex !== -1
                ? currentProperties[propI].title.substring(separatorIndex + 2)
                : currentProperties[propI].title;
          }

          target[propId] = {
            id: propId,
            name: propTitle,
            years: {
              ...(target[propId]?.years
                ? Object.keys(currentYears).reduce(
                    (acc, currY) => {
                      if (acc[currY]) {
                        acc[currY] = acc[currY] + currentYears[currY];
                      } else {
                        acc[currY] = currentYears[currY];
                      }
                      return acc;
                    },
                    { ...target[propId].years }
                  )
                : currentYears),
            },
            products: {
              ...(target[propId]?.products || {}),
              ...{ [item.id]: transformedItem },
            },
          };
        }
      };

      aggregateProperty("/themes/", themes);
      aggregateProperty("/variables/", variables);
      aggregateProperty("/eo-missions/", eoMissions);
      aggregateProperty("/projects/", projects);
    }
  }

  return {
    "eo-missions": eoMissions,
    numberOfProducts,
    projects,
    themes,
    variables,
    years,
  };
}
