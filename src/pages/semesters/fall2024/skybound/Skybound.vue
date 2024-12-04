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
        p This is an infinite vertical scrolling platformer inspired by the mobile game Doodle Jump. 
          | Enjoy this fresh and expansive take on a classic that we all know and love.
        p Can you set the highest score?
      template(v-slot:instructions)
        ul
          li Movement is WASD or arrow keys.
          li Hold the up arrow or W for a constant jump boost.
          li Use the space bar for a dash, the dash cooldown is displayed in the top middle of the screen.
          li Click on the screen to shoot in that direction.
          li Press the down arrow or S to crouch.
          li Each powerup lasts at least 5 seconds with minor variation.
          li You are able to go through each side of the screen to come out on the opposite side.
          li Collected coins get added to your score at the end: 1 coin equals 2 points.
      template(v-slot:notes)
        ul
          li Use space and arrows to select skin colors.
          li Enemies can shoot and break the breakable tiles.
          li Enemies can't hit you through the bottom of the metal tiles.
          li The player can't stand on the cloud tiles.
          li The player can't pass through the metal tiles.
          li Killing enemies drops coins.
          li The player has a max of 5 hearts.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Skybound',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Skybound',
        repoUrl: 'https://github.com/Dvitash/Skybound',
        developerNames: [
          'Daniel Vitashkevich',
          'Ethan Kulawiak',
          'Joshua Molin',
          'Zakaria Merzougui (Zak)'
        ],
        managerNames: [
          'Aamnah Malik',
          'Tess Bossdorf'
        ],
        heroScreenshotFilePath: undefined,
        genre: 'Platformer',
        screenshots: [
          
        ],
        videos: [

        ],
        downloads: [
          {
            url: 'https://drive.google.com/uc?export=download&id=18n7nbAFI5IRuCPQFSmWlWFpchZcpGVtC',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>