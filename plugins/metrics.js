import Vue from "vue";

const mixin = {
  methods: {
    createMetrics(items) {
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

        // years
        const getYear = (string) => {
          if (!string) {
            return;
          }
          return parseInt(string.substring(0, string.indexOf("-")));
        };
        const yearStart = getYear(item.extent.temporal.interval[0][0]);
        const yearEnd = getYear(item.extent.temporal.interval[0][1]);
        const currentYears = {};
        for (let year = yearStart; year <= yearEnd; year++) {
          currentYears[year] = 1;
          years[year] = years[year] ? years[year] + 1 : 1;
        }

        const transformedItem = {
          id: item.id,
          name: item.title,
          years: currentYears,
          coverage: item.extent.spatial.bbox,
          region: item["osc:region"],
          missions: item["osc:missions"] || [],
          project: item["osc:project"],
          // geometry: {
          //   extent: item.extent
          // }
        };

        // aggregated properties
        const aggregateProperty = (propertyCheck, target) => {
          const currentProperties = item.links.filter((l) =>
            l.href.includes(`..${propertyCheck}`)
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
            const propTitle = currentProperties[propI].title.substring(
              currentProperties[propI].title.indexOf(": ") + 2
            );
            target[propId] = {
              name: propTitle,
              years: {
                ...(target[propId]?.years
                  ? Object.keys(currentYears).reduce((acc, currY) => {
                      if (acc[currY]) {
                        acc[currY] = acc[currY] + currentYears[currY];
                      } else {
                        acc[currY] = currentYears[currY];
                      }
                      return acc;
                    }, target[propId]?.years)
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
      return {
        "eo-missions": eoMissions,
        numberOfProducts,
        projects,
        themes,
        variables,
        years,
      };
    },
  },
};

Vue.mixin(mixin);

export default mixin;
