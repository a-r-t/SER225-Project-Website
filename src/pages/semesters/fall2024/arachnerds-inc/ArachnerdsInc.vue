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
    name: 'ArachnerdsInc',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Arachnerds, Inc.',
        repoUrl: 'https://github.com/Arachnerds/SER225',
        developerNames: [
          'Brooks Jackson',
          'Callandra Ruiter',
          'Eric May',
          'Ryan Slattery'
        ],
        managerNames: [],
        heroScreenshotFilePath: undefined,
        genre: 'Platformer, Puzzle',
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