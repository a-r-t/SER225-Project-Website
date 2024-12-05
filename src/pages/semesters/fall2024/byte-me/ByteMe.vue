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
        p Welcome to Sector Survival, where survival and violence is the name of the game!
      template(v-slot:instructions)
        p(style="font-weight: 600;") Navigating the Menu: 
          span(style="font-weight: 400;") Use the 
          span(style="font-weight: 600;") up and down arrow keys 
          span(style="font-weight: 400;") to scroll through menu options. 
            | When you're ready, press 
          span(style="font-weight: 600;") space 
          span(style="font-weight: 400;") to select.
        p(style="font-weight: 600;") Movement: 
          span(style="font-weight: 400;") Control your character using 
          span(style="font-weight: 600;") WASD 
          span(style="font-weight: 400;") -- 
          span(style="font-weight: 600;") W 
          span(style="font-weight: 400;") to move up, 
          span(style="font-weight: 600;") A 
          span(style="font-weight: 400;") to move left, 
          span(style="font-weight: 600;") S 
          span(style="font-weight: 400;") to move down, and 
          span(style="font-weight: 600;") D 
          span(style="font-weight: 400;") to move right.
        p(style="font-weight: 600;") Interacting: 
          span(style="font-weight: 400;") Press 
          span(style="font-weight: 600;") space 
          span(style="font-weight: 400;") to engage in conversations with NPCs, enter or exit shops, and pick up items off the ground.
        p(style="font-weight: 600;") Combat: 
          span(style="font-weight: 400;") To attack enemies, simply 
          span(style="font-weight: 600;") click on them 
          span(style="font-weight: 400;") to deliver damage and gain the upper hand in battle.
        p(style="font-weight: 600;") Starting or Pausing the Game: 
          span(style="font-weight: 400;") Press the 
          span(style="font-weight: 600;") P key 
          span(style="font-weight: 400;") at any time to 
          span(style="font-weight: 600;") pause 
          span(style="font-weight: 400;") or 
          span(style="font-weight: 600;") resume 
          span(style="font-weight: 400;") the game.
        p Lastly, be sure to keep your mouse pointer within the game screen, as moving it outside may occasionally cause the game to crash.

      template(v-slot:notes)
        ul
          li Start by talking to the NPCs below the starting area to open the forest zone
          li Press space on coins dropped from enemies to pick them up
          li Press space on the door to the building in the center to enter the shop
          li Use your coins to buy items in the shop by approaching them and pressing space
          li A boss will open up every 5 waves and the boss must be killed in order to progress
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'ByteMe',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Byte Me',
        repoUrl: 'https://github.com/ConnorNylund/RPG-game-SER225',
        developerNames: [
          'Billy Godoy',
          'Brady Galligan',
          'Connor Nylund',
          'Maximus Riat (Max)',
          'Tannon Bryant'
        ],
        managerNames: [
          'Harsh Gandhi',
          'Julia Bock'
        ],
        heroScreenshotFilePath: require('./assets/titlescreen.jpg'),
        genre: 'Survival, Shooter',
        screenshots: [
          {
            filePath: require('./assets/gameplay.png'),
            description: 'Gameplay'
          },
          {
            filePath: require('./assets/shop.jpg'),
            description: 'Shop'
          },
          {
            filePath: require('./assets/boss-arena.png'),
            description: 'Boss Arena'
          },
        ],
        videos: [
          {
            filePath: require('./assets/game-video-part1.mp4'),
            description: 'Full Game Playthrough - Part 1'
          },
          {
            filePath: require('./assets/game-video-part2.mp4'),
            description: 'Full Game Playthrough - Part 2'
          }
        ],
        downloads: [
          {
            url: 'https://drive.google.com/uc?export=download&id=1grSd1FwAgJhL-XiSfqBTGkHm4iLtA8eS',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>