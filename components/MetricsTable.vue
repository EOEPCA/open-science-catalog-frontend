<template>
  <v-data-table
    :headers="transformedHeaders"
    :items="items"
    :items-per-page="-1"
    disable-sort
    height="60vh"
    hide-default-footer
    show-expand
    :expanded.sync="expanded"
    :mobile-breakpoint="0"
  >
    <template #expanded-item>
      <td
        :colspan="transformedHeaders.length + 1"
        class="pa-0"
      >
        <table style="width: 100%; border-spacing: 0;">
          <tbody>
            <tr
              v-for="record in records"
              :key="record.name"
              style="line-height: 3;"
            >
              <td class="px-4 text-start subCell">
                <v-icon
                  color="success"
                >
                  mdi-open-in-new
                </v-icon>
              </td>
              <td class="px-4 subCell">
                <small>{{ record.name }}</small>
              </td>
              <td
                v-for="(year, index) in headers"
                :key="year"
                class="subCell"
              >
                <v-progress-linear
                  v-if="record.years.includes(year)"
                  :key="year"
                  color="success"
                  height="15"
                  value="100"
                  :style="`border-radius: ${
                    !record.years.includes(headers[index - 1]) ? 5 : 0
                  }px ${
                    !record.years.includes(headers[index + 1]) ? 5 : 0
                  }px ${
                    !record.years.includes(headers[index + 1]) ? 5 : 0
                  }px ${
                    !record.years.includes(headers[index - 1]) ? 5 : 0
                  }px`"
                />
                <span v-else style="visibility: hidden">no data</span>
              </td>
              <td class="px-4 subCell">
                <v-icon
                  color="success"
                >
                  mdi-map-marker
                </v-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </template>
    <template
      v-for="(year, index) in headers"
      #[`item.${year}`]="{ item }"
    >
      <v-progress-linear
        v-if="item.years.includes(year)"
        :key="year"
        color="secondary"
        height="15"
        value="100"
        :style="`border-radius: ${
          !item.years.includes(headers[index - 1]) ? 5 : 0
        }px ${
          !item.years.includes(headers[index + 1]) ? 5 : 0
        }px ${
          !item.years.includes(headers[index + 1]) ? 5 : 0
        }px ${
          !item.years.includes(headers[index - 1]) ? 5 : 0
        }px`"
      />
    </template>
    <template #[`item.coverage`]>
      <v-icon
        color="primary"
      >
        mdi-earth
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'MetricsTable',
  props: {
    headers: {
      type: Array,
      default: () => ([])
    },
    items: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      expanded: [],
      records: [
        {
          name: 'Bathymetry_Arctic_Cryosat',
          years: [
            2014
          ]
        },
        {
          name: 'Satellite SAR altimeter product_Sea Floor Mapping_Oceania_Cryosat',
          years: [
            2012,
            2013
          ]
        }
      ]
    }
  },
  computed: {
    transformedHeaders () {
      const newHeaders = this.headers.map(h => ({
        text: h,
        value: h
      }))
      newHeaders.unshift({
        text: 'name',
        value: 'name'
      })
      newHeaders.push({
        text: 'Coverage',
        value: 'coverage'
      })
      return newHeaders
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.querySelector('.v-data-table__wrapper').scrollLeft = 10000
    })
  }
}
</script>

<style scoped>
::v-deep table {
  font-size: 14px;
  font-weight: 700;
}
::v-deep table td:not(:first-child, :nth-child(2), :last-child) {
  padding: 0 !important;
}
::v-deep table th:first-child,
::v-deep table th:nth-child(2),
::v-deep table th:last-child,
::v-deep table td:first-child,
::v-deep table td:nth-child(2),
::v-deep table td:last-child {
  position: sticky;
  background: white;
  z-index: 1;
}
::v-deep table th:first-child,
::v-deep table td:first-child {
  left: 0;
  width: 70px;
  min-width: 70px;
  max-width: 70px;
}

::v-deep table th:nth-child(2),
::v-deep table td:nth-child(2) {
  left: 70px;
  width: 136px;
  min-width: 136px;
  max-width: 136px;
  border-right: thin solid rgba(0, 0, 0, 0.12);
}

::v-deep table th:last-child,
::v-deep table td:last-child {
  right: 0;
  width: 100px;
  min-width: 100px;
  max-width: 100px;
  border-left: thin solid rgba(0, 0, 0, 0.12);
}

@media (max-width: 800px) {
  ::v-deep table th:first-child,
  ::v-deep table td:first-child {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
  }

  ::v-deep table th:nth-child(2),
  ::v-deep table td:nth-child(2) {
    left: 40px;
    width: 100px;
    min-width: 100px;
    max-width: 100px;
  }

  ::v-deep table th:last-child,
  ::v-deep table td:last-child {
    width: 70px;
    min-width: 70px;
    max-width: 70px;
  }
}

::v-deep .v-data-table__expanded__content {
  box-shadow: none !important;
}

.subCell {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  background-color: #eee !important;
}
</style>
