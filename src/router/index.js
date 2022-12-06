import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Teams from '../pages/Teams.vue'
import Team from '../pages/Team.vue'
import Search from '../pages/Search.vue'
import { eventBus } from '../helpers/EventBus.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/semesters/:semester/teams/:team',
    name: 'Team',
    component: Team
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  eventBus.$emit('route-change', to.name)
  next()
})

export default router
