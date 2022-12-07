<template lang="pug">
.root
  AnitaTheCat(v-if="team === 'anita-the-cat'")
  CosmicCats(v-else-if="team === 'cosmic-cats'")
  DreamTeam(v-else-if="team === 'dream-team'")
  Lunartics(v-else-if="team === 'lunartics'")
  MeanTurtles(v-else-if="team === 'mean-turtles'")
  ProjectZ(v-else-if="team === 'project-z'")
  TeamSquirrel(v-else-if="team === 'team-squirrel'")
  ThreeRemainingMusketeers(v-else-if="team === 'three-remaining-musketeers'")
  template(v-else)
    p.error-message Invalid Team!
</template>

<script>
import AnitaTheCat from './fall2022/anita-the-cat/AnitaTheCat.vue'
import CosmicCats from './fall2022/cosmic-cats/CosmicCats.vue'
import DreamTeam from './fall2022/dream-team/DreamTeam.vue'
import Lunartics from './fall2022/lunartics/Lunartics.vue'
import MeanTurtles from './fall2022/mean-turtles/MeanTurtles.vue'
import ProjectZ from './fall2022/project-z/ProjectZ.vue'
import TeamSquirrel from './fall2022/team-squirrel/TeamSquirrel.vue'
import ThreeRemainingMusketeers from './fall2022/three-remaining-musketeers/ThreeRemainingMusketeers.vue'

export default {
  name: 'Fall2022',
  components: {
    AnitaTheCat,
    CosmicCats,
    DreamTeam,
    Lunartics,
    MeanTurtles,
    ProjectZ,
    TeamSquirrel,
    ThreeRemainingMusketeers
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
