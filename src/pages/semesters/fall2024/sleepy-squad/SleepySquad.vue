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
        p Are you looking for a wholesome, classic-feeling RPG?
          | If so, this is the game for you!
      template(v-slot:instructions)
        p Your goal is to defeat as many enemies as you can see, by interacting with them and fighting. 
        p When you feel like you've done enough, fight the final boss by talking to the NPC at the upper left corner of the map. 
        p In game, use the arrow keys to move around the map, with your party members following you. 
        p Press space to perform all actions, like speaking with NPCs, or selecting options in battle. Press Esc to look at the pause menu with your stats, and have the option to quit the game.
      template(v-slot:notes)
        p In-game, there is one small quest, which is to collect all items in game, with a reward at the end. 
        p The hitboxes can be a little weird, it is usually best to interact with NPCs and objects from the side, usually the right side. 
        p Another note is that the selected item menus are always the brightest color, so in-battle, the highlighted option is in yellow, and in the pause menu, the highlighted option is white.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'SleepySquad',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Sleepy Squad',
        repoUrl: 'https://github.com/Killakhi/GameProject',
        developerNames: [
          'Aditi Baghel',
          'Diego Matayoshi',
          'Khila Sanchez (Khi)',
          'Stella Leonard',
          'Trey Paraska'
        ],
        managerNames: [
          'Cameron Anthony',
          'Gregory Jean-Baptiste (Greg)'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'RPG',
        screenshots: [
          {
            filePath: require('./assets/gameplay.png')
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
            url: 'https://drive.google.com/uc?export=download&id=1Vg6iVs7mYzhL0M8Q0PSt-l5GumNWIZd5',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>