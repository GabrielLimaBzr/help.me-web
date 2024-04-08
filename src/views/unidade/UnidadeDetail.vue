<template>
    <v-dialog v-model="dialogValue" max-width="600px">
        <v-card color="">
            <v-card-title class="text-h5 svariant">
                <span>{{ modo }} Unidade</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="fecharDialog">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field color="green" label="Nome"  placeholder="nome" :disabled="modo == 'read'" v-model="unidadeLocal.name"
                                hint="nome para unidade"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="fecharDialog">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="salvar" :disabled="modo == 'read'">Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'UnidadeDetailView',
    data() {
        return {
            unidadeLocal: { ...this.unidade },
        };
    },
    props: {
        dialog: Boolean,
        modo: {
            type: String,
            validator: function(value) {
                return ['new', 'edit', 'read'].includes(value);
            },
            default: 'read',
        },
        unidade: Object,
    },
    methods: {
        fecharDialog() {
            this.$emit('update:dialog', false);
        },
        salvar() {
            // Lógica para salvar a unidade
            this.fecharDialog();
        },
    },
    computed: {
        dialogValue: {
            get() {
                return this.dialog;
            },
            set(value) {
                this.$emit('update:dialog', value);
            },
        },
    },
    watch: {
        unidade: {
            immediate: true,
            handler(value) {
                this.unidadeLocal = { ...value };
            },
        },
    },
};
</script>