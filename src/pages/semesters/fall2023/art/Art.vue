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
      p Welcome to Quinnipiac!
      p As a newly admitted student, it is up to you to complete all quests across campus in order to graduate.
      p Along the way, you will explore popular campus locations and meet several &#40;in&#41;famous characters that make Quinnipiac the special school that it is.
      p Go Bobcats!
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'Art',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'ART',
      repoUrl: 'https://github.com/Sligertiger1230/SER-225-Game',
      developerNames: [
        'Brooks Jackson',
        'Connor Ryan',
        'Hayden Lacy',
        'Julia Bock',
        'Ryan Sliger'
      ],
      managerNames: [],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Adventure, RPG',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1JjgZAeDih2O0M4XmYUTq7lV0tpHhVr7q',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>