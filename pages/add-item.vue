<template>
  <v-container>
    <h1>Add an item</h1>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <change-item type="add" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangeItem from '@/components/ChangeItem.vue'

export default {
  name: 'AddItem',
  components: {
    ChangeItem
  },
  head: {
    title: 'Add item'
  }
}
</script>
