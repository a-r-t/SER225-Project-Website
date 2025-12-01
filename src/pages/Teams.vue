<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import teamData from '../model/team-data.json'
import VueSelect from "vue3-select-component";
import "vue3-select-component/styles";
import type { Option } from "vue3-select-component";

type Semester = Option<string>

interface Team {
  label: string
  value: string
}

const route = useRoute()
const router = useRouter()

const semesters = ref<Semester[]>([])
const selectedSemester = ref<Semester | null>(null)
const teams = ref<Team[]>([])

const onSemesterSelected = () => {
  if (selectedSemester.value) {
    const semesterData = teamData.semesters.find(
      (s: any) => s.semester === selectedSemester.value
    )
    if (semesterData) {
      teams.value = semesterData.teams
        .map((t: any) => ({ label: t.display, value: t.team }))
        .sort((a: Team, b: Team) =>
          a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1
        )
    }
  } else {
    teams.value = []
  }

  router
    .replace({
      path: route.path,
      query: {
        ...route.query,
        semester: selectedSemester.value ? selectedSemester.value.value : undefined,
      },
    })
    .catch(() => {})
}

// Initialize semesters and preselect semester from query param if available
onMounted(() => {
  semesters.value = teamData.semesters.map((s: any) => ({
    label: s.display,
    value: s.semester,
  }))

  const querySemester = route.query.semester as string | undefined
  if (querySemester) {
    const found = semesters.value.find((s) => s.value === querySemester)
    if (found) {
      selectedSemester.value = found
      onSemesterSelected()
    }
  }
})
</script>

<template>
  <div class="root">
    <div class="outer-container">
      <div class="container">
        <div class="semester-select-container">
          <h1 class="semesters-header">Semesters</h1>
          <p class="no-margin semester-select-label">
            Select which semester you would like to see the teams for.
          </p>
          <VueSelect
            class="semester-select"
            :options="semesters"
            label="label"
            placeholder="Choose a semester..."
            v-model="selectedSemester"
            :isSearchable="false"
            @option-selected="onSemesterSelected"
          />
        </div>
      </div>
    </div>

    <div class="outer-container" v-if="selectedSemester">
      <div class="container">
        <div class="team-select-container">
          <h1 class="teams-header">Teams</h1>
          <router-link
            v-for="team in teams"
            :key="team.label"
            class="team-link"
            :to="`/semesters/${selectedSemester}/teams/${team.value}`"
            target="_blank"
          >
            {{ team.label }}
          </router-link>
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
  color: #253c59;
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
  color: #253c59;
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
