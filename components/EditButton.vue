<template>
  <v-speed-dial
    v-model="fab"
    fixed
    bottom
    right
    :style="`bottom: ${$vuetify.application.footer + 16}px`"
  >
    <template #activator>
      <v-btn
        v-model="fab"
        color="info"
        dark
        rounded
        x-large
      >
        <v-icon v-if="fab" left>
          mdi-close
        </v-icon>
        <v-icon v-else left>
          mdi-pencil
        </v-icon>
        Suggest changes
      </v-btn>
    </template>
    <v-btn
      v-if="true"
      dark
      rounded
      color="green"
      :to="`/edit-item?${Object.keys($route.params)[0]}=${Object.values($route.params)[0]}`"
      style="cursor: pointer"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Edit metadata
    </v-btn>
    <v-dialog v-model="deleteDialog" max-width="500">
      <template #activator="{ on, attrs }">
        <v-btn
          v-if="true"
          dark
          rounded
          color="red"
          style="cursor: pointer"
          v-bind="attrs"
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
      dark
      rounded
      color="black"
      :href="`https://github.com/EOEPCA/open-science-catalog-metadata/tree/main/data/${
        Object.keys($route.params)[0]}s/${Object.values($route.params)[0]}.json`"
      target="_blank"
    >
      <v-icon left>
        mdi-github
      </v-icon>
      View file on GitHub
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    deleteDialog: false,
    loading: false
  }),
  methods: {
    async deleteItem () {
      this.loading = true
      await this.$axios.$delete(
        `https://open-science-catalog-backend.develop.eoepca.org/items/${this.slugify(Object.keys(this.$route.params)[0])}s/${this.slugify(Object.values(this.$route.params)[0])}.json`, {}
      )
      this.loading = false
      this.deleteDialog = false
    }
  }
}
</script>

<style scoped>
::v-deep .v-speed-dial__list {
  align-items: flex-end;
}
</style>
