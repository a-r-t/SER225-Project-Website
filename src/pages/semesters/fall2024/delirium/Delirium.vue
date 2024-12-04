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
        p Take back your air conditioning!  
        p In Medievirium, a bear has ransacked the Quinnipiac Campus and has destroyed the parts of your dorm's air conditioning, scattering the parts around the campus.  
        p Travel around the campus, find the air conditioning, talk to strange characters, and challenge the bear in a final duel to get your AC back! 
      template(v-slot:instructions)
        ul
          li Your goal is to collect air conditioning components spread around the campus 
          li E to pick up AC parts 
          li Arrow keys to move 
          li S to save (can only be done in the dormitory) 
          li Space to interact 
          li Hold shift to sprint 
          li Doors are interacted with automatically 
      template(v-slot:notes)
        ul 
          li There is a hidden level that can be accessed from the exterior Mountainview map. 
            | WARNING: Once you are in this level you are unable to leave without quitting out the game. So it is only recommended to look for this level once you have completed the game once already or are not planning to finish it. Hint: It can only be accessed when the player is in the real world 
          li Key presses when picking up an item can be a bit finnicky. 
            | If you don't collect an item on the first try, try it again from different angles until you get the item. 
          lI The final fight can be engaged by going south of Mountainview in the hallucinated world. 
            | The fight can be done at any point in the game, but the players must answer questions during it that can only be answered correctly by seeing certain parts of the game.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Delirium',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Delirium',
        repoUrl: 'https://github.com/Vicman8/Delirium--game',
        developerNames: [
          'Akshaj Illa',
          'Brandon McCrave',
          'Nicholas Demetrio (Nick)',
          'Tamar Foster',
          'Victor Fuda'
        ],
        managerNames: [],
        heroScreenshotFilePath: require('./assets/titlescreen.jpg'),
        genre: 'RPG, Adventure, Comedy',
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
          {
            url: 'https://drive.google.com/uc?export=download&id=12xy30MmEOrvmEOTllC3sFPkbwKgWQSIh',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>