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
    name: 'Skybound',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Skybound',
        repoUrl: 'https://github.com/Dvitash/Skybound',
        developerNames: [
          'Daniel Vitashkevich',
          'Ethan Kulawiak',
          'Joshua Molin',
          'Zakaria Merzougui (Zak)'
        ],
        managerNames: [
          'Aamnah Malik',
          'Tess Bossdorf'
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