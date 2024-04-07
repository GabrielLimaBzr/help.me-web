<template>

  <v-card color="green lighten-5" :elevation="3" class="pa-4">
    <v-card-title> Empresas </v-card-title>
    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <div>
        <v-form ref="form" v-model="valid" lazy-validation>

          <v-row>
            <v-col cols="12" sm="12" md="9">
              <v-text-field color="green" v-model="entity.razaoSocial" label="Razão Social" filled :counter="64" required :rules="nonNull"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field v-mask="'##.###.###/####-##'" :rules="nonNull" :counter="18" color="green" v-model="entity.cnpj" label="CNPJ" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.logradouro" label="Logradouro" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.numero" label="Número" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.complemento" label="Complemento" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.bairro" label="Bairro" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.cep" label="CEP" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.telefone" label="Telefone" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.email" label="Email" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.site" label="Site" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.usuario" label="Usuário" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field color="green" v-model="entity.senha" label="Usuário" filled></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-btn color="success" to="/empresas" outlined>
                    <v-icon class="mr-1">mdi-backspace-reverse</v-icon>Voltar
                  </v-btn>
                </v-col>
                <v-col cols="6" class="d-flex justify-end">
                  <v-btn class="success" @click="save">Salvar</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
//import EmpresaService from '@/services/EmpresaService'
export default {
  name: 'EmpresaDetailView',

  data() {
    return {
      valid: true,
      subtitle: 'Cadastrar',
      entity: {},

      nonNull: [
        v => !!v || 'Campo requerido',
        v => (v && v.length >= 3) || 'O campo deve ter menos de 3 caracteres',
      ],
    }
  },

  methods: {
    save() {
      console.log(this.$refs.form.validate());
      
      console.log(this.entity);
    }
  },

  created() {
    if (this.entity.id) {
      this.subtitle = 'Editar';
    }
  },
}
</script>
