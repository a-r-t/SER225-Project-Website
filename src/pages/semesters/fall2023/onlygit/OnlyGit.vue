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
      p Time to put your problem solving skills to the test!
      p Explore and complete each level, which introduces a new challenging puzzle for you to solve.
      p Can you get the highscore?
    template(v-slot:instructions)
      h4 Objective:
      p As a skillful thief, your mission is to navigate through a labyrinth of cunning booby traps and vigilant guards. 
        | Your ultimate goal is to make a daring escape from the high-security facility.
      
      h4 Controls:
      ul
        li Up Arrow: Allows you to jump
        li Down Arrow: Lay down to avoid detection or navigate low spaces
        li Right Arrow: Move forward, advancing through the facility
        li Left Arrow: Move backward, retreat or reposition as needed
        li Space Bar: Interact with objects and elements within the game Helpful Tips:
    template(v-slot:notes)
      ul
        li If you find yourself at a loss on how to conquer Level 1, seek out the wise walrus for guidance. 
          | This intriguing character holds the key to progressing further in your adventure.
        li Keep an eye out for sparkling gems scattered throughout the facility. 
          | Each gem you collect unveils fascinating facts and secrets, enriching your gameplay experience.
      
      p Should you need a reminder of the controls or require further assistance, access the instruction page available in the main menu. 
        | Here, you'll find detailed guidelines and helpful hints to enhance your thieving escapade.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'OnlyGit',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'OnlyGit',
      repoUrl: 'https://github.com/dbhargavQU/SER225Project',
      developerNames: [
        'Cameron Anthony',
        'Carmine Andranovich',
        'Mohith Donthu',
        'Haig Mesrobian'
      ],
      managerNames: [
        'William Siri (Billy)'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Puzzle, Platformer',
      screenshots: [
        {
          filePath: require('./assets/Level1.png'),
          description: 'Level 1'
        },
        {
          filePath: require('./assets/Level2.jpg'),
          description: 'Level 2'
        },
        {
          filePath: require('./assets/Level3.jpg'),
          description: 'Level 3'
        },
        {
          filePath: require('./assets/Level4.jpg'),
          description: 'Level 4'
        }
      ],
      videos: [
        {
          filePath: require('./assets/game-video.mp4'),
          description: 'Full Game Playthrough'
        }
      ],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1VnF_1O9QKEiq5JRlH5zmkcw6VnDuqqOp',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>