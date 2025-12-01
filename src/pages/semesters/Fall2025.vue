<script setup lang="ts">
import { defineProps } from 'vue'

import FiveSwords from './fall2025/5-swords/FiveSwords.vue'
import Bees from './fall2025/bees/Bees.vue'
import BobcatBrawlers from './fall2025/bobcat-brawlers/BobcatBrawlers.vue'
import ChaosEmeralds from './fall2025/chaos-emeralds/ChaosEmeralds.vue'
import Clankers from './fall2025/clankers/Clankers.vue'
import GoGoSqueez from './fall2025/gogo-squeez/GoGoSqueez.vue'
import KrakenKillers from './fall2025/kraken-killers/KrakenKillers.vue'
import MattHatters from './fall2025/matt-hatters/MattHatters.vue'
import MetaphoricWeapons from './fall2025/metaphoric-weapons/MetaphoricWeapons.vue'
import SADA from './fall2025/sada/SADA.vue'
import Scrumblies from './fall2025/scrumblies/Scrumblies.vue'


const props = defineProps<{
  team: string
}>()
</script>

<template>
  <div class="root">
    <FiveSwords v-if="props.team === '5-swords'" />
    <Bees v-else-if="props.team === 'bees'" />
    <BobcatBrawlers v-else-if="props.team === 'bobcat-brawlers'" />
    <ChaosEmeralds v-else-if="props.team === 'chaos-emeralds'" />
    <Clankers v-else-if="props.team === 'clankers'" />
    <GoGoSqueez v-else-if="props.team === 'gogo-squeez'" />
    <KrakenKillers v-else-if="props.team === 'kraken-killers'" />
    <MattHatters v-else-if="props.team === 'matt-hatters'" />
    <MetaphoricWeapons v-else-if="props.team === 'metaphoric-weapons'" />
    <SADA v-else-if="props.team === 'sada'" />
    <Scrumblies v-else-if="props.team === 'scrumblies'" />
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
