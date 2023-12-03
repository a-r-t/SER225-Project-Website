<template lang="pug">
.root
  ThreeTwo(v-if="team === '3-2'")
  Art(v-else-if="team === 'art'")
  DevDynasty(v-else-if="team === 'devdynasty'")
  DreamTeam2(v-else-if="team === 'dream-team-2.0'")
  ElementalHero(v-else-if="team === 'elemental-hero'")
  Error101(v-else-if="team === 'error101'")
  FireFox(v-else-if="team === 'firefox'")
  LetUsCook(v-else-if="team === 'let-us-cook'")
  OnlyGit(v-else-if="team === 'onlygit'")
  TeamPlasma(v-else-if="team === 'team-plasma'")
  XoxoGossipGirl(v-else-if="team === 'xoxo-gossip-girl'")

  template(v-else)
    p.error-message Invalid Team!
</template>

<script>
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

export default {
  name: 'Fall2022',
  components: {
    ThreeTwo,
    Art,
    DevDynasty,
    DreamTeam2,
    ElementalHero,
    Error101,
    FireFox,
    LetUsCook,
    OnlyGit,
    TeamPlasma,
    XoxoGossipGirl
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
