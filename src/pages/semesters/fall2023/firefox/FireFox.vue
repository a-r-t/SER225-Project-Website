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
      p Oh no! The legendary FireFox has lost its orb, and it is up to you to recover it!
      p Prepare to go on an adventure like no other as you explore interesting worlds, meet zany characters, and solve engaging puzzles!
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'FireFox',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'FireFox',
      repoUrl: 'https://github.com/Sharktroid/SER-225-Game-RPG',
      developerNames: [
        'Aaron Toomer',
        'Calvin Pancavage',
        'Evan Quinn',
        'Juliet Lombardi',
        'Shannon Brickett'
      ],
      managerNames: [
        'Matt Nova'
      ],
      heroScreenshotFilePath: require('./assets/hubworld.png'),
      genre: 'RPG, Puzzle',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1wR1mSbngfbJO_gmPewU9S4499rC2iUbv',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>