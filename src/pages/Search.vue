<template lang="pug">
.root
  .outer-container
    .container
      h1.search-header Search
      p.no-margin.search-info-label You can search here by student name or team name to help you locate a specific project page.
      .search-container
        input.search-input(v-model="searchQuery" placeholder="Enter search query here...")
        button.search-button(@click="search") &#x1F50D;
      .search-fields-container
        .search-field-container
          input.search-field-radio-button(type="radio" value="student" v-model="searchField")
          label Student
        .search-field-container
          input.search-field-radio-button(type="radio" value="team" v-model="searchField")
          label Team
  .outer-container(v-if="searchResults")
    .container
      .search-results
        h1 Results 
        template(v-if="searchResults && searchResults.length > 0")
          router-link.result-link(v-for="searchResult in searchResults" :key="searchResult.display" :to="`/semesters/${searchResult.semester}/teams/${searchResult.team}`") {{ searchResult.display }}
        template(v-else)
          p.no-margin No results found!

</template>

<script>
import teamData from '../model/team-data.json'

export default {
  name: 'Search',
  components: {
  },
  data() {
    return {
      searchQuery: '',
      searchField: 'student',
      searchResults: null,
    }
  },
  created() {
    if (this.$route.query.query) {
      this.searchQuery = this.$route.query.query
      this.search()
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return
      }
      return this.$router.replace({ path: this.$route.path, query: {...this.$route.query, query: this.searchQuery ? this.searchQuery : undefined }})
        .catch(() => {})
        .finally(() => {
          const query = this.searchQuery.toLowerCase()
          const matches = []
          const cache = new Set()
          teamData.semesters.forEach(semester => {
            semester.teams.forEach(team => {
              if (this.searchField === 'student') {
                team.members.forEach(member => {
                  if (member.toLowerCase().includes(query)) {
                    const display = `${semester.display} - ${team.display} (${member})`
                    if (!cache.has(display)) {
                      matches.push({ semester: semester.semester, team: team.team, display })
                      cache.add(display)
                    }
                  }
                })
              }
              else if (this.searchField === 'team') {
                if (team.display.toLowerCase().includes(query)) {
                  const display = `${semester.display} - ${team.display}`
                  if (!cache.has(display)) {
                    matches.push({ semester: semester.semester, team: team.team, display })
                    cache.add(display)
                  }
                }
              }
            })
          })
          matches.sort((a, b) => (a.display > b.display) ? 1 : -1)
          this.searchResults = matches
        })
      }
  }
}
</script>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  background: #5D7A8C;
}

.container {
  width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;  
  background: #99B4BF;
  border: 2px solid #253C59;
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
  border: none;
  border:solid 1px #ccc;
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
  color: #253C59;
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