<template lang="pug">
.root
  DreamTeam(v-if="team === 'dream-team'")
  template(v-else)
    p.error-message Invalid Team!
</template>

<script>
import DreamTeam from './fall2022/dream-team/DreamTeam.vue'

export default {
  name: 'Fall2022',
  components: {
    DreamTeam
  },
  props: {
    team: {
      type: String,
      required: true
    }
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
