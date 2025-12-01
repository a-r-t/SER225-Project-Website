<script setup lang="ts">
import AnitaTheCat from './fall2022/anita-the-cat/AnitaTheCat.vue'
import CosmicCats from './fall2022/cosmic-cats/CosmicCats.vue'
import DreamTeam from './fall2022/dream-team/DreamTeam.vue'
import Lunartics from './fall2022/lunartics/Lunartics.vue'
import MeanTurtles from './fall2022/mean-turtles/MeanTurtles.vue'
import ProjectZ from './fall2022/project-z/ProjectZ.vue'
import TeamSquirrel from './fall2022/team-squirrel/TeamSquirrel.vue'
import ThreeRemainingMusketeers from './fall2022/three-remaining-musketeers/ThreeRemainingMusketeers.vue'

interface Props {
  team: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="root">
    <AnitaTheCat v-if="props.team === 'anita-the-cat'" />
    <CosmicCats v-else-if="props.team === 'cosmic-cats'" />
    <DreamTeam v-else-if="props.team === 'dream-team'" />
    <Lunartics v-else-if="props.team === 'lunartics'" />
    <MeanTurtles v-else-if="props.team === 'mean-turtles'" />
    <ProjectZ v-else-if="props.team === 'project-z'" />
    <TeamSquirrel v-else-if="props.team === 'team-squirrel'" />
    <ThreeRemainingMusketeers v-else-if="props.team === 'three-remaining-musketeers'" />

    <template v-else>
      <p class="error-message">Invalid Team!</p>
    </template>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  margin-left: 20px;
  font-size: 20px;
}
</style>
