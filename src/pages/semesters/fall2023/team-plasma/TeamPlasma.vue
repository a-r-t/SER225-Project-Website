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
      p Use the arrow keys to navigate the menu, press space to select.
      p Walk around the overworld with arrow keys, hold shift to sprint, and press space to interact with NPCs.
      p In combat, use the arrow keys to select what move you want to use. Press space to lock in your attack and see what happens!
    template(v-slot:notes)
      ul
        li The game follows a sequential storyline. If you ever get stuck, talk to find and interact with Ness
        li If you aren't sure where to go, explore around to proc Ness's dialogue trigger
        li This game is a parody and purely satire. Depictions of real people aren't meant for defamation or belitting, and are only jestures. 
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
      screenshots: [
        {
          filePath: require('./assets/intro.png'),
          description: 'Boomer needs to save the school!'
        },
        {
          filePath: require('./assets/map.png'),
          description: 'Explore the map!'
        },
        {
          filePath: require('./assets/combat.png'),
          description: 'Defeat the brainwashed professors!'
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
          url: 'https://drive.google.com/uc?export=download&id=12j9He0HTOGWVZ_dDTVd2D4ZIrZDp9AkY',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>