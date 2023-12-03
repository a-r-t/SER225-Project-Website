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
  name: 'ElementalHero',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Elemental Hero',
      repoUrl: 'https://github.com/PeterZegarek/elemental-hero',
      developerNames: [
        'Hunter Yocum',
        'Lukas Martino',
        'Peter Zagarek',
        'Philip Nora'
      ],
      managerNames: [
        'Kevin Rodriguez'
      ],
      heroScreenshotFilePath: '',
      genre: 'Platformer, Action',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1zejd4S-XPo8Pwd7S4JjmJcqcwR7qWQ7r',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>