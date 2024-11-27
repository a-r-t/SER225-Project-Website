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
          
        ],
        videos: [

        ],
        downloads: [

        ]
      }
    }
  }
  </script>