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
      p Welcome to Zoomania! 
      p An evil zookeeper has kidnapped several zoo animals, and it is up to you to journey across the globe to save them. 
      p Watch out -- the zookeeper's plan will not be so easy to foil! 
    template(v-slot:instructions)
      p Your goal is to use arrow keys to move left, right, and jump through the level to hit the caged animal at the end and free them!
      p Hit space to select anything. 
      p P to pause, and Command Q to quit. 
      p You will be taken through a tutorial level prior to the start of the game that will explain the goals and storyline.
    template(v-slot:notes)
      p Collecting all of the coins in every level will give you a special reward at the end party screen (hit the disco ball)!
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'DreamTeam',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'DreamTeam',
      repoUrl: 'https://github.com/Taylorlea43/DreamTeam-Platformer',
      developerNames: [
        'Emilio Cruz',
        'Hannah Pfersch',
        'James Phillips',
        'Taylor Lea'
      ],
      managerNames: [
        'Samantha Spinner (Sammi)'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer',
      screenshots: [
        {
          filePath: require('./assets/desert-level.png'),
          description: 'Desert Level'
        },
        {
          filePath: require('./assets/tree-level.png'),
          description: 'Tree Level'
        },
        {
          filePath: require('./assets/underwater-level.png'),
          description: 'Underwater Level'
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
          url: 'https://drive.google.com/uc?export=download&id=1h-P83zhyLtC_2ilcdJZGz5s8oJ9KxN60',
          description: 'Download JAR File (must have Java 1.8 or greater installed)'
        }
      ]
    }
  }
}
</script>