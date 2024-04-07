import Vue from 'vue'
import VueRouter from 'vue-router'
import UnidadesView from '../views/unidade/Unidades.vue'
import LeiloesView from '../views/leilao/Leiloes.vue';
import EmpresasView from '../views/empresa/Empresas.vue';
import EmpresasDetailView from '../views/empresa/Empresa.vue'

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
        path: '/empresas',
        name: 'empresas',
        component: EmpresasView
    },
    {
        path: '/empresa',
        name: 'empresa',
        component: EmpresasDetailView
    },
    {
        path: '/empresa/:id',
        name: 'empresaEdit',
        component: EmpresasDetailView
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