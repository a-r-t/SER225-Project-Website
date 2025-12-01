<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { eventBus } from '../helpers/EventBus.js'

// Image import (Vue 3 compatible)
import catImg from '../assets/cat.png'

const router = useRouter()
const route = useRoute()

const selectedRoute = ref<string>('')

const updateSelectedRoute = (r: string) => {
  selectedRoute.value = r === 'Team' ? 'Teams' : r
}

onMounted(() => {
  updateSelectedRoute(route.name as string)

  eventBus.on('route-change', updateSelectedRoute)
})

onBeforeUnmount(() => {
  eventBus.off('route-change', updateSelectedRoute)
})

const homeRouteStyle = computed(() =>
  selectedRoute.value === 'Home'
    ? { borderBottom: '2px solid #253C59' }
    : {}
)

const teamsRouteStyle = computed(() =>
  selectedRoute.value === 'Teams'
    ? { borderBottom: '2px solid #253C59' }
    : {}
)

const searchRouteStyle = computed(() =>
  selectedRoute.value === 'Search'
    ? { borderBottom: '2px solid #253C59' }
    : {}
)

const toHome = () => router.push('/').catch(() => {})
const toTeams = () => router.push('/teams').catch(() => {})
const toSearch = () => router.push('/search').catch(() => {})
</script>

<template>
  <div class="root">
    <div class="container">
      <div class="title-container" @click="toHome">
        <img class="cat-image" :src="catImg" />
        <h1 class="title-label">SER225</h1>
      </div>

      <div class="routes-container">
        <div class="router-link-container">
          <p class="router-link" @click="toHome" :style="homeRouteStyle">Home</p>
        </div>

        <div class="router-link-container">
          <p class="router-link" @click="toTeams" :style="teamsRouteStyle">Teams</p>
        </div>

        <div class="router-link-container">
          <p class="router-link" @click="toSearch" :style="searchRouteStyle">Search</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-left: 20px;
  background: #99b4bf;
  height: 55px;
  border-bottom: 1px solid #253c59;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title-container {
  display: flex;
  flex-direction: row;
}

.title-container:hover {
  cursor: pointer;
}

.title-label {
  font-size: 20px;
}

.title-label::selection {
  background: transparent;
}

.routes-container {
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  gap: 25px;
}

.router-link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.router-link {
  color: #253c59;
  margin: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 3px;
}

.router-link:hover {
  cursor: pointer;
  border-bottom: 2px solid #253c59;
}

.router-link::selection {
  background: transparent;
}
</style>
