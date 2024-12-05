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
        p Do you have what it takes to escape from Hell?
      template(v-slot:instructions)
        p This is a platformer game, so the goal is to get to the end of the map while avoiding obstacles and fighting enemies. 
        p You can use the arrow keys to move around and space to interact with NPCs and objects or pick up items. 
        p There are various perks as well as weapons throughout the map that the player can pick up to help him win as well as other collectibles that unlock new characters for the player. 
        p After picking up a weapon, use X to fight back against your enemies.
      template(v-slot:notes)
        
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Sintax',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'SinTax',
        repoUrl: 'https://github.com/cmbrooks103/Sintax',
        developerNames: [
          'Andrew Goodman',
          'Conner Brooks-Chapman',
          'Lehan Dharmatilake',
          'Thomas Mitropoulos'
        ],
        managerNames: [
          'Camryn Keller',
          'SeSe Allerheiligen'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'Platformer',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.png')
          },
          {
            filePath: require('./assets/gameplay2.png')
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
            url: 'https://drive.google.com/uc?export=download&id=1eRB8gF_bjwY9uE1OANZMvM_7mYW63AIk',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>