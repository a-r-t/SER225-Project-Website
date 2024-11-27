<template lang="pug">
.root
  Airplane(v-if="team === 'airplane'")
  ArachnerdsInc(v-else-if="team === 'arachnerds-inc'")
  Avenghers(v-else-if="team === 'avenghers'")
  ByteMe(v-else-if="team === 'byte-me'")
  Cascade(v-else-if="team === 'cascade'")
  Dawgs(v-else-if="team === 'dawgs'")
  Delirium(v-else-if="team === 'delirium'")
  GameforgeAlchemists(v-else-if="team === 'gameforge-alchemists'")
  Gamesrock(v-else-if="team === 'gamesrock'")
  Hobo(v-else-if="team === 'hobo'")
  MjsOfGameDesign(v-else-if="team === 'mjs-of-game-design'")
  Rift(v-else-if="team === 'rift'")
  RPG(v-else-if="team === 'rpg'")
  Sintax(v-else-if="team === 'sintax'")
  Skybound(v-else-if="team === 'skybound'")
  SleepySquad(v-else-if="team === 'sleepy-squad'")
  SlimeOtissey(v-else-if="team === 'slime-otissey'")
  template(v-else)
    p.error-message Invalid Team!
</template>

<script>
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

export default {
  name: 'Fall2024',
  components: {
    Airplane,
    ArachnerdsInc,
    Avenghers,
    ByteMe,
    Cascade,
    Dawgs,
    Delirium,
    GameforgeAlchemists,
    Gamesrock,
    Hobo,
    MjsOfGameDesign,
    Rift,
    RPG,
    Sintax,
    Skybound,
    SleepySquad,
    SlimeOtissey,
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
