<template>
  <div class="editButton">
    <v-speed-dial
      v-model="fab"
      fixed
      bottom
      right
      :style="`bottom: ${$vuetify.application.footer + 16}px`"
    >
      <template #activator>
        <v-btn v-model="fab" color="info" dark rounded x-large>
          <v-icon v-if="fab" left> mdi-close </v-icon>
          <v-icon v-else left> mdi-pencil </v-icon>
          Suggest changes
        </v-btn>
      </template>
      <!-- <v-btn
        v-if="true"
        dark
        rounded
        color="green"
        :to="`/edit-item?${Object.keys($route.params)[0]}=${
          Object.values($route.params)[0]
        }`"
        style="cursor: pointer"
      >
        <v-icon left> mdi-pencil </v-icon>
        Edit metadata
      </v-btn>
      <v-btn
        dark
        rounded
        color="red"
        style="cursor: pointer"
        @click="
          $auth.loggedIn
            ? (deleteDialog = true)
            : $router.push(
                `/edit-item?${Object.keys($route.params)[0]}=${
                  Object.values($route.params)[0]
                }`
              )
        "
      >
        <v-icon left> mdi-delete </v-icon>
        Request deletion
      </v-btn> -->
      <v-btn
        dark
        rounded
        color="black"
        :href="`${$config.githubDataRoot}${currentPath}.json`"
        target="_blank"
      >
        <v-icon left> mdi-github </v-icon>
        View file on GitHub
      </v-btn>
    </v-speed-dial>
    <v-dialog v-model="deleteDialog" max-width="500">
      <v-card class="pa-3">
        <v-card-title class="text-h5" style="word-break: break-word">
          Are you sure you want to request this item to be deleted?
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue" dark @click="deleteDialog = false">
            <v-icon left> mdi-cancel </v-icon>
            Cancel
          </v-btn>
          <v-btn color="red" dark :loading="loading" @click="deleteItem">
            <v-icon left> mdi-delete </v-icon>
            Request deletion
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    itemId: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    fab: false,
    deleteDialog: false,
    loading: false,
    currentPath: null,
  }),
  watch: {
    fab(on) {
      if (on) {
        this.currentPath = window.location.pathname;
      }
    },
  },
  methods: {
    async deleteItem() {
      this.loading = true;
      await this.$metadataBackend.$delete(
        `/item-requests/${this.slugify(Object.keys(this.$route.params)[0])}s/${
          this.itemId || this.slugify(Object.values(this.$route.params)[0])
        }.json`,
        {}
      );
      this.loading = false;
      this.deleteDialog = false;
    },
  },
};
</script>

<style scoped>
::v-deep .v-speed-dial__list {
  align-items: flex-end;
}
.editButton {
  position: relative;
  float: right;
  right: 10px;
  bottom: 35px;
  transition: 0.5s;
}
</style>
