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
      p Oh no! Cat's kittens have been stolen by an evil space dog.
      p Cat will do anything to save them...no matter what it takes.
    template(v-slot:instructions)
      p A Space Dog came to earth and stole a cat's kittens. 
        | Your goal is to traverse through each level and finally fight the Dog in the last level to save the kittens. 
      p Controls: 
      ul
        li Use the arrow keys on the keyboard for movement
        li At the start of the game, you can click on the space bar to skip the intro sequence
        li In Level 2, press the Q Key to shoot
        li In Level 4, press the Q key while in the air to attack the enemy
    template(v-slot:notes)
      p You need to collect all of the collectables in Level 4 to have access to the boss fight.
      p You can click the M key to change the background music to one of the available options.
      p Collecting at least three collectables in each level increases your health by 1.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'CosmicCats',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Cosmic Cats',
      repoUrl: 'https://github.com/lucasmore244/SER225_Platformer',
      developerNames: [
        'Lucas Morello',
        'Momoreoluwa Ayinde (Momore)',
        'Ohm Patel',
        'Rom Wasserman',
        'Steven Griffin'
      ],
      managerNames: [
        'Isaac Crawford'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer, Runner',
      screenshots: [
        {
          filePath: require('./assets/intro-video.png'),
          description: 'Intro Sequence'
        },
        {
          filePath: require('./assets/level2.png'),
          description: 'Level 2'
        },
        {
          filePath: require('./assets/level4.png'),
          description: 'Level 4'
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
          url: 'https://drive.google.com/uc?export=download&id=1JoFEdb7Clny0HbT6xMEkjsFCAHMYtTK6',
          description: 'Download JAR File (must have Java 8 or greater installed)'
        }
      ]
    }
  }
}
</script>