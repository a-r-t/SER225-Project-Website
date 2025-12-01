import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Teams from '../pages/Teams.vue'
import Team from '../pages/Team.vue'
import Search from '../pages/Search.vue'
import { eventBus } from '../helpers/EventBus.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
  

})

router.beforeEach((to, from, next) => {
  eventBus.emit('route-change', to.name as string)
  next()
})

export default router