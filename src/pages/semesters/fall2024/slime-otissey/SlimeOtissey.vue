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