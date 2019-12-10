import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Competencies from '../views/Competencies.vue'
import Skills from '../views/Skills.vue'
import Goals from '../views/Goals.vue'
import Portfolio from '../views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/competencies',
    name: 'competencies',
    component: Competencies
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/goals',
    name: 'goals',
    component: Goals
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
