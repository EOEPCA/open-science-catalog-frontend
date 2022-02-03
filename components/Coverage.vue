<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="1000"
  >
    <template #activator="{ on, attrs }">
      <v-tooltip
        v-model="showActivatorTooltip"
        top
      >
        <template #activator="{}">
          <v-btn
            icon
            v-bind="attrs"
            :color="record.name ? 'success' : 'primary'"
            v-on="on"
            :disabled="disable"
            @mouseover="showActivatorTooltip = true"
            @mouseleave="showActivatorTooltip = false"
          >
            <v-icon>{{ record.name ? 'mdi-map-marker' : 'mdi-earth' }}</v-icon>
          </v-btn>
        </template>
        <span>Coverage</span>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="text-h6">
        <v-icon color="success" left>
          {{ record.name ? 'mdi-map-marker' : 'mdi-earth' }}
        </v-icon>
        <span>{{ record.name || variable.name }} Coverage</span>
        <v-spacer />
        <v-btn
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider />

      <v-card-text class="px-0 black--text">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="5"
            >
              <v-list
                dense
                subheader
              >
                <v-subheader class="px-0">
                  Records
                </v-subheader>
                <v-divider />
                <v-list-item
                  class="px-0"
                >
                  <v-list-item-content>
                    <v-list-item-title>VOD_Africa_SMOS IC products CATDS</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action
                    class="flex-row"
                  >
                    <v-btn
                      icon
                      color="primary"
                    >
                      <v-icon>mdi-map-marker</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      color="primary"
                    >
                      <v-icon>mdi-open-in-new</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col
              cols="12"
              md="7"
            >
              <CoverageMap v-if="dialog" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CoverageMap from '@/components/CoverageMap.vue'

export default {
  name: 'CoverageDialog',
  components: {
    CoverageMap
  },
  props: {
    record: {
      type: Object,
      default: () => ({})
    },
    variable: {
      type: Object,
      default: () => ({})
    },
    disable: {
      type: Boolean,
      default: () => (false)
    }
  },
  data () {
    return {
      dialog: false,
      showActivatorTooltip: false
    }
  }
}
</script>
