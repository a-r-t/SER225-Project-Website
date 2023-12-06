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
      p Max needs you to help them find their way back home!
      p In 
        i Escape: Back to Reality
        span , you must run, jump, and fight your way through each level.
      p Watch out! This will be a very perilous journey...
    template(v-slot:instructions)
      h4 Goal
      P Your goal is to help the main character Max escape from the bunker by attacking/avoiding 
        | enemies until you reach the end of the level by hitting the exit sign box. You can also collect 
        | coins to use in the coins shop to buy a powerups. You can access the coin shop in between each level.
        
      h4 Levels:
      ul
        li The Bunker
        li Fake Outside 
        li Space
      
      h4 Controls
      
      h5 In Game Menu:
      ul
        li Use the W key to move up options in game menu
        li Use S key to move down the options in game menu
        li Use space bar to interact with the game menu and cutscenes
      
      h5 When you are playing the game:
      ul
        li The D key is to walk right
        li The A key is to walk left
        li The W key is to jump 
        li The S key is to crouch.
        li To attack the enemies, use the K key. 
        li To jump attack, press both w and k keys
        li To pause the game, use the P key
      
      h5 When you are in the shop:
      ul
        li Use the D key to move left in the selections 
        li Use the A key to move right in the selections 
        li Use Space bar to select your items
    template(v-slot:notes)
      ul
        li Walking into the prison guard and dog without attacking will kill you regardless if you have 3 lives or not. 
        li Upon beating the level by touching the exit sign at the end, the shop screen will appear to buy power ups. 
        li You are able to buy all powers at once and can only buy each power up once and are also able to rebuy the power ups in the second level shop. 
          | Example: if you buy the speed power in level 2, your speed will increase. If you buy it again in level 3, your speed will increase even more.
        li You are able to jump on the platform in level 2, first level, with all the coins. 
        li There are two ways to complete the level 3.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'Error101',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'ERROR101',
      repoUrl: 'https://github.com/iiYOUNGSHOGUN/SER-225-Platformer',
      developerNames: [
        'Charlize Aponte',
        'Gregory Jean-Baptiste',
        'Jason Jackson',
        'Jon Cela',
        'Shannon Gill'
      ],
      managerNames: [
        'Julia Woeste'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer, Action, Adventure',
      screenshots: [
        {
          filePath: require('./assets/Level1.png'),
          description: 'Level 1'
        },
        {
          filePath: require('./assets/Level2.png'),
          description: 'Level 2'
        },
        {
          filePath: require('./assets/Level3.png'),
          description: 'Level 3'
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
          url: 'https://drive.google.com/uc?export=download&id=1HQi04MpHxreooIub7io7H2LWf5GyatMD',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        },
        {
          url: 'https://drive.google.com/uc?export=download&id=1JlbxVwa_s6En0Jc9iLYYV2ZSCUp3jFbc',
          description: 'Download JAR File with Player Invincibility Mod (this is for those that want to experience the entire game without having to worry about dying)'
        }
      ]
    }
  }
}
</script>