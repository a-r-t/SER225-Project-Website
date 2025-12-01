<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Fall2022 from './semesters/Fall2022.vue'
import Fall2023 from './semesters/Fall2023.vue'
import Fall2024 from './semesters/Fall2024.vue'
import Fall2025 from './semesters/Fall2025.vue'

const route = useRoute()

const semester = ref('')
const team = ref('')

onMounted(() => {
  semester.value = String(route.params.semester ?? '')
  team.value = String(route.params.team ?? '')
})
</script>

<template>
  <div class="root">
    <Fall2022 v-if="semester === 'fall2022'" :team="team" />
    <Fall2023 v-else-if="semester === 'fall2023'" :team="team" />
    <Fall2024 v-else-if="semester === 'fall2024'" :team="team" />
    <Fall2025 v-else-if="semester === 'fall2025'" :team="team" />
    <p v-else class="error-message">Invalid Semester!</p>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  margin-left: 20px;
  font-size: 20px;
}
</style>
