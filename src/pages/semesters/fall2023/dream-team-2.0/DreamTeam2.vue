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
      i Lab Run 
        span is here and ready to shake up the platformer formula!
      p The name of the game is to strategically switch gravity as you make your way through each level.
      p If you want a challenge, look no further -- this game will test you!
    template(v-slot:instructions)
      p Your goal is to traverse through each platforming level and get to the portal at the end of every level.
      p There are various kinds of enemies and obstacles that you will need to avoid. 
      p There are six levels that you need to complete to finish the game. 
        | There are also coins on each level for you to collect.

      h4 Controls:
      ul
        li W key: Reverses the player's gravity
        li A key: Move Left
        li D key: Move Right
        li F key: will allow you to shoot fireballs at enemies once you get the power-up.
        li SHIFT key: will allow you to sprint while holding a movement button, once you get the sprint powerup
    template(v-slot:notes)
      ul
        li If you run out of time on the level timer, you will have to start over, but if you die on a particular level, you will respawn at the start of that level. 
        li The hitbox on the powerups may be a bit small so, you might need to move around and hit it directly on 
        li The audio may overlap a little if Greg keeps dying, so in case the audio repeats, you can just hit mute on your laptop. 

</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'DreamTeam2',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Dream Team 2.0',
      repoUrl: 'https://github.com/Kmschro/DreamTeam2',
      developerNames: [
        'Ethan Lanier',
        'Henry Cort',
        'Klaus Schroeder',
        'Thomas Morrissey'
      ],
      managerNames: [
        'Emilio Cruz'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer, Action',
      screenshots: [
        {
          filePath: require('./assets/gameplay1.png'),
          description: 'Complete each level!'
        },
        {
          filePath: require('./assets/gameplay2.png'),
          description: 'Use gravity switching to your advantage!'
        },
        {
          filePath: require('./assets/gameplay3.png'),
          description: 'Watch out for enemies!'
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
          url: 'https://drive.google.com/uc?export=download&id=1OSdOkrmkUWxGE-DejNgEtqKIHruWCIHz',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        },
        {
          url: 'https://drive.google.com/uc?export=download&id=1TUxkR930og6Or-HMOcZTve-vdiPp6b34',
          description: 'Download JAR File with Player Invincibility Mod (this is for those that want to experience the entire game without having to worry about dying)'
        }
      ]
    }
  }
}
</script>