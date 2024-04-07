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
              <v-text-field :disabled ="readonly" required color="green" v-model="entity.razaoSocial" label="Razão Social" filled
                :counter="64" maxlength="64" :rules="[rules.required, rules.min]"></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" md="3">
              <v-text-field :disabled="readonly" required v-mask="'##.###.###/####-##'" :rules="[rules.required]" :counter="18" color="green"
                v-model="entity.cnpj" label="CNPJ" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="8" md="6">
              <v-text-field :disabled="readonly" color="green" v-model="entity.logradouro" label="Logradouro" filled maxlength="64"
                :counter="64"></v-text-field>
            </v-col>

            <v-col cols="12" sm="4" md="2">
              <v-text-field :disabled="readonly" color="green" v-model="entity.numero" label="Número" filled maxlength="10" :counter="10">
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field :disabled="readonly" color="green" v-model="entity.complemento" label="Complemento" filled maxlength="64"
                :counter="64"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field :disabled="readonly" color="green" v-model="entity.bairro" label="Bairro" filled maxlength="64"
                :counter="64"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field :disabled="readonly" color="green" v-model="entity.cep" label="CEP" filled v-mask="'#####-###'"
                placeholder="00000-000"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field :disabled="readonly" color="green" v-mask="'(##) ####-####'" placeholder="(00) 0000-0000"
                v-model="entity.telefone" label="Telefone" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field :disabled="readonly" color="green" required :rules="[rules.email]" v-model="entity.email" label="Email" filled
                maxlength="254"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field :disabled="readonly" color="green" v-model="entity.site" label="Site" filled maxlength="254"
                :counter="254"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field :disabled="readonly" color="green" required maxlength="20" :counter="20" :rules="[rules.required]"
                v-model="entity.usuario" label="Usuário" filled></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="3">
              <v-text-field :disabled="readonly" v-model="entity.senha" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Senha"
                hint="Mínimo 3 caracteres" counter filled @click:append="show1 = !show1" color="green"></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-btn color="success" to="/empresas" outlined>
                    <v-icon class="mr-1">mdi-backspace-reverse</v-icon>Voltar
                  </v-btn>
                </v-col>
                <v-col cols="6" class="d-flex justify-end">
                  <v-btn :disabled="readonly" class="success" @click="save">Salvar</v-btn>
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

import EmpresaService from '@/services/EmpresaService'
export default {
  name: 'EmpresaDetailView',

  data() {
    return {
      valid: true,
      readonly: false,
      subtitle: 'Cadastrar',
      entity: {},
      rules: {
        required: v => !!v || 'Campo requerido.',
        min: v => typeof v === 'string' && v.length >= 3 || 'O campo deve ter mais de 3 caracteres',
        email: v => /.+@.+\..+/.test(v) || 'O email deve ser válido',
      },
      show1: false,
    }
  },

  methods: {
    save() {
      console.log('bateus');
      if (this.$refs.form.validate()) {
        if (this.entity.id) {
          this.put()
        } else {
          this.create();
        }
      }
    },

    async put() {
      try {
        if (this.$refs.form.validate()) {
          await EmpresaService.put(this.entity, this.entity.id);
          this.$router.push('/empresas');
        }
      } catch (error) {
        const { data } = error.response;
        if (data && data.camposDeErro) {
          data.camposDeErro.forEach(erro => {
            console.error(`Erro no campo ${erro.fieldName}: ${erro.message}`);
          });
        }
        console.error('Erro ao criar empresa:', error);
      }
    },

    async create() {
      try {
        if (this.$refs.form.validate()) {
          await EmpresaService.create(this.entity);
          this.$router.push('/empresas');
        }
      } catch (error) {
        const { data } = error.response;
        if (data && data.camposDeErro) {
          data.camposDeErro.forEach(erro => {
            console.error(`Erro no campo ${erro.fieldName}: ${erro.message}`);
          });
        }
        console.error('Erro ao criar empresa:', error);
      }
    },

    async getById(id) {
      try {
        this.entity = await EmpresaService.getById(id);
      } catch (error) {
        console.error('Erro ao buscar empresas:', error);
      }
    },
  },

  created() {
    this.entity.id = this.$route.params.id;
    this.readonly = this.$route.query.readonly === 'true';

    if (this.entity.id) {
      this.subtitle = 'Editar';
      this.getById(this.entity.id);
      if (this.readonly) {
        this.subtitle = 'Visualizar';
      }
    }
  },
}
</script>
