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
      p N/A
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
      heroScreenshotFilePath: '',
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