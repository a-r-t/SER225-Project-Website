<template lang="pug">
.root
  .outer-container
    .container
      h1 Mean Turtles
      .repo
        a(href="https://github.com/rpekash/Yup-RPG-Game") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Dylan Bellinger
        li Kastrijot Syla (Kash)
        li Mia Troiano
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.png')")
      h3 About
      p Inspired by Jordan Peele's movie 
        em 
          a(href="https://www.imdb.com/title/tt10954984/") Nope
        | , 
        em Yup! 
        | is a game where you play from the POV of Lucky the Horse and attempt to defeat the UFO.
      p There will be many obstacles and hazards in Lucky's way, but this horse is determined to defend the ranch and the people that care for him.
      p Along the way, Lucky will journey around the central locations and interact with the main characters from the movie.
      h3 Genre
      p Puzzle
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/jupiters-claim.png')")
        p.asset-description In-game recreation of Jupiter's Claim from the movie Nope
      .screenshot
        img(:src="require('./assets/final-puzzle.png')")
        p.asset-description Watch out!
      h3 Instructions
      p Navigate Lucky the Horse around the map to portals, which lead to puzzles that need to be completed. 
      p Complete each puzzle to unlock the final puzzle where you need to avoid the UFO and go into the glass box.
      p Controls:
      ul
        li Use the arrow keys to move.
        li Use spacebar to interact with objects, portals and NPCS.
        li Press P to use the pause menu.
      h3 Notes
      p You have to complete all five puzzles to win the game.
        | Four of the puzzles are unlocked from the start.
        | The 5th one is hidden and locked until all four starting puzzles have been completed.
      p There is a bug in our game where you randomly die...but the game will let you respawn from where you were at when you died so it's all good...
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1aprr6XeybK1zK2d9_tK-lqXzLOcV_Gib" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1twfFA0ERSUszkbex2h_ighE9hhEQ83pP" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'MeanTurtles'
}
</script>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  background: #5D7A8C;
}

.container {
  width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;  
  background: #99B4BF;
  border: 2px solid #253C59;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.screenshot {
  display: flex;
  flex-direction: column;
}

img {
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  height: auto;
  border-radius: 7px;
  border: 2px solid #253C59;
}

a {
  color: #253C59;
}

a:active {
  color: #8a5f11;
}

.asset-description {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 5px;
  font-style: italic;
  margin-bottom: 30px;
}

.download-container {
  margin-bottom: 10px;
}

.video {
  display: flex;
  flex-direction: column;
}

video {
  max-width: 100%;
  border-radius: 7px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #253C59;
}
</style>