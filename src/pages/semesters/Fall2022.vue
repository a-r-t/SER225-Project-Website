<template lang="pug">
.root
  DreamTeam(v-if="team === 'dream-team'")
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
