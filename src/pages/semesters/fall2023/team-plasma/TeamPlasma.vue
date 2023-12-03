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
      p HELP! Several Quinnipiac professors have suddenly started acting strange and are causing chaos across campus.
      p Play as Boomer as you explore campus, defeat enemies in combat, and get to the bottom of this mystery in order to save Quinnipiac!
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'TeamPlasma',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Team Plasma',
      repoUrl: 'https://github.com/AnzilottiChristopher/SER225_Plasma',
      developerNames: [
        'Caleb Muriuki-Mureithi',
        'Christopher Anzilotti',
        'Lucas Jenkins',
        'Omar Fofana',
        'SeSe Allerheiligen'
      ],
      managerNames: [
        'Humna Hanif'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'RPG',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=12j9He0HTOGWVZ_dDTVd2D4ZIrZDp9AkY',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>