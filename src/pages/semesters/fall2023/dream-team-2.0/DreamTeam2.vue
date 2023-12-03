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
      heroScreenshotFilePath: '',
      genre: 'Platformer, Action',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1OSdOkrmkUWxGE-DejNgEtqKIHruWCIHz',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>