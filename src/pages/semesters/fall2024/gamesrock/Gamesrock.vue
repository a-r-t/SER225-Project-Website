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
        
      template(v-slot:notes)
        
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
        heroScreenshotFilePath: undefined,
        genre: 'RPG',
        screenshots: [
          
        ],
        videos: [

        ],
        downloads: [

        ]
      }
    }
  }
  </script>