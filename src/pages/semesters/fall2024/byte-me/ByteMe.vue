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
    name: 'ByteMe',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Byte Me',
        repoUrl: 'https://github.com/ConnorNylund/RPG-game-SER225',
        developerNames: [
          'Billy Godoy',
          'Brady Galligan',
          'Connor Nylund',
          'Maximus Riat (Max)',
          'Tannon Bryant'
        ],
        managerNames: [
          'Harsh Gandhi',
          'Julia Bock'
        ],
        heroScreenshotFilePath: undefined,
        genre: 'Survival, Shooter',
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