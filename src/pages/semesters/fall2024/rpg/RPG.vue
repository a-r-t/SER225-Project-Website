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
        p Welcome to Rocket Rhodey, a game destined to be Twitch's next rage-game trend!
        p Good luck on your climb to the top of the mountain...and try not to fall too much.
      template(v-slot:instructions)
        p The player is a Rhode Island resident who enjoys skiing at his favorite mountain, however a rogue soldier with a rocket launcher blows up the ski lift, leaving the player stranded at the bottom of the mountain with no way up. 
        p The player decides to take the rocket launcher from the soldier and use it to propel himself up the mountain in order to be able to ski down, you as the player need to use your movement to your advantage to aim and shoot the launcher, as well as dodge various obstacles so the player can get up the mountain and complete their mission of skiing down the mountain. 
      template(v-slot:notes)
        p There two sets of key binds:
        ul
          li W, A, S, D  
          li ↑, ←, ↓, → keys 
        p Space to Jump 
        p There are various blue pylons that lay across the map, these are checkpoints for the player to use
        ul
          li Activated with the 'C' key 
          li You can approach this any way you want, traverse the mountain without using any checkpoints or make it easier and use each pylon to spawn back at that exact spot if needed. 
        p Tip: If timed right, a player can jump and shoot the ground at the same time and give themselves a “super jump”.
          | This jump gives the player almost 2x the knockback a normal rocket jump would give them 
        p Current time to beat: 
          ul
            li Regular: 1:39
            li No checkpoints and no jumps: 2:30
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'RPG',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'RPG',
        repoUrl: 'https://github.com/GalacticSeal/Rocket_Rhodey',
        developerNames: [
          'Isaias Barreto',
          'Jason Handrahan',
          'Jeremy Wiening',
          'Jesse Chaput',
          'Paul Zegarek'
        ],
        managerNames: [
          'Dylan Bellinger',
          'Steven Griffin'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.jpg'),
        genre: 'Platformer',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.jpg')
          },
          {
            filePath: require('./assets/gameplay2.jpg')
          },
          {
            filePath: require('./assets/gameplay3.jpg'),
          },
          {
            filePath: require('./assets/gameplay4.jpg'),
          }
        ],
        videos: [
          {
            filePath: require('./assets/game-video.mp4'),
            description: 'Full Game Playthrough'
          }
        ],
        downloads: [

        ]
      }
    }
  }
  </script>