<script setup lang="ts">
import { defineProps } from 'vue'

import Airplane from './fall2024/airplane/Airplane.vue'
import ArachnerdsInc from './fall2024/arachnerds-inc/ArachnerdsInc.vue'
import Avenghers from './fall2024/avenghers/Avenghers.vue'
import ByteMe from './fall2024/byte-me/ByteMe.vue'
import Cascade from './fall2024/cascade/Cascade.vue'
import Dawgs from './fall2024/dawgs/Dawgs.vue'
import Delirium from './fall2024/delirium/Delirium.vue'
import GameforgeAlchemists from './fall2024/gameforge-alchemists/GameforgeAlchemists.vue'
import Gamesrock from './fall2024/gamesrock/Gamesrock.vue'
import Hobo from './fall2024/hobo/Hobo.vue'
import MjsOfGameDesign from './fall2024/mjs-of-game-design/MjsOfGameDesign.vue'
import Rift from './fall2024/rift/Rift.vue'
import RPG from './fall2024/rpg/RPG.vue'
import Sintax from './fall2024/sintax/Sintax.vue'
import Skybound from './fall2024/skybound/Skybound.vue'
import SleepySquad from './fall2024/sleepy-squad/SleepySquad.vue'
import SlimeOtissey from './fall2024/slime-otissey/SlimeOtissey.vue'

const props = defineProps<{
  team: string
}>()
</script>

<template>
  <div class="root">
    <Airplane v-if="props.team === 'airplane'" />
    <ArachnerdsInc v-else-if="props.team === 'arachnerds-inc'" />
    <Avenghers v-else-if="props.team === 'avenghers'" />
    <ByteMe v-else-if="props.team === 'byte-me'" />
    <Cascade v-else-if="props.team === 'cascade'" />
    <Dawgs v-else-if="props.team === 'dawgs'" />
    <Delirium v-else-if="props.team === 'delirium'" />
    <GameforgeAlchemists v-else-if="props.team === 'gameforge-alchemists'" />
    <Gamesrock v-else-if="props.team === 'gamesrock'" />
    <Hobo v-else-if="props.team === 'hobo'" />
    <MjsOfGameDesign v-else-if="props.team === 'mjs-of-game-design'" />
    <Rift v-else-if="props.team === 'rift'" />
    <RPG v-else-if="props.team === 'rpg'" />
    <Sintax v-else-if="props.team === 'sintax'" />
    <Skybound v-else-if="props.team === 'skybound'" />
    <SleepySquad v-else-if="props.team === 'sleepy-squad'" />
    <SlimeOtissey v-else-if="props.team === 'slime-otissey'" />

    <p v-else class="error-message">Invalid Team!</p>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  margin-left: 20px;
  font-size: 20px;
}
</style>
