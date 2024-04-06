<template>

    <v-card color="green lighten-5" :elevation="3" class="pa-4">
        <v-card-title> Empresas </v-card-title>
        <v-card-subtitle> REVER ISSO </v-card-subtitle>
        <v-divider class="mx-4"></v-divider>

        <v-card-text>
      <div>
        <v-form ref="form">

          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.razaoSocial" label="Razão Social" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.cnpj" label="CNPJ" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.bairro" label="Bairro" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.cep" label="CEP" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4" class="text-left">
              <v-btn color="success" to="/empresas" outlined>
                <v-icon class="mr-1">mdi-backspace-reverse</v-icon>Voltar
              </v-btn>
            </v-col>

            <v-col cols="12" sm="6" md="8" class="text-right">
              <v-btn class="success"  @click="save">Adicionar</v-btn>
            </v-col>
          </v-row>

        </v-form>
      </div>
    </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'EmpresaDetailView',

    data() {
        return {
            entity: {}
        }
    },

    methods: {
        save() {
            console.log('save');
        }
    }



}
</script>
