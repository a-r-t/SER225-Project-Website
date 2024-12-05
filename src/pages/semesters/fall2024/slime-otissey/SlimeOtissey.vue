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
        p Alex finally made a friend but he's a little bit different with a crazy backstory. 
          | Otis the slime was experimented on by King Lodeon who has experimented on an entire Species (Slimes) to give them powers that make him stronger. 
          | Otis was given the power to morph into weapons but he managed to escape from the Kingdom and make his way to a small Village. 
          | Alex and Otis embark on an expedition to Kill the King and free the rest of the slimes from his wrath.
      template(v-slot:instructions)
        p Travel through several biomes with your best bud Otis, solving puzzles, fighting enemies, and exploring new places on a long, treacherous journey to kill King Lodeon and free all the slime species.
        h4 Key controls:
        ul
          li W - Move Upwards
          li S - Move Downwards
          li A - Move Left
          li D - Move RIght
          li Spacebar - Interact
          li I - Open/Close Inventory
          li P - Pause
        h4 Inventory Controls:
        ul
          li I - Open/Close Inventory
          li C - Toggle Controls panel
          li W - Move Up
          li S - Move Down
          li Spacebar - Select Item
      template(v-slot:notes)
        p There are 6 endings in our game each depending on your friendship level with Otis and the outcome of the boss battle with King Lodeon. 
          | The best ending is when you beat the king and also have over 150 Friendship points with Otis.
        p There are several optional puzzles in our game, Two in the village, one in the cave, and one in the Ice map. 
          | While these aren't necessary to complete, they are great opportunities to learn more about the lore and gain friendship points with Otis.
        p There are only random battle pop-ups in the Forest. 
          | For the most part, if you stay on the path you won't encounter any enemies. 
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'SlimeOtissey',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Slime Otissey',
        repoUrl: 'https://github.com/aleenagraveline/SlimeOtissey',
        developerNames: [
          'Aleena Graveline',
          'John Caceres',
          'MollyAnn O\'Malley',
          'Ryan Barbarito'
        ],
        managerNames: [
          'Eric Carlson',
          'Marcus Ferreira'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'RPG, Adventure',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.png'),
            description: 'Cave'
          },
          {
            filePath: require('./assets/gameplay2.jpg'),
            description: 'Ice Puzzle'
          },
          {
            filePath: require('./assets/gameplay3.jpg'),
            description: 'Combat'
          },
        ],
        videos: [
          {
            filePath: require('./assets/game-video.mp4'),
            description: 'Full Game Playthrough'
          },
          {
            filePath: require('./assets/trailer.mp4'),
            description: 'Game Trailer'
          }
        ],
        downloads: [
          {
            url: 'https://drive.google.com/uc?export=download&id=15U8U1mEza9ZflOg37VnqTLlikhL14pNZ',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>