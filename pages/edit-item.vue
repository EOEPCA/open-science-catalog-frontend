<template>
  <v-container :class="$vuetify.breakpoint.lgAndUp ? 'px-15 pt-8' : 'pa-4'">
    <h2 class="text-h2 mt-3 mb-5">Edit item</h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <change-item
          v-if="
            $route.query.theme ||
            $route.query.variable ||
            $route.query.project ||
            $route.query.product
          "
          type="edit"
        />
        <p v-else>
          To edit an existing item, please navigate to the corresponding page
          and click the "suggest changes" button in the lower right corner.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangeItem from "@/components/ChangeItem.vue";

export default {
  name: "EditItem",
  components: {
    ChangeItem,
  },
  middleware: "auth",
  head: {
    title: "Edit Item",
  },
};
</script>
