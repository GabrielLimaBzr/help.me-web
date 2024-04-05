<template>
    <v-card color="green lighten-5" :elevation="3">
        <v-card-title>
            <div class="d-flex justify-space-between" style="width: 100%;">
                <span>Unidades</span>
                <v-btn color="green" @click="prepareCreate()">Adicionar</v-btn>
            </div>
        </v-card-title>
        <v-data-table :search="search" :headers="headers" :items="desserts" sort-by="id
        " class="elevation-2">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title style="width: 100%;">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
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
                <v-btn color="primary" @click="initialize">
                    Reset
                </v-btn>
            </template>
        </v-data-table>

        <UnidadeDetail :dialog.sync="dialog" :modo="modo" :unidade="unidade"/>
    </v-card>
</template>

<script>

import UnidadeDetail from './UnidadeDetail.vue';
import { getData } from '@/services/dataService';
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
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Calories', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            unidade: {},
        }
    },
    created() {
        this.initialize();
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    methods: {
        initialize() {
            getData().then((data) => {
                this.desserts = data;
            });
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