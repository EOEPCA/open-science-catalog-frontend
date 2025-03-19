<template>
  <div class="editButton">
    <v-speed-dial
      v-model="fab"
      fixed
      bottom
      right
      open-on-hover
      :style="`bottom: ${$vuetify.application.footer + 16}px`"
    >
      <template #activator>
        <v-btn v-model="fab" color="info" dark rounded x-large>
          <v-icon v-if="fab" left> mdi-close </v-icon>
          <v-icon v-else left> mdi-pencil </v-icon>
          Suggest changes
        </v-btn>
      </template>
      <v-btn
        v-if="currentPath"
        dark
        rounded
        color="green"
        :href="`${
          $config.workspaceRoot
        }/osc-editor?session=${sessionTitle}&automation=edit-file&file=${
          'https://raw.githubusercontent.com/ESA-EarthCODE/open-science-catalog-metadata/refs/heads/main' +
          currentPath +
          '.json'
        }`"
        target="_blank"
        style="cursor: pointer"
      >
        <v-icon left> mdi-pencil </v-icon>
        Edit metadata
      </v-btn>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    deleteDialog: false,
    loading: false,
    currentPath: null,
  }),
  computed: {
    sessionTitle() {
      return `Edit ${this.currentPath.split("/")[2]}`;
    },
  },
  watch: {
    fab(on) {
      if (on) {
        this.currentPath = window.location.pathname;
      }
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
