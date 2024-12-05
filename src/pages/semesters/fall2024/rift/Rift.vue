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
        
      template(v-slot:instructions)
        p Your goal in the game is to eliminate all enemy waves and progress through multiple maps until you reach the final level. 
          | Use the following controls to play the game:
        ul
          li Movement: Use the arrow keys to move your character left and right and up and down.Double-tapping the up arrow key for double jump 
          li Shooting: Press the spacebar to shoot.
          li Reload: Press the R key to reload you current weapons
          li Interaction: Press Shift when near interactive weapons, Press P to open item shop
        p As you move through the levels, enemies will become tougher, and new maps will unlock. 
          | Explore each map to find power-ups and rewards that will help you progress and also defeating enemies will drop power up and coins. 
          | Be strategic with your movement and attacks to survive enemy waves and complete the game.
      template(v-slot:notes)
        p Here are some important notes to help you make the most of your gameplay experience:
        ol
          li Special Rewards: Collecting all coins in a level will allow to buy new weapons in the item shop
          li Hidden Secrets: Look out for special kind of enemy that are in the waves
          li Known Bugs:
            ul
              li Avoid rapidly double-jumping near corners, as it may cause animation glitches and you will fall through the map
          li Game Tips:
            ul 
              li Defeating enemies allow for power ups and coins drop
              li Watch for enemy patterns to anticipate their moves and plan your attacks accordingly.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Rift',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Rift',
        repoUrl: 'https://github.com/semeds/timeline_assault',
        developerNames: [
          'Jace Pivarnik',
          'Khang Nguyen',
          'Sean Emede',
          'Shawn Acheampong'
        ],
        managerNames: [],
        heroScreenshotFilePath: require('./assets/titlescreen.jpg'),
        genre: 'Action, Shooter',
        screenshots: [
        {
            filePath: require('./assets/gameplay1.jpg')
          },
          {
            filePath: require('./assets/gameplay2.jpg')
          },
          {
            filePath: require('./assets/gameplay3.jpg'),
          }
        ],
        videos: [

        ],
        downloads: [

        ]
      }
    }
  }
  </script>