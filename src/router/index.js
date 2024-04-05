import Vue from 'vue'
import VueRouter from 'vue-router'
import UnidadeView from '../views/unidade/Unidades.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'unidade',
    component: UnidadeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router