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
        p Avengers assemble!
        p Battle against your friends in this Avengers-themed platform fighter!
        p Which superhero will you choose?
      template(v-slot:instructions)
        h4 Game Controls:
        p(style="font-weight: 600;") Menu controls: 
          span(style="font-weight: 400;") arrow or W-A-S-D keys; space to select
        p(style="font-weight: 600;") Level Screen: 
          span(style="font-weight: 400;") arrow keys to choose levels; space to select
        p(style="font-weight: 600;") Player 1: 
          span(style="font-weight: 400;") W-A-S-D for movement; Q key to shoot
        p(style="font-weight: 600;") Player 2: 
          span(style="font-weight: 400;") Arrow keys for movement; shift key to shoot
        p(style="font-weight: 600; margin-bottom: 10px;") Misc: 
        ul(style="margin-top: 0px;")
          li p press esc key to return to main menu
          li p press P key to pause
        h4 Objective:
        p In this local multiplayer platformer game you control the character that you choose and you are given a set health. 
          | As you move around the map the goal is to strike your opponent as many times as possible to get their health down. 
          | When one player is out of health the round is over.
      template(v-slot:notes)
        ul
          li Each character has different abilities. 
            | Hulk's abilities are low jump height, low speed, but a fast firing rate. 
            | Iron Man has high jump height, moderate speed, and middle firing rate. 
            | Captain America has middle jump height, middle speed and middle firing rate. 
            | And lastly, Spiderman has the abilities of moderate jump height, fast speed, and low firing rates. 
          li Players can gain health back throughout the match by picking up the first aid kit that spawns randomly throughout the map, to heal one hit back. 
          li To activate the easter egg, players will press the keys H,E,R at the same time while on the character selection screen before characters are selected to give the characters selected ponytails in the play screen. 
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Avenghers',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'AvengHERs',
        repoUrl: 'https://github.com/TrippMenhall/AvengHERs',
        developerNames: [
          'Isabela Ayers',
          'Megan Mohr',
          'Reeya Patel',
          'Tripp Menhall',
          'Tyler Rinko'
        ],
        managerNames: [
          'Gabriella Pierce (Gabby)',
          'Milena Silva'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'Platform Fighter',
        screenshots: [
          {
            filePath: require('./assets/character-selection-screen.png'),
            description: 'Character Selection Screen'
          },
          {
            filePath: require('./assets/level-select-screen.png'),
            description: 'Level Selection Screen'
          },
          {
            filePath: require('./assets/fight-screen.png'),
            description: 'Level 1 Game Screen'
          },
          {
            filePath: require('./assets/gameover-screen.png'),
            description: 'Game Over Screen'
          },
        ],
        videos: [
          {
            filePath: require('./assets/game-video.mp4'),
            description: 'Example Fights'
          }
        ],
        downloads: [
          {
            url: 'https://drive.google.com/uc?export=download&id=1zYyjZ2uUluzceFCX7feYU-WGm2OJJAO_',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>