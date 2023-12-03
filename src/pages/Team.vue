<template lang="pug">
.root
  Fall2022(v-if="semester === 'fall2022'" :team="team")
  Fall2023(v-else-if="semester === 'fall2023'" :team="team")
  template(v-else)
    p.error-message Invalid Semester!
</template>

<script>
import Fall2022 from './semesters/Fall2022.vue'
import Fall2023 from './semesters/Fall2023.vue'

export default {
  name: 'Team',
  components: {
    Fall2022,
    Fall2023
  },
  data() {
    return {
      semester: '',
      team: ''
    }
  },
  created() {
    this.semester = this.$route.params.semester
    this.team = this.$route.params.team
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-left: 20px;
  font-size: 20px;
}
</style>