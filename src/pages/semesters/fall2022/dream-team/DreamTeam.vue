<template lang="pug">
.root
  .outer-container
    .container
      h1 Dream Team
      .repo
        a(href="https://github.com/Taylorlea43/DreamTeam-Platformer") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Emilio Cruz
        li Hannah Pfersch
        li James Phillips
        li Taylor Lea
      strong Managers: 
      ul
        li Samantha Spinner (Sammi)
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.png')")
      h3 About
      p Welcome to Zoomania! 
      p An evil zookeeper has kidnapped several zoo animals, and it is up to you to journey across the globe to save them. 
      p Watch out -- the zookeeper's plan will not be so easy to foil! 
      h3 Genre
      p Platformer
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/desert-level.png')")
        p.asset-description Desert Level
      .screenshot
        img(:src="require('./assets/tree-level.png')")
        p.asset-description Tree Level
      .screenshot
        img(:src="require('./assets/underwater-level.png')")
        p.asset-description Underwater Level
      h3 Instructions
      p Your goal is to use arrow keys to move left, right, and jump through the level to hit the caged animal at the end and free them!
      p Hit space to select anything. 
      p P to pause, and Command Q to quit. 
      p You will be taken through a tutorial level prior to the start of the game that will explain the goals and storyline.
      h3 Notes
      p Collecting all of the coins in every level will give you a special reward at the end party screen (hit the disco ball)!
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1h-P83zhyLtC_2ilcdJZGz5s8oJ9KxN60" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1I_AAKXw4kuWQYbIW5T54TkaPVoQcW1BD" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'DreamTeam'
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
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #253C59;
}
</style>