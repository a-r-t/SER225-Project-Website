<template lang="pug">
.root
  .container
    .title-container(@click="toHome")
      img.cat-image(:src="require('../assets/cat.png')")
      h1.title-label SER225
    .routes-container
      .router-link-container
        p.router-link(@click="toHome" :style="homeRouteStyle") Home
      .router-link-container
        p.router-link(@click="toTeams" :style="teamsRouteStyle") Teams
      .router-link-container
        p.router-link(@click="toSearch" :style="searchRouteStyle") Search
</template>

<script>
import { eventBus } from '../helpers/EventBus.js'

export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      selectedRoute: ''
    }
  },
  created() {
    this.updateSelectedRoute(this.$route.name)
    eventBus.$on('route-change', (selectedRoute) => {
      this.updateSelectedRoute(selectedRoute)
    })
  },
  computed: {
    homeRouteStyle() {
      return this.selectedRoute === 'Home' ? { 'border-bottom': '2px solid #253C59' } : {}
    },
    teamsRouteStyle() {
      return this.selectedRoute === 'Teams' ? { 'border-bottom': '2px solid #253C59' } : {}
    },
    searchRouteStyle() {
      return this.selectedRoute === 'Search' ? { 'border-bottom': '2px solid #253C59' } : {}
    },
  },
  methods: {
    updateSelectedRoute(selectedRoute) {
      this.selectedRoute = selectedRoute
      if (this.selectedRoute === 'Team') {
        this.selectedRoute = 'Teams'
      }
    },
    toHome() {
      return this.$router.push('/').catch(() => {})
    },
    toTeams() {
      return this.$router.push('/teams').catch(() => {})
    },
    toSearch() {
      return this.$router.push('/search').catch(() => {})
    },
  }
}
</script>

<style scoped>
.container {
  padding-left: 20px;
  background: #99B4BF;
  height: 55px;
  border-bottom: 1px solid #253C59;
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
  color: #253C59;
  margin: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 3px;
}

.router-link:hover {
  cursor: pointer;
  border-bottom: 2px solid #253C59;
}

.router-link::selection {
  background: transparent;
}
</style>