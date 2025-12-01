<script setup lang="ts">
import { defineProps } from 'vue'

import ThreeTwo from './fall2023/3-2/ThreeTwo.vue'
import Art from './fall2023/art/Art.vue'
import DevDynasty from './fall2023/devdynasty/DevDynasty.vue'
import DreamTeam2 from './fall2023/dream-team-2.0/DreamTeam2.vue'
import ElementalHero from './fall2023/elemental-hero/ElementalHero.vue'
import Error101 from './fall2023/error101/Error101.vue'
import FireFox from './fall2023/firefox/FireFox.vue'
import LetUsCook from './fall2023/let-us-cook/LetUsCook.vue'
import OnlyGit from './fall2023/onlygit/OnlyGit.vue'
import TeamPlasma from './fall2023/team-plasma/TeamPlasma.vue'
import XoxoGossipGirl from './fall2023/xoxo-gossip-girl/XoxoGossipGirl.vue'

const props = defineProps<{
  team: string
}>()
</script>

<template>
  <div class="root">
    <ThreeTwo v-if="props.team === '3-2'" />
    <Art v-else-if="props.team === 'art'" />
    <DevDynasty v-else-if="props.team === 'devdynasty'" />
    <DreamTeam2 v-else-if="props.team === 'dream-team-2.0'" />
    <ElementalHero v-else-if="props.team === 'elemental-hero'" />
    <Error101 v-else-if="props.team === 'error101'" />
    <FireFox v-else-if="props.team === 'firefox'" />
    <LetUsCook v-else-if="props.team === 'let-us-cook'" />
    <OnlyGit v-else-if="props.team === 'onlygit'" />
    <TeamPlasma v-else-if="props.team === 'team-plasma'" />
    <XoxoGossipGirl v-else-if="props.team === 'xoxo-gossip-girl'" />

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
