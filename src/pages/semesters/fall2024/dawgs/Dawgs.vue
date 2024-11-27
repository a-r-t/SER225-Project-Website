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
    name: 'Dawgs',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Dawgs',
        repoUrl: 'https://github.com/SamWoodburn26/MysteryGame',
        developerNames: [
          'Adelina Chocho',
          'Ella Berry',
          'Morgan Montz',
          'Samantha Woodburn (Sam)',
          'Tuana Turhan'
        ],
        managerNames: [],
        heroScreenshotFilePath: undefined,
        genre: 'Mystery, Horror',
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