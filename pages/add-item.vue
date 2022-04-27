<template>
  <v-container>
    <h2 class="text-h2 mt-3 mb-5">
      Add item
    </h2>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <change-item type="add" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangeItem from '@/components/ChangeItem.vue'
import authentication from '@/mixins/authentication'

export default {
  name: 'AddItem',
  components: {
    ChangeItem
  },
  mixins: [authentication],
  head: {
    title: 'Add item'
  }
}
</script>
