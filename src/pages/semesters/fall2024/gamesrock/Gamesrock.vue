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
        p Dreamscape is a game where players explore diverse lands, interact with mobs, and collect loot, all leading to a climactic final boss battle that reveals the protagonist's backstory. 
          | The game features an interactive map with proximity-triggered enemies and treasures scattered across the environment. 
          | Designed for RPG enthusiasts who enjoy story-driven gameplay, Dreamscape stands out with its intriguing character sprites, compelling narrative, and simple yet engaging art style. 
      template(v-slot:instructions)
        ul
          li Movement: Use the W, A, S, D keys to move your character.
          li Sprinting: Hold Shift to sprint.
          li Combat: Press R for Ice spells, F for Fire spells, and Space Bar to fight enemies.
          li Interaction: Use Space Bar to interact with NPCs and E to pick up objects.
          li Portals: Press Enter to use portals.
          li Inventory: Access your inventory by pressing I.
          li Quest Screen: Press Q to view your active quests.
      template(v-slot:notes)
        ul
          li Main Menu Navigation: Use the W and S arrow keys to navigate the main menu. 
            | Press Space Bar to confirm your selection, whether it's starting the game or viewing credits.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Gamesrock',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Gamesrock',
        repoUrl: 'https://github.com/lolbequiet/SERgang',
        developerNames: [
          'Fahim Kalange',
          'Jacorian Adom (JJ)',
          'Michael Alvarado (Mike)',
          'Sebastian Salazar (Seb)',
        ],
        managerNames: [
          'Mia Troiano'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'RPG',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.png')
          },
          {
            filePath: require('./assets/gameplay2.png')
          },
          {
            filePath: require('./assets/gameplay3.png'),
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
            url: 'https://drive.google.com/uc?export=download&id=1YPdZKvSqpu5-pu_6DJwLs4s3cpyfKQwy',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>