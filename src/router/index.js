import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LendForm from '../views/LendForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: LendForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
