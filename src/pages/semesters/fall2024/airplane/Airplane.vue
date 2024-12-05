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
        p Set sail in (Au)rg, an adventure where your choices shape your story!
        p Explore islands, battle enemies, and complete quests to unlock the final boss island and one of the unique endings.
        p Interact with NPCs, solve puzzles, or even try your luck at romance -- your journey is yours to choose!
      template(v-slot:instructions)
        p The goal of (Au)rg is to explore and complete the nonlinear story through numerous NPC, Enemy, and Boss interactions to ultimately unlock the final boss island and receive one of several endings based on their decisions. 
          | These interactions can come in the form of fights, quests, dating minigames, and more. 
        p The player starts off on an island, but can leave the island to travel to the ocean hub-world which connects all other areas in the game. 
        p If you ever find yourself confused at what to do, try talking to the NPCs around you, especially the tutorial NPC on the first island.
        h4(style="margin-bottom: 0px") Controls:
        ul
          li WASD to move and traverse menus
          li Shift to sprint
          li Esc to pause
          li E to interact and select
          li Space to attack (while in combat)
      template(v-slot:notes)
        ul
          li There are numerous NPCs scattered around the game's map. 
            | You are encouraged to interact with them and follow their instructions as completing their mini-quests can give you certain boosts for your player.
          li Often times NPC quest lines can be progressed by killing enemies, completing tasks, or talking to other NPCs. 
            | Make sure you check in with NPCs periodically to see if they have anything new to say.
          li The game can be continued after exiting/dying by use of the continue button. 
            | However, an (Au)rg purist may be more inclined to click 'new game' each time.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Airplane',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Airplane',
        repoUrl: 'https://github.com/Oscarlin0591/SER_RPG',
        developerNames: [
          'Aislin Hayes',
          'Andrew McCleary',
          'Ayden Hafidi',
          'Jacob Levin',
          'Oscar Lin'
        ],
        managerNames: [],
        heroScreenshotFilePath: undefined,
        genre: 'RPG, Open World',
        screenshots: [
          {
            filePath: require('./assets/gameplay2.png')
          },
          {
            filePath: require('./assets/gameplay3.png')
          },
          {
            filePath: require('./assets/gameplay1.png')
          },
          {
            filePath: require('./assets/gameplay4.png')
          },
        ],
        videos: [        
          {
            filePath: require('./assets/game-video.mp4'),
            description: 'Full Game Playthrough'
          }
        ],
        downloads: [
          {
            url: 'https://drive.google.com/uc?export=download&id=1P2vWl4AgQbFmBAITfu6Tt32Dxn1nAh9C',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>