<template lang="pug">
.root
  .outer-container
    .container
      h1 Cosmic Cats
      .repo
        a(href="https://github.com/lucasmore244/SER225_Platformer") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Lucas Morello
        li Momoreoluwa Ayinde
        li Ohm Patel
        li Rom Wasserman
        li Steven Griffin
      strong Managers: 
      ul
        li Isaac Crawford
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.png')")
      h3 About
      p Oh no! Cat's kittens have been stolen by an evil space dog.
      p Cat will do anything to save them...no matter what it takes.
      h3 Genre
      p Platformer, Runner
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/intro-video.png')")
        p.asset-description Intro Sequence
      .screenshot
        img(:src="require('./assets/level2.png')")
        p.asset-description Level 2
      .screenshot
        img(:src="require('./assets/level4.png')")
        p.asset-description Level 4
      h3 Instructions
      p A Space Dog came to earth and stole a cat’s kittens. 
        | Your goal is to traverse through each level and finally fight the Dog in the last level to save the kittens. 
      p Controls: 
      ul
        li Use the arrow keys on the keyboard for movement
        li At the start of the game, you can click on the space bar to skip the intro sequence
        li In Level 2, press the Q Key to shoot
        li In Level 4, press the Q key while in the air to attack the enemy
      h3 Notes
      p You need to collect all of the collectables in Level 4 to have access to the boss fight.
      p You can click the M key to change the background music to one of the available options.
      p Collecting at least three collectables in each level increases your health by 1.
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1JoFEdb7Clny0HbT6xMEkjsFCAHMYtTK6" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1pnDqkRgUGeyeWjC2umQ7znNAcj2UVgo6" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'CosmicCats'
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
}
</style>