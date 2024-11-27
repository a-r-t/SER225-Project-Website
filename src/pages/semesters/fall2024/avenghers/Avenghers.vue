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
    name: 'Avenghers',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'AvengHERS',
        repoUrl: 'https://github.com/TrippMenhall/AvengHERs',
        developerNames: [
          'Isabela Ayers',
          'Megan Mohr',
          'Reeya Patel',
          'Tripp Menhall',
          'Tyler Rinko'
        ],
        managerNames: [
          'Gabriella Pierce (Gabby)',
          'Milena Silva'
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