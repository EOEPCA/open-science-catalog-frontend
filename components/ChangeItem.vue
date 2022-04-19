<template>
  <v-form>
    <v-select
      v-model="selectedItemType"
      :items="itemTypes"
      label="Select an item type"
      outlined
      @change="fillForm('clear')"
    />
    <v-text-field
      v-if="type === 'add'"
      v-model="name"
      label="Name"
      outlined
      required
    />
    <v-select
      v-else-if="selectedItemType === 'Theme'"
      v-model="name"
      :items="themes"
      item-value="name"
      item-text="name"
      label="Select theme"
      outlined
      required
      @change="fillForm"
    />
    <v-select
      v-else-if="selectedItemType === 'Variable'"
      v-model="name"
      :items="variables.map((variable) => variable.name.slice(0, -1))"
      item-value="name"
      item-text="name"
      label="Select Variable"
      outlined
      required
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Project'"
      v-model="name"
      label="Project ID"
      hint="e.g. project-99 (case sensitive)"
      outlined
      required
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Product'"
      v-model="name"
      label="Product ID"
      hint="e.g. product-84 (case sensitive)"
      outlined
      required
      @change="fillForm"
    />
    <v-textarea
      v-model="description"
      name="Description"
      label="Description"
      outlined
    />
    <v-select
      v-if="selectedItemType === 'Variable' || selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="parentThemes"
      :items="themes"
      item-value="name"
      item-text="name"
      chips
      multiple
      label="Parent Themes"
      outlined
      required
    />
    <v-select
      v-if="selectedItemType === 'Product' && type === 'Add'"
      v-model="parentVariables"
      :items="variables"
      item-value="name"
      item-text="name"
      chips
      multiple
      label="Parent Variables"
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
    />
    <v-text-field
      v-if="selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="startDate"
      type="datetime-local"
      label="Start date"
      outlined
    />
    <v-text-field
      v-if="selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="endDate"
      type="datetime-local"
      label="End date"
      outlined
    />
    <v-text-field
      v-if="selectedItemType === 'Project'"
      v-model="consortium"
      label="Consortium"
      outlined
      required
    />
    <v-text-field
      v-if="selectedItemType === 'Product'"
      v-model="satelliteMissions"
      label="Satellite Missions"
      hint="Separate multiple missions by comma"
      outlined
      required
    />
    <v-text-field
      v-if="selectedItemType === 'Theme' || selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="eo4societyURL"
      label="EO4Society URL"
      outlined
      required
    />
    <v-text-field
      v-if="selectedItemType === 'Variable' || selectedItemType === 'Project' || selectedItemType === 'Product'"
      v-model="link"
      label="Link"
      outlined
      required
    />
    <v-file-input
      label="Add File"
      outlined
    />
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
      variables: []

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
      this.name = this.$route.query.theme.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
      this.fillForm()
    } else if ('variable' in this.$route.query) {
      this.selectedItemType = 'Variable'
      this.name = this.$route.query.variable.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
      this.fillForm()
    } else if ('project' in this.$route.query) {
      this.selectedItemType = 'Project'
      this.name = this.$route.query.project
      this.fillForm()
    } else if ('product' in this.$route.query) {
      this.selectedItemType = 'Product'
      this.name = this.$route.query.product
      this.fillForm()
    }
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
          const selectedTheme = this.themes.find(theme => theme.name === this.name)
          this.description = selectedTheme.description
          this.eo4societyURL = selectedTheme.website
        } else if (this.selectedItemType === 'Variable') {
          const selectedVariable = await this.retreiveVariable(this.slugify(this.name))
          this.description = selectedVariable.description
          // temporary hack to pre-select parent theme
          this.parentThemes = selectedVariable['osc:theme'].replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
          this.link = selectedVariable.links.find(link => link.rel === 'via').href
        } else if (this.selectedItemType === 'Project') {
          await this.retreiveProjects(this.name).then((selectedProject) => {
            this.description = selectedProject.properties.description
            this.parentThemes = selectedProject.properties['osc:themes']
            // TODO: cleanup
            this.startDate = new Date(selectedProject.properties.start_datetime).toISOString().toString().slice(0, -8)
            this.endDate = new Date(selectedProject.properties.end_datetime).toISOString().toString().slice(0, -8)
            this.consortium = selectedProject.properties['osc:consortium']
            this.eo4societyURL = selectedProject.links[0].href
            this.link = selectedProject.links[1].href
          }).catch((err) => {
            console.log(err)
          })
        } else if (this.selectedItemType === 'Product') {
          await this.retreiveProduct(this.slugify(this.name)).then((selectedProduct) => {
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
          }).catch((err) => {
            console.log(err)
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
    }
  }
}
</script>
