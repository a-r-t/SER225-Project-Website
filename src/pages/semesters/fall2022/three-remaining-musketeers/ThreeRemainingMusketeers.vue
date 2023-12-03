<template lang="pug">
.root
  Project(
    :teamName="teamName",
    :repoUrl="repoUrl",
    :developerNames="developerNames"
    :managerNames="managerNames"
    :heroScreenshotFilePath="heroScreenshotFilePath"
    :genre="genre",
    :screenshots="screenshots",
    :videos="videos",
    :downloads="downloads"
  )
    template(v-slot:about)
      p You are under attack by zombies and ghosts!
      p Can you survive ten nights while protecting both yourself and your castle?
      p Hope your combat skills are up to snuff!
    template(v-slot:instructions)
      ul
        li Move: Arrow keys
        li Pause: P
        ul
          li Makes player and base invincible while game is paused
          li Press space while option is highlighted to select it
        li Press G to equip weapons 
        li Attack: Enemies are automatically attacked when you are near them and in the range of your weapon
        li Equip weapons
        ul
          li H: axe
          ul
            li Great attack damage with decent range
          li J: spear
          ul
            li Has the best attack range but has the weakest damage
          li K: machete
          ul
            li Highest attack damage but has the lowest range 
          li L: katana
          ul
            li Second highest damage with good range
        li Inventory
          ul
            li Press I to open inventory
            li To upgrade weapons, use the arrow keys again to highlight the upgrade material (steel) then press enter and your selected weapon and it will have a bonus increase to damage
    template(v-slot:notes)
      ul
        li Axe has great attack damage with decent range
        li Spear has the best attack range but has the weakest damage
        li Machete has the highest attack damage but has the smallest range 
        li Katana has the second highest damage with good range
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'ThreeRemainingMusketeers',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Three Remaining Musketeers',
      repoUrl: 'https://github.com/kinshu0/SER225-RPG-Project',
      developerNames: [
        'Eric Carlson',
        'John Hangen (Jack)',
        'Kinshu Gupta'
      ],
      managerNames: [
        'Aidan Schmid'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Survival, Tower Defense, Horror',
      screenshots: [
        {
          filePath: require('./assets/gameplay.png'),
          description: 'Here they come!'
        }
      ],
      videos: [
        {
          filePath: require('./assets/game-video.mp4'),
          description: 'Full Game Playthrough'
        }
      ],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=10AMNTYc-JrmPwHoPkAVb5kCjF7oxjhTp',
          description: 'Download JAR File (must have Java 8 or greater installed)'
        }
      ]
    }
  }
}
</script>