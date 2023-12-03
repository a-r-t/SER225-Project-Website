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
      p What happens when you mix an roguelike game with a food theme?
      p You get an incredibly unique experience full of rooms to explore, enemies to defeat, and skills to unlock.
      p And yes, everything in this game is food related. And we mean EVERYTHING.
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'LetUsCook',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Let Us Cook',
      repoUrl: 'https://github.com/Ceffrece/SER225-Project',
      developerNames: [
        'Caden Effrece',
        'Kyle MacDonald',
        'Marcus Ferreira',
        'Riley Damasco',
        'William Regan (Bill)'
      ],
      managerNames: [
        'Brian Wanamaker'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Roguelike',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1fM7Q_HD_RSsifLvvVvkP-p4dWEVKRbFc',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>