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
      Edit in catalog
    </v-btn>
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
    fab: false
  })
}
</script>

<style scoped>
::v-deep .v-speed-dial__list {
  align-items: flex-end;
}
</style>
