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
    name: 'MjsOfGameDesign',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'MJ\'s of Game Design',
        repoUrl: 'https://github.com/anthony-gon/smash-fighters',
        developerNames: [
          'Anthony Gonzalez Bravo',
          'Benjamin Delton',
          'Hayden Ward',
          'Mario Panagrosso',
          'Samuel Joor (Sam)',
        ],
        managerNames: [
          'Charlize Aponte'
        ],
        heroScreenshotFilePath: undefined,
        genre: 'Platform Fighter',
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