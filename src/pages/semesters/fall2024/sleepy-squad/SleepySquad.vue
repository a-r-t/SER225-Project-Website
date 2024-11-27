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
    name: 'SleepySquad',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Sleepy Squad',
        repoUrl: 'https://github.com/Killakhi/GameProject',
        developerNames: [
          'Aditi Baghel',
          'Diego Matayoshi',
          'Khila Sanchez (Khi)',
          'Stella Leonard',
          'Trey Paraska'
        ],
        managerNames: [
          'Cameron Anthony',
          'Gregory Jean-Baptiste (Greg)'
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