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
    name: 'GameforgeAlchemists',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'GameforgeAlchemists',
        repoUrl: 'https://github.com/JLaFrance3/SER225-Game',
        developerNames: [
          'Dawit Kasy',
          'Erin Swearingen',
          'Jean LaFrance',
          'Skhy Morris',
          'Thomas Rua (Thom)',
        ],
        managerNames: [
          'Caden Effrece',
          'Caleb Muriuki-Mureithi'
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