import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import Index from '../views/index.vue'
import Watch from '../views/watch.vue'
import Retail from '../views/retail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/watch',
    name: 'watch',
    component: Watch
  },
  {
    path: '/retail',
    name: 'retail',
    component: Retail
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
