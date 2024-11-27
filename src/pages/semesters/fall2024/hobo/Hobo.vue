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
    name: 'Hobo',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Hobo',
        repoUrl: 'https://github.com/JessicaTheodore/TMobile',
        developerNames: [
          'Andrew Ehlers',
          'Evan Vastakis',
          'Grant Foody',
          'Jessica Theodore (Jess)',
          'Natalie Spiska'
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