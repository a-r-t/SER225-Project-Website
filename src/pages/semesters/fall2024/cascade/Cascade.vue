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
    name: 'Cascade',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Cascade',
        repoUrl: 'https://github.com/R-Seel02/RPG-Project',
        developerNames: [
          'Mark Pfister',
          'Matthew Wheeler (Matt)',
          'Max Cheezic',
          'Pierce Conway',
          'Ryan Seely'
        ],
        managerNames: [
          'Andrew Labbe',
          'Garrett Goldberg'
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