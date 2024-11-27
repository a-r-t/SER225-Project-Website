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
    name: 'Rift',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Rift',
        repoUrl: 'https://github.com/semeds/timeline_assault',
        developerNames: [
          'Jace Pivarnik',
          'Khang Nguyen',
          'Sean Emede',
          'Shawn Acheampong'
        ],
        managerNames: [],
        heroScreenshotFilePath: undefined,
        genre: 'Action, Shooter',
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