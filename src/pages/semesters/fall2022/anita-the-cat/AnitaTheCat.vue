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
      p Welcome to Witchy Cat! 
      p Join Anita the Cat in her quest to create a mysterious magic potion!
      p You will explore various different areas representing the four seasons in order to find the ingredients needed.
      p What does this potion do exactly? Well...you're just going to have to find out.
    template(v-slot:instructions)
      p Your goal is to travel through every seasonal-based area and collect three key items in order to create a potion: 
      ul 
        li Golden Leaf from the Autumn Zone
        li Perfect Sphere of Ice from the Winter Zone
        li Fire Rose from the Summer Zone
      p Controls:
      ul
        li Use the directional keys to move the player character, Anita the Cat. 
        li Hold SHIFT while moving to sprint. 
        li Press SPACE while facing an NPC character to speak to or and to use an item on its intended target. 
        ul
          li Also, will pick up items and progress through dialogue boxes. 
        li Press I to either reveal or hide the inventory. 
        li Press E while the inventory is active to drop Anita's current held item. 
        li Press O to reveal the instructions for the sound system
    template(v-slot:notes)
      ul
        li The Hall of Shame easter egg is hidden behind Pizza's house in the Summer Zone.
        li Collect 15 coins and bring them to the moyai head in the Haunted House to unlock a secret.
        ul
          li There are 4 coins in the Spring Zone, 5 in the Autumn Zone (including the Haunted House), 5 in the Winter Zone, and 3 in the Summer Zone.
        li The boat spawned by the potion appears at the bottom of the Spring Zone map.
        li There is a noticeable lag spike when picking up the Fish in the Spring Zone, should you end up dropping it from your inventory.
        li DO NOT DROP THE STAFF WHILE IN THE MAZE. YOU MAY GET SOFTLOCKED.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'AnitaTheCat',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Anita the Cat',
      repoUrl: 'https://github.com/jjnoga/Witchy-Cat-Game',
      developerNames: [
        'Camryn Keller',
        'Joseph Noga (Joe)',
        'Madigan Smith (Madi)',
        'Michael Ruocco',
        'Nicholas Centeno (Nic)'
      ],
      managerNames: [
        'Sadjell Mamon'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'RPG, Puzzle',
      screenshots: [
        {
          filePath: require('./assets/autumn.png'),
          description: 'Autumn'
        },
        {
          filePath: require('./assets/winter.png'),
          description: 'Winter'
        },
        {
          filePath: require('./assets/summer.png'),
          description: 'Summer'
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
          url: 'https://drive.google.com/uc?export=download&id=1FJOzq6t0l1sboO72krEiK2XMVmVcNTf1',
          description: 'Download JAR File (must have Java 8 or greater installed)'
        }
      ]
    }
  }
}
</script>