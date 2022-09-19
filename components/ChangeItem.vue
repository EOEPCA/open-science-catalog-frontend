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
      :items="Object.keys(itemTypes)"
      label="Select an item type"
      outlined
      required
      :rules="[v => !!v || 'Item type is required']"
      @change="fillForm('clear')"
    />
    <template v-if="selectedItemType">
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('name')"
        v-model="name"
        :label="`${selectedItemType.charAt(0).toUpperCase() + selectedItemType.slice(1)} Name`"
        outlined
        required
        :rules="[v => !!v || `${selectedItemType.charAt(0).toUpperCase() + selectedItemType.slice(1)} Name required`]"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span v-if="selectedItemType == 'Theme'">Provide new theme - scientific domain of the project</span>
            <span v-if="selectedItemType == 'Variable'">Provide new variable name</span>
            <span v-if="selectedItemType == 'Project'">Provide new project name</span>
            <span v-if="selectedItemType == 'Product'">Provide product name to add</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-tabs
        v-if="itemTypes[selectedItemType].includes('description')"
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
        v-if="itemTypes[selectedItemType].includes('description')"
        v-model="descriptionToggle"
      >
        <v-tab-item>
          <v-textarea
            v-model="description"
            name="Description"
            label="Description (markdown supported)"
            class="mt-4"
            outlined
          >
            <template #append>
              <v-tooltip left>
                <template #activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                <span v-if="selectedItemType == 'Theme'">Add a short description for the Theme</span>
                <span v-if="selectedItemType == 'Variable'">Variable definition or short description</span>
                <span v-if="selectedItemType == 'Project'">Add short item's description</span>
                <span v-if="selectedItemType == 'Product'">Add short product's description</span>
              </v-tooltip>
            </template>
          </v-textarea>
        </v-tab-item>
        <v-tab-item>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="mt-2 mb-4 mx-2 py-3" style="display: block" v-html="description ? $markdown(description) : 'Write in the input field to see preview here'" />
        </v-tab-item>
      </v-tabs-items>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('linkWebsite')"
        v-model="linkWebsite"
        label="Website Link"
        outlined
        :rules="[
          ...selectedItemType === 'Project'
            ? [(v) => (!!v || !!linkEo4Society) || 'Website Link is required (alternatively, provide an EO4Society link)']
            : [],
          (v) => !v || /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(v) || 'URL must be valid'
        ]"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span v-if="selectedItemType == 'Theme'">Provide URL to the theme's website (e.g. Science Clusters on EO4Society: https://eo4society.esa.int/communities/scientists/)</span>
            <span v-if="selectedItemType == 'Variable'">Provide URL to the variable's website (e.g. refer to variables in the website: https://space.oscar.wmo.int/variables)</span>
            <span v-if="selectedItemType == 'Project'">Provide URL to the project's dedicated website (if exists)</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('linkAccess')"
        v-model="linkAccess"
        label="Access Link"
        outlined
        :rules="[
          (v) => !!v || 'URL is required'
        ]"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Provide URL to access the data</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('linkDocumentation')"
        v-model="linkDocumentation"
        :label="`Documentation Link${selectedItemType === 'Product' ? '/DOI' : ''}`"
        outlined
        :rules="[
          (v) => !v || /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(v) || 'URL must be valid'
        ]"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span v-if="selectedItemType == 'Project'">Provide URL to the project's documentation (if exists)</span>
            <span v-if="selectedItemType == 'Product'">Provide URL to product's documentation (ideally provide DOI number)</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('linkEo4Society')"
        v-model="linkEo4Society"
        label="EO4Society Link"
        outlined
        :rules="[
          ...selectedItemType === 'Project'
            ? [(v) => (!!v || !!linkWebsite) || 'EO4Society Link is required (alternatively, provide a website link)']
            : [],
          (v) => !v || /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(v) || 'URL must be valid'
        ]"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Provide URL to EO4Society website of the project (if exists)</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('image')"
        v-model="image"
        label="Image Link"
        outlined
        required
        :rules="[v => !!v || 'Image link is required']"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Provide a link to the image to be used as thumbnail</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-select
        v-if="itemTypes[selectedItemType].includes('theme')"
        v-model="parentThemes"
        :items="themes"
        item-value="name"
        item-text="name"
        chips
        multiple
        clearable
        deletable-chips
        label="Themes"
        outlined
        required
        :rules="[v => !!v || 'Parent theme is required']"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span v-if="selectedItemType == 'Variable'">Select one or multiple themes for the variable</span>
            <span v-if="selectedItemType == 'Project'">Select one or multiple themes for the project</span>
            <span v-if="selectedItemType == 'Product'">Select one or multiple themes for the project</span>
          </v-tooltip>
        </template>
      </v-select>
      <v-select
        v-if="itemTypes[selectedItemType].includes('status')"
        v-model="status"
        :items="[
          'ONGOING',
          'COMPLETED',
          'PLANNED'
        ]"
        outlined
        required
        label="Status"
      >
        <template #append>
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span v-if="selectedItemType == 'Project'">Select status of the project (ongoing, completed or planned)</span>
            <span v-if="selectedItemType == 'Product'">Select status of the product (ongoing, completed or planned)</span>
          </v-tooltip>
        </template>
      </v-select>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('technical_officer')"
        v-model="technical_officer"
        label="Technical officer"
        outlined
        required
        :rules="[
          (v) => !!v || 'Technical officer name is required',
        ]"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Full name of Technical Officer</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('technical_officer')"
        v-model="email"
        label="Technical officer e-mail"
        outlined
        required
        :rules="[
          (v) => !!v || 'Technical officer e-mail is required',
        ]"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Technical Officer's e-mail address</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('consortium')"
        v-model="consortium"
        label="Consortium"
        outlined
        required
        :rules="[v => !!v || 'Consortium is required']"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Consortium name</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('start_datetime')"
        v-model="startDate"
        type="date"
        label="Start date"
        outlined
        required
        :rules="[v => !!v || 'Start date is required']"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Start date of the project</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('end_datetime')"
        v-model="endDate"
        type="date"
        label="End date"
        outlined
        required
        :rules="[v => !!v || 'End date is required']"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>End date of the project</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('datetime')"
        v-model="datetime"
        type="date"
        label="Release date"
        outlined
        required
        :rules="[v => !!v || 'Date time is required']"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Date of product's release</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-select
        v-if="itemTypes[selectedItemType].includes('variable')"
        v-model="parentVariables"
        :items="variables"
        item-value="name"
        item-text="name"
        chips
        multiple
        clearable
        deletable-chips
        label="Variables"
        outlined
        required
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Select one or multiple variables to which the product applies</span>
          </v-tooltip>
        </template>
      </v-select>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('project')"
        v-model="parentProject"
        label="Parent Project"
        outlined
        required
        :rules="[
          (v) => !!v || 'Parent Project ID is required',
        ]"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Select project under which product was developed</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-combobox
        v-if="itemTypes[selectedItemType].includes('missions')"
        v-model="satelliteMissions"
        :items="missions"
        item-text="name"
        item-value="name"
        multiple
        chips
        clearable
        deletable-chips
        label="Satellite Missions"
        outlined
        required
        :rules="[
          (v) => !!v || 'Satellite missions are required',
        ]"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Select one or more satellite missions that were used to produce the results</span>
          </v-tooltip>
        </template>
      </v-combobox>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('region')"
        v-model="region"
        label="Region"
        outlined
        required
        :rules="[
          (v) => !!v || 'Region is required'
        ]"
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Write for which region the product has been generated and/or applied (eg. Europe/Asia/Global etc)</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-if="itemTypes[selectedItemType].includes('geometry')"
        v-model="bbox"
        label="Product Extent (draw an area in the map below)"
        hint="Draw an area in the map below"
        readonly
        disabled
        outlined
      >
        <template #append>
          <v-tooltip left style="margin-bottom: -10px;">
            <template #activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>On the map below, draw an area covered by product</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <CoverageMap
        v-if="itemTypes[selectedItemType].includes('geometry')"
        enable-draw
        :features="mapFeatures"
        class="mb-4"
        @drawEnd="handleBBOXDraw"
      />
    </template>
    <div
      class="d-flex flex-column flex-sm-row"
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
      itemTypes: {
        Theme: [
          'name',
          'description',
          'linkWebsite',
          'image'
        ],
        Variable: [
          'name',
          'description',
          'linkWebsite',
          'theme'
        ],
        Project: [
          'name',
          'description',
          'theme',
          'status',
          'technical_officer',
          'consortium',
          'start_datetime',
          'end_datetime',
          'linkWebsite',
          'linkEo4Society',
          'linkDocumentation'
        ],
        Product: [
          'name',
          'description',
          'theme',
          'status',
          'start_datetime',
          'end_datetime',
          'datetime',
          'linkAccess',
          'linkDocumentation',
          'missions',
          'project',
          'variable',
          'region',
          'geometry'
        ]
      },
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
      linkWebsite: '',
      linkAccess: '',
      linkDocumentation: '',
      linkEo4Society: '',
      WMSLink: '',
      image: '',
      bbox: null,
      mapFeatures: null,
      variables: [],
      valid: false,
      loading: false,
      success: false,
      descriptionToggle: null,
      deleteDialog: false,
      id: null,
      status: null,
      technical_officer: null,
      email: null,
      datetime: null,
      region: null,
      fullName: null
    }
  },
  head: {
    title: 'Add item'
  },
  computed: {
    ...mapState('staticCatalog', [
      'themes',
      'missions'
    ])
  },
  watch: {
    linkWebsite () {
      this.$refs.form.validate()
    },
    linkEo4Society () {
      this.$refs.form.validate()
    }
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
          this.linkWebsite = selectedTheme.website
          this.image = selectedTheme.image
        } else if (this.selectedItemType === 'Variable') {
          await this.retreiveVariable(this.$route.query.variable).then((selectedVariable) => {
            this.description = selectedVariable.description
            // temporary hack to pre-select parent theme
            this.name = selectedVariable.id
            this.parentThemes = selectedVariable['osc:theme'].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
            this.linkWebsite = selectedVariable.links.find(link => link.rel === 'via').href
          }).catch(err => console.error(err))
        } else if (this.selectedItemType === 'Project') {
          await this.retreiveProjects(this.$route.query.project).then((selectedProject) => {
            this.name = selectedProject.properties.title
            this.id = selectedProject.id
            this.fullName = selectedProject.properties['osc:name']
            this.description = selectedProject.properties.description
            this.parentThemes = selectedProject.properties['osc:themes']
            // TODO: cleanup
            this.startDate = new Date(selectedProject.properties.start_datetime).toISOString().split('T')[0]
            this.endDate = new Date(selectedProject.properties.end_datetime).toISOString().split('T')[0]
            this.consortium = selectedProject.properties['osc:consortium']
            this.linkWebsite = selectedProject.links.find(l => l.title === 'Website').href
            this.linkEo4Society = selectedProject.links.find(l => l.title === 'EO4Society Link').href
            this.status = selectedProject.properties['osc:status']
            this.technical_officer = selectedProject.properties['osc:technical_officer'].name
            this.email = selectedProject.properties['osc:technical_officer']['e-mail']
          }).catch((err) => {
            console.error(err)
          })
        } else if (this.selectedItemType === 'Product') {
          await this.retreiveProduct(this.$route.query.product).then((selectedProduct) => {
            console.log(selectedProduct)
            this.name = selectedProduct.properties.title
            this.id = selectedProduct.id
            this.description = selectedProduct.properties.description
            this.parentThemes = selectedProduct.properties['osc:themes']
            this.parentVariables = selectedProduct.properties['osc:variable']
            this.parentProject = selectedProduct.properties['osc:project']
            // TODO: cleanup
            this.startDate = new Date(selectedProduct.properties.start_datetime).toISOString().split('T')[0]
            this.endDate = new Date(selectedProduct.properties.end_datetime).toISOString().split('T')[0]
            this.datetime = new Date(selectedProduct.properties.datetime).toISOString().split('T')[0]
            this.satelliteMissions = selectedProduct.properties['osc:missions']
            // this.link = selectedProduct.links[1].href
            this.linkAccess = selectedProduct.links.find(l => l.title === 'Access')?.href
            this.linkDocumentation = selectedProduct.links.find(l => l.title === 'Documentation')?.href
            this.status = selectedProduct.properties['osc:status']
            this.region = selectedProduct.properties['osc:region']
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
        this.linkWebsite = ''
        this.linkAccess = ''
        this.linkDocumentation = ''
        this.linkEo4Society = ''
      }
    },
    async submitForm () {
      if (this.$refs.form.validate()) {
        this.loading = true
        try {
          let itemData
          switch (this.selectedItemType) {
            case 'Theme':
              itemData = new this.$Theme({
                name: this.name,
                description: this.description,
                linkWebsite: this.linkWebsite,
                image: this.image
              })
              break
            case 'Variable':
              itemData = new this.$Variable({
                name: this.name,
                description: this.description,
                linkWebsite: this.linkWebsite,
                theme: this.parentThemes
              })
              break
            case 'Project':
              itemData = new this.$Project({
                id: this.id,
                title: this.name,
                description: this.description,
                name: this.fullName,
                themes: this.parentThemes,
                status: this.status,
                technical_officer: this.technical_officer,
                email: this.email,
                consortium: this.consortium,
                start_datetime: `${this.startDate}T00:00:00Z`,
                end_datetime: `${this.endDate}T00:00:00Z`,
                linkWebsite: this.linkWebsite,
                linkEo4Society: this.linkEo4Society
              })
              break
            case 'Product':
              itemData = new this.$Product({
                id: this.id,
                title: this.name,
                description: this.description,
                themes: this.parentThemes,
                status: this.status,
                variable: this.parentVariables,
                missions: this.satelliteMissions,
                project: this.parentProject,
                start_datetime: `${this.startDate}T00:00:00Z`,
                end_datetime: `${this.endDate}T00:00:00Z`,
                datetime: `${this.datetime}T00:00:00Z`,
                linkAccess: this.linkAccess,
                linkDocumentation: this.linkDocumentation,
                region: this.region,
                geometry: {
                  type: 'Polygon',
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
                  ]]
                },
                bbox: this.bbox
              })
          }
          if (this.type === 'add') {
            await this.$metadataBackend.$post(
              `/item-requests/${this.slugify(this.selectedItemType)}s/${this.slugify(this.name)}.json`, itemData)
          } else {
            await this.$metadataBackend.$put(
              `/item-requests/${this.slugify(this.selectedItemType)}s/${this.id || this.slugify(this.name)}.json`, itemData)
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
        `/item-requests/${this.slugify(this.selectedItemType)}s/${this.id || this.slugify(this.name)}.json`, {}
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

<style scoped>
::v-deep .v-select__selections {
  min-height: 56px !important;
}
</style>
