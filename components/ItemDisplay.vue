<template>
  <div>
    <item-grid
      :items="items"
      :show-empty-items="showEmptyItems"
      :selection-mode="selectionMode"
      @selectItem="(item) => $emit('selectItem', item)"
    />
    <v-row>
      <v-col cols="12" class="text-center">
        <v-pagination
          v-model="page"
          :length="numberOfPages"
          @input="(params) => $emit('input', params)"
          @next="(params) => $emit('next', params)"
          @previous="(params) => $emit('previous', params)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    showEmptyItems: {
      type: Boolean,
      default: () => true,
    },
    numberOfPages: {
      type: Number,
      default: () => 1,
    },
    selectionMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
};
</script>
