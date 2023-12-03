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
      p After witnessing the death of his girlfriend at the hands of a mysterious stranger, Squirrel is determined to get revenge.
      p Beware -- you never know what lies in store on the path of vengeance.
    template(v-slot:instructions)
      h4 Controls
      ul
        li
          strong Space bar 
          | - interact with NPC's, open doors or chests
        li
          strong F key
          | - shoot acorn
        li
          strong Shift key
          | - sprint
        li
          strong Arrow keys
          | - movement of player
        li
          strong I key
          | - Open and close inventory
    template(v-slot:notes)
      h4 Objectives
      h5 Main Level
      ul
        li Run around the map to the four chests to collect the keys to unlock the temple in the top part of the map.
        li Ghosts will damage you upon contact so watch out!
        li You can launch projectiles at enemies to eliminate them, and they may drop a random powerup on defeat.
        li Eliminating ghosts along the way gains coins and which can use the shop (house looking building) to buy health.
        li Once you collect all four keys, you can open the temple door at the top of the map.
      h5 Temple Level 1
      p Talk to the table in the top center of the map for a clue on how to complete the puzzle.
      h5 Temple Level 2
      p Swim from platform to platform and eliminate enemies along the way until you reach the other side.
      h5 Temple Level 3
      p Find the key from the chest to unlock the exit. Do not walk on the lava tiles or in front of spring traps -- they will damage you!
      h5 Temple Level 4 (Boss Fight)
      p Duke it out with the evil warlock and take your revenge for him absolutely murking your girlfriend
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'TeamSquirrel',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Team Squirrel',
      repoUrl: 'https://github.com/AndrewLabbe/Squirrel_RPG',
      developerNames: [
        'Alexander Goriup (Alec)',
        'Andrew Kulowski',
        'Andrew Labbe',
        'Garrett Goldberg',
        'Micaela Grajales (Mica)',
        'Phil Caldarella'
      ],
      managerNames: [
        'Amber Kusma'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'RPG',
      screenshots: [
        {
          filePath: require('./assets/mainmap.png'),
          description: 'What\'s in the chest?'
        },
        {
          filePath: require('./assets/ghost.png'),
          description: 'Look out!'
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
          url: 'https://drive.google.com/uc?export=download&id=1_O5uhHiIAz0UFMC1KzpaONV4BKvJgxhR',
          description: 'Download JAR File (must have Java 8 or greater installed)'
        }
      ]
    }
  }
}
</script>