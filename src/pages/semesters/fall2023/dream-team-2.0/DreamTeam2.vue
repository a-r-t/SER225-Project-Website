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
      i Lab Run 
        span is here and ready to shake up the platformer formula!
      p The name of the game is to strategically switch gravity as you make your way through each level.
      p If you want a challenge, look no further -- this game will test you!
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'DreamTeam2',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Dream Team 2.0',
      repoUrl: 'https://github.com/Kmschro/DreamTeam2',
      developerNames: [
        'Ethan Lanier',
        'Henry Cort',
        'Klaus Schroeder',
        'Thomas Morrissey'
      ],
      managerNames: [
        'Emilio Cruz'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer, Action',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1OSdOkrmkUWxGE-DejNgEtqKIHruWCIHz',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        },
        {
          url: 'https://drive.google.com/uc?export=download&id=1TUxkR930og6Or-HMOcZTve-vdiPp6b34',
          description: 'Download JAR File with Player Invincibility Mod (game is difficult -- this is for those that want to experience the entire game without having to worry about dying)'
        }
      ]
    }
  }
}
</script>