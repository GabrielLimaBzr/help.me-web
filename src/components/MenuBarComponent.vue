<template>
  <v-app-bar app dark elevation="2" class="navbar">
    <v-toolbar-title class="logo">HELP.me</v-toolbar-title>
    <v-divider vertical class="mx-4"></v-divider>
    <v-spacer></v-spacer>
    <v-btn plain color="green" to="/unidades">Unidades</v-btn>
    <v-btn plain color="green" to="/empresas">Empresas</v-btn>
    <v-btn plain color="green" to="/leiloes">Leilões</v-btn>
    <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme()">
      <v-icon color="green">mdi-lightbulb</v-icon>
    </v-btn>
    <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme()">
      <v-icon color="green">mdi-lightbulb-on-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style>
.logo {
  color: #4CAF50;
  font-weight: bold;
  padding-right: 16px;
}

.navbar {
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>


<script>
export default {
  name: 'MenuBarComponent',

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>
