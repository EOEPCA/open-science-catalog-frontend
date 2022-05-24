<template>
  <v-banner
    v-if="success"
    two-line
  >
    <v-avatar
      slot="icon"
      color="success"
      size="40"
    >
      <v-icon
        color="white"
      >
        mdi-checkbox-marked-circle-outline
      </v-icon>
    </v-avatar>
    Thank you for your contribution! Your proposed changes will be reviewed shortly.
    <template #actions>
      <v-btn
        text
        color="primary"
        to="/contribution-status"
      >
        Check contribution status
      </v-btn>
    </template>
  </v-banner>
  <v-form
    v-else
    ref="form"
    v-model="valid"
    lazy-validation
    class="white pa-5 rounded"
  >
    <v-select
      v-model="selectedItemType"
      :items="itemTypes"
      label="Select an item type"
      outlined
      required
      :rules="[v => !!v || 'Item type is required']"
      @change="fillForm('clear')"
    />
    <v-text-field
      v-if="type === 'add' && !!selectedItemType"
      v-model="name"
      label="Name"
      outlined
      required
      :rules="[v => !!v || 'Name is required']"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Theme'"
      v-model="name"
      label="Theme name"
      outlined
      required
      :rules="[v => !!v || 'Theme Name required']"
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Variable'"
      v-model="name"
      label="Variable Name"
      outlined
      required
      :rules="[v => !!v || 'Variable Name required']"
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Project'"
      v-model="name"
      label="Project Name"
      outlined
      required
      :rules="[v => !!v || 'Project Name is required']"
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Product'"
      v-model="name"
      label="Product Name"
      outlined
      required
      :rules="[v => !!v || 'Product Name is required']"
      @change="fillForm"
    />
    <v-tabs
      v-if="!!selectedItemType"
      v-model="descriptionToggle"
      tile
      group
    >
      <v-tab>
        Input
      </v-tab>
      <v-tab>
        Preview
      </v-tab>
    </v-tabs>
    <v-tabs-items
      v-if="!!selectedItemType"
      v-model="descriptionToggle"
    >
      <v-tab-item>
        <v-textarea
          v-model="description"
          name="Description"
          label="Description (markdown supported)"
          class="mt-4"
          outlined
        />
      </v-tab-item>
      <v-tab-item>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-2 mb-4 mx-2 py-3" style="display: block" v-html="description ? $markdown(description) : 'Write in the input field to see preview here'" />
      </v-tab-item>
    </v-tabs-items>
    <v-select
      v-if="selectedItemType === 'Variable' || selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="parentThemes"
      :items="themes"
      item-value="name"
      item-text="name"
      chips
      multiple
      label="Themes"
      outlined
      required
      :rules="[v => !!v || 'Parent theme is required']"
    />
    <v-select
      v-if="selectedItemType === 'Product' && type === 'add'"
      v-model="parentVariables"
      :items="variables"
      item-value="name"
      item-text="name"
      chips
      multiple
      label="Variables"
      hint="Separate multiple variables by comma"
      outlined
      required
    />
    <v-text-field
      v-if="selectedItemType === 'Product'"
      v-model="parentProject"
      label="Parent Project"
      outlined
      required
      :rules="[
        (v) => !!v || 'Parent Project ID is required',
      ]"
    />
    <v-text-field
      v-if="selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="startDate"
      type="datetime-local"
      label="Start date"
      outlined
      required
      :rules="[v => !!v || 'Start date is required']"
    />
    <v-text-field
      v-if="selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="endDate"
      type="datetime-local"
      label="End date"
      outlined
      required
      :rules="[v => !!v || 'End date is required']"
    />
    <v-text-field
      v-if="selectedItemType === 'Project'"
      v-model="consortium"
      label="Consortium"
      outlined
      required
      :rules="[v => !!v || 'Consortium is required']"
    />
    <v-text-field
      v-if="selectedItemType === 'Product'"
      v-model="satelliteMissions"
      label="Satellite Missions"
      hint="Separate multiple missions by comma"
      outlined
      required
      :rules="[
        (v) => !!v || 'Satellite missions are required',
        (v) => /^[a-zA-Z0-9-]+(,[a-zA-Z0-9-]+)*$/.test(v) || 'Satellite missions must be separated by commas'
      ]"
    />
    <v-text-field
      v-if="selectedItemType === 'Theme' || selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="eo4societyURL"
      label="EO4Society URL"
      outlined
      required
      :rules="[
        (v) => !!v || 'EO4Society URL is required',
        (v) => /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(v) || 'EO4Society URL must be valid'
      ]"
    />
    <v-text-field
      v-if="selectedItemType === 'Variable' || selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="link"
      label="Link"
      outlined
      required
      :rules="[
        (v) => !!v || 'Link is required'
      ]"
    />
    <v-text-field
      v-if="selectedItemType === 'Product'"
      v-model="WMSLink"
      label="WMS Link"
      outlined
      :rules="[
        (v) => (!v || /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(v)) || 'WMS link must be valid'
      ]"
    />
    <v-text-field
      v-if="selectedItemType === 'Theme'"
      v-model="imageLink"
      label="Image Link"
      outlined
      required
      :rules="[v => !!v || 'Image link is required']"
    />
    <!-- <v-file-input
      label="Add Image"
      outlined
    /> -->
    <v-text-field
      v-if="selectedItemType === 'Product'"
      v-model="bbox"
      label="Product Extent (draw an area in the map below)"
      hint="Draw an area in the map below"
      readonly
      disabled
      outlined
    />
    <CoverageMap
      v-if="selectedItemType === 'Product'"
      enable-draw
      :features="mapFeatures"
      class="mb-4"
      @drawEnd="handleBBOXDraw"
    />
    <div
      class="d-flex"
    >
      <v-dialog
        v-if="type === 'edit'"
        v-model="deleteDialog"
        max-width="500"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            v-if="true"
            dark
            large
            color="red"
            style="cursor: pointer"
            v-bind="attrs"
            :block="$vuetify.breakpoint.xsOnly"
            :class="$vuetify.breakpoint.smAndUp ? 'mr-2' : 'mb-2'"
            v-on="on"
          >
            <v-icon left>
              mdi-delete
            </v-icon>
            Request deletion
          </v-btn>
        </template>
        <v-card class="pa-3">
          <v-card-title class="text-h5" style="word-break: break-word">
            Are you sure you want to request this item to be deleted?
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue"
              dark
              @click="deleteDialog = false"
            >
              <v-icon left>
                mdi-cancel
              </v-icon>
              Cancel
            </v-btn>
            <v-btn
              color="red"
              dark
              :loading="loading"
              @click="deleteItem"
            >
              <v-icon left>
                mdi-delete
              </v-icon>
              Request deletion
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer />
      <v-btn
        color="primary"
        text
        large
        :block="$vuetify.breakpoint.xsOnly"
        :class="$vuetify.breakpoint.smAndUp ? 'mr-2' : 'mb-2'"
        to="/"
      >
        <v-icon left>
          mdi-cancel
        </v-icon>
        Cancel
      </v-btn>
      <v-btn
        v-if="!success"
        color="primary"
        :disabled="!valid"
        :loading="loading"
        large
        :block="$vuetify.breakpoint.xsOnly"
        @click="submitForm"
      >
        <v-icon left>
          mdi-checkbox-marked-circle-outline
        </v-icon>
        Submit
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ChangeItem',
  props: {
    type: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      itemTypes: [
        'Theme',
        'Variable',
        'Project',
        'Product'
      ],
      selectedItemType: '',
      name: '',
      description: '',
      parentThemes: [],
      parentVariables: '',
      parentProject: '',
      startDate: '',
      endDate: '',
      satelliteMissions: '',
      consortium: '',
      eo4societyURL: '',
      link: '',
      WMSLink: '',
      imageLink: '',
      bbox: null,
      mapFeatures: null,
      variables: [],
      valid: false,
      loading: false,
      success: false,
      descriptionToggle: null,
      deleteDialog: false,
      id: null
    }
  },
  head: {
    title: 'Add item'
  },
  computed: {
    ...mapState('staticCatalog', [
      'themes'
    ])
  },
  async mounted () {
    await this.$store.dispatch('staticCatalog/retreiveMetrics')
    this.themes.forEach((theme) => {
      theme.variables.forEach((variable) => {
        this.variables.push(variable)
      })
    })
    if ('theme' in this.$route.query) {
      this.selectedItemType = 'Theme'
    } else if ('variable' in this.$route.query) {
      this.selectedItemType = 'Variable'
    } else if ('project' in this.$route.query) {
      this.selectedItemType = 'Project'
    } else if ('product' in this.$route.query) {
      this.selectedItemType = 'Product'
    }
    this.fillForm()
  },
  methods: {
    ...mapActions('staticCatalog', [
      'retreiveVariable',
      'retreiveProjects',
      'retreiveProduct'
    ]),
    async fillForm (clear) {
      if (clear !== 'clear') {
        if (this.selectedItemType === 'Theme') {
          const selectedTheme = this.themes.find(theme => this.slugify(theme.name) === this.$route.query.theme)
          this.name = selectedTheme.name
          this.description = selectedTheme.description
          this.eo4societyURL = selectedTheme.website
          this.imageLink = selectedTheme.image
        } else if (this.selectedItemType === 'Variable') {
          await this.retreiveVariable(this.$route.query.variable).then((selectedVariable) => {
            this.description = selectedVariable.description
            // temporary hack to pre-select parent theme
            this.name = selectedVariable.id
            this.parentThemes = selectedVariable['osc:theme'].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
            this.link = selectedVariable.links.find(link => link.rel === 'via').href
          }).catch(err => console.error(err))
        } else if (this.selectedItemType === 'Project') {
          await this.retreiveProjects(this.$route.query.project).then((selectedProject) => {
            this.name = selectedProject.properties.title
            this.id = selectedProject.id
            this.description = selectedProject.properties.description
            this.parentThemes = selectedProject.properties['osc:themes']
            // TODO: cleanup
            this.startDate = new Date(selectedProject.properties.start_datetime).toISOString().toString().slice(0, -8)
            this.endDate = new Date(selectedProject.properties.end_datetime).toISOString().toString().slice(0, -8)
            this.consortium = selectedProject.properties['osc:consortium']
            this.eo4societyURL = selectedProject.links[0].href
            this.link = selectedProject.links[1].href
          }).catch((err) => {
            console.error(err)
          })
        } else if (this.selectedItemType === 'Product') {
          await this.retreiveProduct(this.$route.query.product).then((selectedProduct) => {
            this.name = selectedProduct.properties.title
            this.id = selectedProduct.id
            this.description = selectedProduct.properties.description
            this.parentThemes = selectedProduct.properties['osc:themes']
            this.parentVariables = selectedProduct.properties['osc:variable']
            this.parentProject = selectedProduct.properties['osc:project']
            // TODO: cleanup
            this.startDate = new Date(selectedProduct.properties.start_datetime).toISOString().toString().slice(0, -8)
            this.endDate = new Date(selectedProduct.properties.end_datetime).toISOString().toString().slice(0, -8)
            this.satelliteMissions = selectedProduct.properties['osc:missions']
            this.eo4societyURL = selectedProduct.links[0].href
            this.link = selectedProduct.links[1].href
            this.bbox = selectedProduct.bbox
            this.mapFeatures = [selectedProduct]
            // TODO WMS link
          }).catch((err) => {
            console.error(err)
          })
        }
      } else {
        this.name = ''
        this.description = ''
        this.parentThemes = []
        this.parentVariables = []
        this.parentProject = []
        this.startDate = ''
        this.endDate = ''
        this.satelliteMissions = []
        this.eo4societyURL = ''
        this.link = ''
      }
    },
    async submitForm () {
      if (this.$refs.form.validate()) {
        this.loading = true
        try {
          if (this.type === 'add') {
            await this.$metadataBackend.$post(
              `/items/${this.slugify(this.selectedItemType)}s/${this.slugify(this.name)}.json`, {
                name: this.name,
                description: this.description,
                theme: this.parentThemes,
                parentVariables: this.parentVariables,
                parentProject: this.parentProject,
                startDate: this.startDate,
                endDate: this.endDate,
                satelliteMissions: this.satelliteMissions,
                eo4societyURL: this.eo4societyURL,
                link: this.link,
                bbox: this.bbox,
                geometry: this.bbox && {
                  bbox: this.bbox,
                  coordinates: [[
                    [
                      this.bbox[0],
                      this.bbox[1]
                    ],
                    [
                      this.bbox[2],
                      this.bbox[1]
                    ],
                    [
                      this.bbox[2],
                      this.bbox[3]
                    ],
                    [
                      this.bbox[0],
                      this.bbox[3]
                    ],
                    [
                      this.bbox[0],
                      this.bbox[1]
                    ]
                  ]],
                  type: 'Polygon'
                }
              })
          } else {
            await this.$metadataBackend.$put(
              `/items/${this.slugify(this.selectedItemType)}s/${this.id || this.slugify(this.name)}.json`, {
                name: this.name,
                description: this.description,
                theme: this.parentThemes,
                parentVariables: this.parentVariables,
                parentProject: this.parentProject,
                startDate: this.startDate,
                endDate: this.endDate,
                satelliteMissions: this.satelliteMissions,
                eo4societyURL: this.eo4societyURL,
                link: this.link,
                bbox: this.bbox,
                geometry: {
                  bbox: this.bbox,
                  coordinates: [[
                    [
                      this.bbox[0],
                      this.bbox[1]
                    ],
                    [
                      this.bbox[2],
                      this.bbox[1]
                    ],
                    [
                      this.bbox[2],
                      this.bbox[3]
                    ],
                    [
                      this.bbox[0],
                      this.bbox[3]
                    ],
                    [
                      this.bbox[0],
                      this.bbox[1]
                    ]
                  ]],
                  type: 'Polygon'
                }
              })
          }
          this.loading = false
          this.success = true
        } catch (error) {
          console.error(error)
          this.loading = false
          this.success = false
        }
      }
    },
    async deleteItem () {
      this.loading = true
      await this.$metadataBackend.$delete(
        `/items/${this.slugify(this.selectedItemType)}s/${this.id || this.slugify(this.name)}.json`, {}
      )
      this.loading = false
      this.deleteDialog = false
    },
    handleBBOXDraw (newBbox) {
      this.bbox = newBbox.getExtent()
    }
  }
}
</script>
