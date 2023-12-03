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
  name: 'ThreeTwo',
  components: {
    Project
  },
  data() {
    return {
      teamName: '3-2',
      repoUrl: 'https://github.com/angelami4/CSC225',
      developerNames: [
        'Aidan Armellino',
        'Angela Bruno',
        'Cole Davignon',
        'Javier Flores (Javi)'
      ],
      managerNames: [
        'Rion-Mark McLaren'
      ],
      heroScreenshotFilePath: '',
      genre: 'RPG',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1SIatV6MjUxyKA_dFuYra1sqSfDTDmJbA',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>