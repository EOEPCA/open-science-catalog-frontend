<template>
  <v-container>
    <h1>Add an item</h1>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-form>
          <v-select
            v-model="selectedItemType"
            :items="itemTypes"
            label="Select an item type"
            outlined
          />
          <v-text-field
            v-model="name"
            label="Name"
            outlined
            required
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
            v-if="selectedItemType === 'Product'"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'AddItem',
  middleware: 'auth',
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
      parentThemes: '',
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
  }
}
</script>
