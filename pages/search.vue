<template>
  <v-container style="height: 100%;">
    <h1>Search page</h1>
    <v-row class="fill-height" style="height: 100%;">
      <v-col v-for="item in items" :key="item.title" cols="3">
        <v-card>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.content }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      items: [
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          title: 'dummy',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      ]
    }
  }
}
</script>
