import Vue from 'vue'
import VueRouter from 'vue-router'
import TableDemo from '../views/table-demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'table-demo',
    component: TableDemo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
