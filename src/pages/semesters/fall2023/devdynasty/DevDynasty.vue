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
      p Prepare to go on a time travel adventure like no other!
      p In 
        i Time Dynasties
        span , you will explore several different time periods to collect parts, solve puzzles, and fight bosses.
      p It is up to you to fix the time machine in order to return home!
    template(v-slot:instructions)
      p N/A
    template(v-slot:notes)
      p N/A
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'DevDynasty',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'devDynasty',
      repoUrl: 'https://github.com/WanderingCat27/devdynasty-game',
      developerNames: [
        'Alex Power',
        'Christian Kilduff (Chris)',
        'Ryan Fennelly',
        'Timothy McGinley',
        'Zoe McLaughlin'
      ],
      managerNames: [
        'Chris Rocco'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'RPG, Adventure',
      screenshots: [],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1xdAlqxMwMWjydnLnMzDN7f_XhnbWcplA',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>