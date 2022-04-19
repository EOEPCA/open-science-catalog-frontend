<template>
  <v-container>
    <h1>Edit item</h1>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <change-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangeItem from '@/components/ChangeItem.vue'

export default {
  name: 'EditItem',
  components: {
    ChangeItem
  },
  head: {
    title: 'Edit Item'
  }
}
</script>
