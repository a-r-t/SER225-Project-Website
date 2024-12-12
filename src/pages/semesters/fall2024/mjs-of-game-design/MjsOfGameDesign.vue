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
        p Smash Fighters is a game very similar to smash bros. 
          | There are different character classes that you can use to fight with.
      template(v-slot:instructions)
        p Once you load into the homescreen you have the option to go into the training room where you can get comfortable with the controls. 
          | Or hop right into the game where a player will be chosen to pick a map then both players will pick their characters.
        h4(style="margin-bottom: 2px;") Controls
        .controls-container(style="display: flex; flex-direction: 'column'; gap: 40px;")
          .player-one
            p(style="font-weight: 600;") Player One 
            p(style="margin: 0px;") Jump: W
            p(style="margin: 00px;") Crouch: S
            p(style="margin: 0px;") Right: D
            p(style="margin: 0px;") Left: A
            p(style="margin: 0px;") Attack: E
            p(style="margin: 0px;") Select: Space
          .player-two
            p(style="font-weight: 600;") Player Two
            p(style="margin: 0px;") Jump: I
            p(style="margin: 0px;") Crouch: K
            p(style="margin: 0px;") Right: L
            p(style="margin: 0px;") Left: J
            p(style="margin: 0px;") Attack: U
            p(style="margin: 0px;") Select: Enter
      template(v-slot:notes)
        p Have fun and beat your friends in a fight.
        p Also, when you see the "Error" intro screen when first booting up the game, hit "Space" to continue to the main menu after an epic cutscene.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'MjsOfGameDesign',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'MJ\'s of Game Design',
        repoUrl: 'https://github.com/anthony-gon/smash-fighters',
        developerNames: [
          'Anthony Gonzalez Bravo',
          'Benjamin Delton',
          'Hayden Ward',
          'Mario Panagrosso',
          'Samuel Joor (Sam)',
        ],
        managerNames: [
          'Charlize Aponte'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'Platform Fighter',
        screenshots: [
          {
            filePath: require('./assets/gameplay.png')
          },
        ],
        videos: [
          {
            filePath: require('./assets/game-video.mp4'),
            description: 'Full Game Playthrough'
          }
        ],
        downloads: [
          {
            url: 'https://drive.google.com/uc?export=download&id=1R5jLG02BpLIJhK9bSHNuoHS2CH2gVxyV',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>