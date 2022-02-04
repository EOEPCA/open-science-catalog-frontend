<template>
  <v-data-table
    :headers="transformedHeaders"
    :items="items"
    :items-per-page="-1"
    :search="filter"
    disable-sort
    height="60vh"
    fixed-header
    hide-default-footer
    show-expand
    :expanded.sync="expanded"
    :mobile-breakpoint="0"
  >
    <template #[`header.name`]="{ header }">
      {{ header.text }}
      <!-- It's kinda hacky to put this here - is there a better place? -->
      <v-tooltip top>
        <template #activator="{ on }">
          <v-btn
            icon
            style="position: absolute; left: -60px; top: 5px"
            v-on="on"
            @click="expanded = expanded.length === items.length ? [] : items"
          >
            <v-icon>
              {{ expanded.length === items.length
                ? 'mdi-arrow-collapse-vertical'
                : 'mdi-arrow-expand-vertical' }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ expanded.length === items.length ? 'Close all' : 'Expand all' }}</span>
      </v-tooltip>
    </template>
    <template #[`item.data-table-expand`]="{ item, isExpanded, expand }">
      <v-btn
        v-if="item.numberOfRecords && !isExpanded"
        icon
        @click="expand(true)"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn
        v-else-if="item.numberOfRecords && isExpanded"
        icon
        @click="expand(false)"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <div
        v-else
        class="noAvailableProduct"
      >
        No products available
      </div>
    </template>
    <template #expanded-item>
      <td
        :colspan="transformedHeaders.length + 1"
        class="pa-0"
        style="z-index: 0 !important"
      >
        <table style="width: 100%; border-spacing: 0;">
          <tbody>
            <tr
              v-for="record in records"
              :key="record.name"
              style="line-height: 3;"
            >
              <td class="px-4 text-start subCell">
                <v-tooltip top>
                  <template #activator="{ on }">
                    <v-btn
                      icon
                      small
                      color="success"
                      v-on="on"
                    >
                      <v-icon>
                        mdi-open-in-new
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Go to {{ record.name }} record</span>
                </v-tooltip>
              </td>
              <td class="px-4 py-2 subCell">
                <v-tooltip
                  top
                >
                  <template #activator="{ on }">
                    <small
                      style="cursor: pointer"
                      v-on="on"
                    >{{ record.name }}</small>
                  </template>
                  <span>Go to {{ record.name }} record</span>
                </v-tooltip>
              </td>
              <td
                v-for="(year, index) in headers"
                :key="year"
                class="subCell"
              >
                <v-tooltip
                  :key="year"
                  top
                >
                  <template #activator="{ on }">
                    <v-progress-linear
                      v-if="record.years.includes(year)"
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
                      v-on="on"
                    />
                    <span v-else style="visibility: hidden">no data</span>
                  </template>
                  <span>{{ year }}</span>
                </v-tooltip>
              </td>
              <td class="px-4 subCell">
                <Coverage
                  :record="record"
                />
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
      <v-tooltip
        :key="year"
        top
      >
        <template #activator="{ on }">
          <v-progress-linear
            v-if="item.years.includes(year)"
            color="secondary"
            height="15"
            value="100"
            :style="`z-index: 1; border-radius: ${
              !item.years.includes(headers[index - 1]) ? 5 : 0
            }px ${
              !item.years.includes(headers[index + 1]) ? 5 : 0
            }px ${
              !item.years.includes(headers[index + 1]) ? 5 : 0
            }px ${
              !item.years.includes(headers[index - 1]) ? 5 : 0
            }px`"
            v-on="on"
          />
        </template>
        <span>{{ year }}</span>
      </v-tooltip>
    </template>
    <template #[`item.name`]="{ item }">
      <v-tooltip
        top
      >
        <template #activator="{ on }">
          <small
            style="cursor: pointer"
            v-on="on"
          >{{ item.name }}</small>
        </template>
        <span>Go to {{ item.name }} variable</span>
      </v-tooltip>
    </template>
    <template #[`item.coverage`]="{ item }">
      <Coverage
        :variable="item"
        :disable="!item.numberOfRecords"
      />
    </template>
  </v-data-table>
</template>

<script>
import Coverage from '@/components/Coverage.vue'

export default {
  name: 'MetricsTable',
  components: {
    Coverage
  },
  props: {
    filter: {
      type: String,
      default: () => ('')
    },
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
        text: 'Name',
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
}
::v-deep table td:first-child,
::v-deep table td:nth-child(2),
::v-deep table td:last-child {
  z-index: 3 !important;
}
::v-deep table th:first-child,
::v-deep table th:nth-child(2),
::v-deep table th:last-child {
  z-index: 4 !important;
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
  overflow: hidden;
  line-height: initial;
  overflow-wrap: break-word;
}
::v-deep table > tbody > tr:hover:not(.v-data-table__empty-wrapper) {
  background: #eee !important;
}

.noAvailableProduct {
  font-size: 10px;
  margin: 4px;
  padding: 3px;
  background: rgb(182, 126, 52);
  border-radius: 5px;
  color: white;
  width: 50px;
  text-align: center;
}
::v-deep table td {
  padding: 0 10px !important;
}
</style>

<style>
::-webkit-scrollbar {
  width: 18px;
  height: 18px;
}
::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb:hover {
  background: rgb(225, 225, 225);
  border: 5px solid white;
  border-radius: 47px;
  background-clip: padding-box;
}
::-webkit-scrollbar-thumb:hover {
  background: grey;
}
::-webkit-scrollbar-track {
  background: transparent;
  border: 0px none transparent;
  border-radius: 42px;
}
</style>
