<template>
  <v-app>
    <v-main class="ma-4">
      <router-view></router-view>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>

import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',

  components: {
    FooterComponent
  },

  data: () => ({
    //
  }),
};
</script>
