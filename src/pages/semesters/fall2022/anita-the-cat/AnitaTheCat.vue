<template lang="pug">
.root
  .outer-container
    .container
      h1 Anita the Cat
      .repo
        a(href="https://github.com/jjnoga/Witchy-Cat-Game") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Camryn Keller
        li Joseph Noga (Joe)
        li Madigan Smith
        li Michael Ruocco
        li Nicholas Centeno (Nic)
      strong Managers: 
      ul
        li Sadjell Mamon
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.png')")
      h3 About
      p Welcome to Witchy Cat! 
      p Join Anita the Cat in her quest to create a mysterious magic potion!
      p You will explore various different areas representing the four seasons in order to find the ingredients needed.
      p What does this potion do exactly? Well...you're just going to have to find out.
      h3 Genre
      p RPG, Puzzle
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/autumn.png')")
        p.asset-description Autumn
      .screenshot
        img(:src="require('./assets/winter.png')")
        p.asset-description Winter
      .screenshot
        img(:src="require('./assets/summer.png')")
        p.asset-description Summer
      h3 Instructions
      p Your goal is to travel through every seasonal-based area and collect three key items in order to create a potion: 
      ul 
        li Golden Leaf from the Autumn Zone
        li Perfect Sphere of Ice from the Winter Zone
        li Fire Rose from the Summer Zone
      p Controls:
      ul
        li Use the directional keys to move the player character, Anita the Cat. 
        li Hold SHIFT while moving to sprint. 
        li Press SPACE while facing an NPC character to speak to or and to use an item on its intended target. 
        ul
          li Also, will pick up items and progress through dialogue boxes. 
        li Press I to either reveal or hide the inventory. 
        li Press E while the inventory is active to drop Anita's current held item. 
        li Press O to reveal the instructions for the sound system
      h3 Notes
      ul
        li The Hall of Shame easter egg is hidden behind Pizza's house in the Summer Zone.
        li Collect 15 coins and bring them to the moyai head in the Haunted House to unlock a secret.
        ul
          li There are 4 coins in the Spring Zone, 5 in the Autumn Zone (including the Haunted House), 5 in the Winter Zone, and 3 in the Summer Zone.
        li The boat spawned by the potion appears at the bottom of the Spring Zone map.
        li There is a noticeable lag spike when picking up the Fish in the Spring Zone, should you end up dropping it from your inventory.
        li DO NOT DROP THE STAFF WHILE IN THE MAZE. YOU MAY GET SOFTLOCKED.
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1FJOzq6t0l1sboO72krEiK2XMVmVcNTf1" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1E84i6VnUN_M40zPxWoUSzLUNyRZsCZel" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'AnitaTheCat'
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