<template>
  <v-form
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
    <v-select
      v-else-if="selectedItemType === 'Theme'"
      v-model="name"
      :items="themes"
      item-value="name"
      item-text="name"
      label="Select theme"
      outlined
      required
      :rules="[v => !!v || 'Theme is required']"
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
      :rules="[v => !!v || 'Variable is required']"
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Project'"
      v-model="name"
      label="Project ID"
      hint="e.g. project-99 (case sensitive)"
      outlined
      required
      :rules="[
        (v) => !!v || 'Project ID is required',
        (v) => /^[a-zA-Z]+-{1}[0-9]+$/.test(v) || 'Project ID format is incorrect'
      ]"
      @change="fillForm"
    />
    <v-text-field
      v-else-if="selectedItemType === 'Product'"
      v-model="name"
      label="Product ID"
      hint="e.g. product-84 (case sensitive)"
      outlined
      required
      :rules="[v => !!v || 'Product ID is required']"
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
        <div class="mt-2 mb-4 mx-2" style="display: block" v-html="description ? description : 'Write in the input field to see preview here'" />
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
      required
      :rules="[
        (v) => !!v || 'WMS link is required',
        (v) => /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(v) || 'WMS link must be valid'
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
    <div
      class="d-flex justify-end"
    >
      <v-dialog v-model="deleteDialog" max-width="500">
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
            Delete item
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="text-h5">
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
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      variables: [],
      valid: false,
      loading: false,
      success: false,
      descriptionToggle: null,
      deleteDialog: false
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
            console.error(err)
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
            await this.$axios.$post(
              `https://open-science-catalog-backend.develop.eoepca.org/items/${this.slugify(this.selectedItemType)}s/${this.slugify(this.name)}.json`, {
                name: this.name,
                description: this.description,
                theme: this.parentThemes,
                parentVariables: this.parentVariables,
                parentProject: this.parentProject,
                startDate: this.startDate,
                endDate: this.endDate,
                satelliteMissions: this.satelliteMissions,
                eo4societyURL: this.eo4societyURL,
                link: this.link
              })
          } else {
            await this.$axios.$put(
              `https://open-science-catalog-backend.develop.eoepca.org/items/${this.slugify(this.selectedItemType)}s/${this.slugify(this.name)}.json`, {
                name: this.name,
                description: this.description,
                theme: this.parentThemes,
                parentVariables: this.parentVariables,
                parentProject: this.parentProject,
                startDate: this.startDate,
                endDate: this.endDate,
                satelliteMissions: this.satelliteMissions,
                eo4societyURL: this.eo4societyURL,
                link: this.link
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
      await this.$axios.$delete(
        `https://open-science-catalog-backend.develop.eoepca.org/items/${this.slugify(this.selectedItemType)}s/${this.slugify(this.name)}.json`, {}
      )
      this.loading = false
      this.deleteDialog = false
    }
  }
}
</script>
