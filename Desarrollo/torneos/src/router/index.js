import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/crear',
    name: 'Crear',
    component: () => import(/* webpackChunkName: "about" */ '../views/Crear.vue')
  },
  {
    path: '/modificar',
    name: 'Modificar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modificar.vue')
  },
  {
    path: '/eliminar',
    name: 'Eliminar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Eliminar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}

)

export default router
