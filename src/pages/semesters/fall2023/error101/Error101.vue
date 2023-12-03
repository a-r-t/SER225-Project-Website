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
      p Max needs you to help them find their way back home!
      p In 
        i Escape: Back to Reality
        span , you must run, jump, and fight your way through each level.
      p Watch out! This will be a very perilous journey...
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'Error101',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'ERROR101',
      repoUrl: 'https://github.com/iiYOUNGSHOGUN/SER-225-Platformer',
      developerNames: [
        'Charlize Aponte',
        'Gregory Jean-Baptiste',
        'Jason Jackson',
        'Jon Cela',
        'Shannon Gill'
      ],
      managerNames: [
        'Julia Woeste'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer, Action, Adventure',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1HQi04MpHxreooIub7io7H2LWf5GyatMD',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>