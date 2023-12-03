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
      p Time to put your problem solving skills to the test!
      p Explore and complete each level, which introduces a new challenging puzzle for you to solve.
      p Can you get the highscore?
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'OnlyGit',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'OnlyGit',
      repoUrl: 'https://github.com/dbhargavQU/SER225Project',
      developerNames: [
        'Cameron Anthony',
        'Carmine Andranovich',
        'Mohith Donthu',
        'Haig Mesrobian'
      ],
      managerNames: [
        'William Siri (Billy)'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Puzzle, Platformer',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1VnF_1O9QKEiq5JRlH5zmkcw6VnDuqqOp',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>