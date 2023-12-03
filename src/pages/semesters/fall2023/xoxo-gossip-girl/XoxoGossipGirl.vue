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
  name: 'XoxoGossipGirl',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'XOXO, Gossip Girl',
      repoUrl: 'https://github.com/aamnahmalik/SER225Game',
      developerNames: [
        'Aamnah Malik',
        'Gabriella Pierce (Gabby)',
        'Milena Silva',
        'Tess Bossdorf'
      ],
      managerNames: [
        'Emily Balboni'
      ],
      heroScreenshotFilePath: '',
      genre: 'RPG, Collect-a-Thon',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1RAgN8MeH92dRJAcYkqkOLoWWLLCNK7KT',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>