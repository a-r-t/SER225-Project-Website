import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Semester from '../pages/Semester.vue'
import SelectedSemester from '../pages/SelectedSemester.vue'
import Team from '../pages/Team.vue'
import SelectedTeam from '../pages/SelectedTeam.vue'

import DreamTeam from '../pages/teams/fall2022/DreamTeam.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/semesters',
    name: 'Semesters',
    component: Semester
  },
  {
    path: '/semesters/:semesterId',
    name: 'SelectedSemester',
    component: SelectedSemester
  },
  {
    path: '/semester/:semesterId/teams',
    name: 'Teams',
    component: Team
  },
  {
    path: '/semester/:semesterId/teams/:teamId',
    name: 'SelectedTeam',
    component: SelectedTeam
  },
  {
    path: '/dreamteam',
    name: 'dreamteam',
    component: DreamTeam
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
