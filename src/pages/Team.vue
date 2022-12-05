<template lang="pug">
.root
  Fall2022(v-if="semester === 'fall2022'" :team="team")
  template(v-else)
    p Unable to find team!
</template>

<script>
import Fall2022 from './semesters/Fall2022.vue'

export default {
  name: 'Team',
  components: {
    Fall2022
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
