<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Menu</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/unidades">Unidades</v-btn>
      <v-btn text to="/empresas">Empresas</v-btn>
      <v-btn text to="/leiloes">Leilões</v-btn>
    </v-app-bar>
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
