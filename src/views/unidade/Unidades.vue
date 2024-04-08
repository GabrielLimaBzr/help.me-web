<template>
    <v-card color="svariant" :elevation="3" class="pa-4">
        <v-card-title>
            <div class="d-flex justify-space-between" style="width: 100%;">
                <span>Unidades</span>
                <v-btn class="success" @click="prepareCreate()">Adicionar</v-btn>
            </div>
        </v-card-title>
        <v-card-subtitle> Consultar </v-card-subtitle>
        <v-divider class="mx-4"></v-divider>

        <v-data-table :search="search" :headers="headers" :items="data" sort-by="id
        " class="elevation-2 mt-4">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title style="width: 100%;">
                        <v-text-field color="green" v-model="search" append-icon="mdi-magnify" label="Search"
                            single-line hide-details>
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

        <UnidadeDetail :dialog.sync="dialog" :modo="modo" :unidade="unidade" />
    </v-card>
</template>

<script>

import UnidadeDetail from './UnidadeDetail.vue';
import UnidadeService from '@/services/UnidadeService';
export default {
    name: 'UnidadesView',

    components: {
        UnidadeDetail
    },

    data() {
        return {
            dialog: false,
            modo: 'read',
            dialogDelete: false,
            search: '',
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Nome', value: 'nome' },
                { text: 'Criado em', value: 'createdAt', sortable: false },
                { text: 'Atualizado em', value: 'updatedAt', sortable: false },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            data: [],
            unidade: {},
        }
    },
    created() {
        this.initialize();
    },

    methods: {
        async initialize() {
            try {
                this.data = await UnidadeService.getAll();
            } catch (error) {
                console.error('Erro ao carregar unidades:', error);
            }
        },

        prepareCreate() {
            this.modo = 'new';
            this.dialog = true;
            this.unidade = {};
        },

        prepareEdit(item) {
            console.log(item);
            this.modo = 'edit';
            this.dialog = true;
            this.unidade = item;
        },

        prepareRead(item) {
            this.modo = 'read';
            this.dialog = true;
            this.unidade = item;
        },

    }
};
</script>