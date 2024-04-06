<template>
  <v-card color="green lighten-5" :elevation="3" class="pa-4">
    <v-card-title> Leilões </v-card-title>
    <v-card-subtitle> Consultar </v-card-subtitle>
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="filter.razaoSocial" label="Razão Social" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="filter.cnpj" label="CNPJ" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="filter.bairro" label="Bairro" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="filter.cep" label="CEP" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4" class="text-left">
              <v-btn color="success" class="mr-4" @click="searchFilter">
                <v-icon class="mr-1">mdi-magnify</v-icon>Consultar
              </v-btn>

              <v-btn color="success" @click="reset" outlined>
                <v-icon class="mr-1">mdi-backspace-reverse</v-icon>Limpar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-card-text>
    <v-data-table :search="search" :headers="headers" :items="data" sort-by="id
        " class="elevation-2">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title style="width: 100%;">
            <v-text-field color="green" v-model="search" append-icon="mdi-magnify" label="Search" single-line
              hide-details>
            </v-text-field>
          </v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>


export default {
  name: 'LeiloesView',

  components: {
  },

  data: () => ({
    search: '',
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id',
      },
      { text: 'CNPJ', value: 'calories' },
      { text: 'Razão Social', value: 'fat' },
      { text: 'Telefone', value: 'carbs' },
      { text: 'Email', value: 'protein' },
    ],
    filter: {},
    data: [],
  }),

  created() {
    this.initialize();
  },

  methods: {
    searchFilter() {
    },
    reset() {
      this.$refs.form.reset()
    },

    initialize() {
      console.log("init leilos");
    },

    prepareEdit(item) {
      console.log(item);
    },

    prepareRead(item) {
      console.log(item);
    },
  },
};
</script>