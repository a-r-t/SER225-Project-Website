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
    name: 'Delirium',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Delirium',
        repoUrl: 'https://github.com/Vicman8/Delirium--game',
        developerNames: [
          'Akshaj Illa',
          'Brandon McCrave',
          'Nicholas Demetrio (Nick)',
          'Tamar Foster',
          'Victor Fuda'
        ],
        managerNames: [],
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