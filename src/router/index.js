import Vue from 'vue'
import VueRouter from 'vue-router'
import UnidadesView from '../views/unidade/Unidades.vue'
import LeiloesView from '../views/leilao/Leiloes.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/unidades',
        name: 'unidades',
        component: UnidadesView
    },
    {
        path: '/leiloes',
        name: 'leiloes',
        component: LeiloesView
    },
    {
        path: '*',
        redirect: '/unidades'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router