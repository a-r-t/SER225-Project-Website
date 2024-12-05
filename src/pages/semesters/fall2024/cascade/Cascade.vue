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
          {
            url: 'https://drive.google.com/uc?export=download&id=1cyCzDg_O1qAN-w0CkYNYqqRU94Zr7ZBm',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>
