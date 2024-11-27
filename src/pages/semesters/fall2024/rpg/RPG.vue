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
    name: 'RPG',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'RPG',
        repoUrl: 'https://github.com/GalacticSeal/Rocket_Rhodey',
        developerNames: [
          'Isaias Barreto',
          'Jason Handrahan',
          'Jeremy Wiening',
          'Jesse Chaput',
          'Paul Zegarek'
        ],
        managerNames: [
          'Dylan Bellinger',
          'Steven Griffin'
        ],
        heroScreenshotFilePath: undefined,
        genre: 'Platformer, Rage',
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