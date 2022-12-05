<template lang="pug">
.root
  .outer-container
    .container
      .semester-select-container
        h1.semesters-header Semesters
        p.no-margin.semester-select-label Select which semester you would like to see the teams for.
        v-select.semester-select(
          :options="semesters" 
          label="title" 
          placeholder="Choose a semester..." 
          v-model="selectedSemester" 
          :searchable="false" 
          class="semester-select"
          @input="onSemesterSelected"
        )
  .outer-container(v-if="selectedSemester")
    .container
      .team-select-container
        h1.teams-header Teams
        router-link.team-link(v-for="team in teams" :key="team.title" :to="`/semesters/${selectedSemester.value}/teams/${team.value}`") {{ team.title }}
</template>

<script>
export default {
  name: 'Teams',
  created() {
    if (this.$route.query.semester) {
      this.selectedSemester = this.semesters.find(semester => semester.value === this.$route.query.semester)
      this.onSemesterSelected(this.selectedSemester)
    }
  },
  data() {
    return {
      semesters: [
        { title: 'Fall 2022', value: 'fall2022' }
      ],
      selectedSemester: '',
      teams: []
    }
  },
  components: {
  },
  methods: {
    onSemesterSelected(selectedSemester) {
      this.selectedSemester = selectedSemester
      if (this.selectedSemester) {
        if (this.selectedSemester.value === 'fall2022') {
          this.teams = [
            { title: 'Cosmic Cats', value: 'cosmic-cats' },
            { title: 'Dream Team', value: 'dream-team' },
            { title: 'Lunartics', value: 'lunartics' },
            { title: 'Mean Turtles', value: 'mean-turtles' },
            { title: 'Project Z', value: 'project-z' },
            { title: 'Team Squirrel', value: 'team-squirrel' },
            { title: 'Three Remaining Musketeers', value: 'three-remaining-musketeers' },
            { title: 'Witchy Cat', value: 'witchy-cat' }
          ]
        }
      }
      return this.$router.replace({ path: this.$route.path, query: {...this.$route.query, semester: this.selectedSemester ? this.selectedSemester.value : undefined }})
        .catch(() => {})
        .finally(() => {})
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
}

.semester-select-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.semesters-header {
  margin-bottom: 15px;
}

.semester-select-label {
  margin-bottom: 10px;
}

.semester-select {
  width: 420px;
  color: #253C59;
}

.teams-header {
  margin-top: 40px;
  margin-bottom: 15px;
}

.team-select-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-link {
  margin-bottom: 10px;
  font-size: 20px;
  color: #253C59;
}

.team-link:active {
  color: #8a5f11;
}

@media only screen and (max-width: 474px) {
  .semester-select {
    width: 100%;
  }
}
</style>