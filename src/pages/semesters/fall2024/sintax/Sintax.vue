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
        heroScreenshotFilePath: undefined,
        genre: 'Platformer',
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