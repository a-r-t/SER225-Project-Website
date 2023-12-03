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
      p Inspired by Jordan Peele's movie 
        em 
          a(href="https://www.imdb.com/title/tt10954984/") Nope
        | , 
        em Yup! 
        | is a game where you play from the POV of Lucky the Horse and attempt to defeat the UFO.
      p There will be many obstacles and hazards in Lucky's way, but this horse is determined to defend the ranch and the people that care for him.
      p Along the way, Lucky will journey around the central locations and interact with the main characters from the movie.
    template(v-slot:instructions)
      p Navigate Lucky the Horse around the map to portals, which lead to puzzles that need to be completed. 
      p Complete each puzzle to unlock the final puzzle where you need to avoid the UFO and go into the glass box.
      p Controls:
      ul
        li Use the arrow keys to move.
        li Use spacebar to interact with objects, portals and NPCS.
        li Press P to use the pause menu.
    template(v-slot:notes)
      p You have to complete all five puzzles to win the game.
        | Four of the puzzles are unlocked from the start.
        | The 5th one is hidden and locked until all four starting puzzles have been completed.
      p There is a bug in our game where you randomly die...but the game will let you respawn from where you were at when you died so it's all good...
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'MeanTurtles',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Mean Turtles',
      repoUrl: 'https://github.com/rpekash/Yup-RPG-Game',
      developerNames: [
        'Dylan Bellinger',
        'Kastrijot Syla (Kash)',
        'Mia Troiano'
      ],
      managerNames: [],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Puzzle',
      screenshots: [
        {
          filePath: require('./assets/jupiters-claim.png'),
          description: 'In-game recreation of Jupiter\'s Claim from the movie Nope'
        },
        {
          filePath: require('./assets/final-puzzle.png'),
          description: 'Watch out!'
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
          url: 'https://drive.google.com/uc?export=download&id=1aprr6XeybK1zK2d9_tK-lqXzLOcV_Gib',
          description: 'Download JAR File (must have Java 1.8 or greater installed)'
        }
      ]
    }
  }
}
</script>