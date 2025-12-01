
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import teamData from '../model/team-data.json'

interface SearchResult {
  semester: string
  team: string
  display: string
}

const searchQuery = ref('')
const searchField = ref<'student' | 'team'>('student')
const searchResults = ref<SearchResult[] | null>(null)

const route = useRoute()
const router = useRouter()

const search = () => {
  if (!searchQuery.value) return

  router
    .replace({
      path: route.path,
      query: { ...route.query, query: searchQuery.value || undefined },
    })
    .catch(() => {})
    .finally(() => {
      const queryLower = searchQuery.value.toLowerCase()
      const matches: SearchResult[] = []
      const cache = new Set<string>()

      teamData.semesters.forEach((semester: any) => {
        semester.teams.forEach((team: any) => {
          if (searchField.value === 'student') {
            team.members.forEach((member: any) => {
              if (
                member.name.toLowerCase().includes(queryLower) ||
                (member.alias && member.alias.toLowerCase().includes(queryLower))
              ) {
                const display = `${semester.display} - ${team.display} (${member.name})`
                if (!cache.has(display)) {
                  matches.push({ semester: semester.semester, team: team.team, display })
                  cache.add(display)
                }
              }
            })
          } else if (searchField.value === 'team') {
            if (team.display.toLowerCase().includes(queryLower)) {
              const display = `${semester.display} - ${team.display}`
              if (!cache.has(display)) {
                matches.push({ semester: semester.semester, team: team.team, display })
                cache.add(display)
              }
            }
          }
        })
      })

      matches.sort((a, b) => (a.display > b.display ? 1 : -1))
      searchResults.value = matches
    })
}

// If query exists in route, initialize search
onMounted(() => {
  if (route.query.query) {
    searchQuery.value = String(route.query.query)
    search()
  }
})
</script>

<template>
  <div class="root">
    <div class="outer-container">
      <div class="container">
        <h1 class="search-header">Search</h1>
        <p class="no-margin search-info-label">
          You can search here by student name or team name to help you locate a specific project page.
        </p>

        <div class="search-container">
          <input
            class="search-input"
            v-model="searchQuery"
            placeholder="Enter search query here..."
          />
          <button class="search-button" @click="search">&#x1F50D;</button>
        </div>

        <div class="search-fields-container">
          <div class="search-field-container">
            <input
              type="radio"
              value="student"
              v-model="searchField"
              class="search-field-radio-button"
            />
            <label>Student</label>
          </div>
          <div class="search-field-container">
            <input
              type="radio"
              value="team"
              v-model="searchField"
              class="search-field-radio-button"
            />
            <label>Team</label>
          </div>
        </div>
      </div>
    </div>

    <div class="outer-container" v-if="searchResults">
      <div class="container">
        <div class="search-results">
          <h1>Results</h1>
          <template v-if="searchResults.length > 0">
            <router-link
              v-for="searchResult in searchResults"
              :key="searchResult.display"
              class="result-link"
              :to="`/semesters/${searchResult.semester}/teams/${searchResult.team}`"
              target="_blank"
            >
              {{ searchResult.display }}
            </router-link>
          </template>
          <template v-else>
            <p class="no-margin">No results found!</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  background: #5d7a8c;
}

.container {
  width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  background: #99b4bf;
  border: 2px solid #253c59;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-header {
  margin-bottom: 15px;
}

.search-info-label {
  margin-bottom: 10px;
}

.search-input {
  width: 450px;
  font-size: 16px;
  font-family: 'Roboto';
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
}

.search-container {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.search-button {
  width: 39px;
  font-size: 15px;
}

.search-fields-container {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

.search-field-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding-left: 5px;
  padding-right: 5px;
}

.search-field-radio-button {
  margin: 0px;
}

.search-results {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-link {
  margin-bottom: 10px;
  font-size: 20px;
  color: #253c59;
}

.result-link:active {
  color: #8a5f11;
}

@media only screen and (max-width: 570px) {
  .search-container {
    width: 100%;
  }

  .search-input {
    width: 100%;
  }
}
</style>
