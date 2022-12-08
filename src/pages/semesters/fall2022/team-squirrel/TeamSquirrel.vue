<template lang="pug">
.root
  .outer-container
    .container
      h1 Team Squirrel
      .repo
        a(href="https://github.com/AndrewLabbe/Squirrel_RPG") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Alexander Goriup (Alec)
        li Andrew Kulowski
        li Andrew Labbe
        li Garrett Goldberg
        li Micaela Grajales (Mica)
        li Phil Caldarella
      strong Managers: 
      ul
        li Amber Kusma
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.png')")
      h3 About
      p After witnessing the death of his girlfriend at the hands of a mysterious stranger, Squirrel is determined to get revenge.
      p Beware -- you never know what lies in store on the path of vengeance.
      h3 Genre
      p RPG, Puzzle
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/mainmap.png')")
        p.asset-description What's in the chest?
      .screenshot
        img(:src="require('./assets/ghost.png')")
        p.asset-description Look out!
      h3 Controls
      ul
        li
          strong Space bar 
          | - interact with NPC's, open doors or chests
        li
          strong F key
          | - shoot acorn
        li
          strong Shift key
          | - sprint
        li
          strong Arrow keys
          | - movement of player
        li
          strong I key
          | - Open and close inventory
      h3 Objectives
      h4 Main Level
      ul
        li Run around the map to the four chests to collect the keys to unlock the temple in the top part of the map.
        li Ghosts will damage you upon contact so watch out!
        li You can launch projectiles at enemies to eliminate them, and they may drop a random powerup on defeat.
        li Eliminating ghosts along the way gains coins and which can use the shop (house looking building) to buy health.
        li Once you collect all four keys, you can open the temple door at the top of the map.
      h4 Temple Level 1
      p Talk to the table in the top center of the map for a clue on how to complete the puzzle.
      h4 Temple Level 2
      p Swim from platform to platform and eliminate enemies along the way until you reach the other side.
      h4 Temple Level 3
      p Find the key from the chest to unlock the exit. Do not walk on the lava tiles or in front of spring traps -- they will damage you!
      h4 Temple Level 4 (Boss Fight)
      p Duke it out with the evil warlock and take your revenge for him absolutely murking your girlfriend
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1_O5uhHiIAz0UFMC1KzpaONV4BKvJgxhR" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1p15UwGisTTSJtU9klZ9Wp8BpH2BJSIGn" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'TeamSquirrel'
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