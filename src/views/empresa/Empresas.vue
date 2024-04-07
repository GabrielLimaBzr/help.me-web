<template>
  <v-card color="green lighten-5" :elevation="3" class="pa-4">
    <v-card-title> Empresas </v-card-title>
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
              <v-text-field color="green" v-mask="'##.###.###/####-##'" v-model="filter.cnpj" label="CNPJ" filled></v-text-field>
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

            <v-col cols="12" sm="6" md="8" class="text-right">
              <v-btn class="success" to="/empresa">Adicionar</v-btn>
            </v-col>
          </v-row>

        </v-form>
      </div>
    </v-card-text>

    <v-data-table :search="search" :headers="headers" :items="data" sort-by="id" :sort-desc="true"
        class="elevation-2">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title style="width: 100%;">
            <v-text-field color="green" v-model="search" append-icon="mdi-magnify" label="Search" single-line
              hide-details>
            </v-text-field>
          </v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="prepareEdit(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mr-2" @click="prepareRead(item)">
          mdi-eye
        </v-icon>
        <v-icon small @click="prepareEdit(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <h1>Dados não encontrado</h1>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

import EmpresaService from '@/services/EmpresaService'
export default {
  name: 'EmpresasView',

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
      { text: 'CNPJ', value: 'cnpj', sortable: false },
      { text: 'Razão Social', value: 'razaoSocial' },
      { text: 'Telefone', value: 'telefone' },
      { text: 'Email', value: 'email' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    filter: {},
    data: [],
  }),

  created() {
    this.searchFilter();
  },

  methods: {
    reset() {
      this.$refs.form.reset()
    },

    async searchFilter() {
      try {
        this.data = await EmpresaService.getAll(this.filter);
      } catch (error) {
        console.error('Erro ao buscar empresas:', error);
      }
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