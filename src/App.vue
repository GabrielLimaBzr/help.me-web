<template>
  <v-app>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" top>
      {{ snackbar.message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar.show = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
    <MenuBarComponent />
    <v-main class="ma-10">
      <router-view></router-view>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>

import FooterComponent from '@/components/FooterComponent.vue'
import MenuBarComponent from '@/components/MenuBarComponent.vue'

export default {
  name: 'App',

  components: {
    FooterComponent,
    MenuBarComponent
  },

  data() {
    return {
      snackbar: {
        show: false,
        message: '',
        color: '',
        timeout: 6000, // tempo em milissegundos
      },
    };
  },
};
</script>
