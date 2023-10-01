<template lang="pug">
.root
  .outer-container
    .container
      h1 Three Remaining Musketeers
      .repo
        a(href="https://github.com/kinshu0/SER225-RPG-Project") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Eric Carlson
        li John Hangen (Jack)
        li Kinshu Gupta
      strong Managers: 
      ul
        li Aidan Schmid
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.png')")
      h3 About
      p You are under attack by zombies and ghosts!
      p Can you survive ten nights while protecting both yourself and your castle?
      p Hope your combat skills are up to snuff!
      h3 Genre
      p Survival, Tower Defense, Horror
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/gameplay.png')")
        p.asset-description Here they come!
      h3 Instructions
      ul
        li Move: Arrow keys
        li Pause: P
        ul
          li Makes player and base invincible while game is paused
          li Press space while option is highlighted to select it
        li Press G to equip weapons 
        li Attack: Enemies are automatically attacked when you are near them and in the range of your weapon
        li Equip weapons
        ul
          li H: axe
          ul
            li Great attack damage with decent range
          li J: spear
          ul
            li Has the best attack range but has the weakest damage
          li K: machete
          ul
            li Highest attack damage but has the lowest range 
          li L: katana
          ul
            li Second highest damage with good range
        li Inventory
          ul
            li Press I to open inventory
            li To upgrade weapons, use the arrow keys again to highlight the upgrade material (steel) then press enter and your selected weapon and it will have a bonus increase to damage
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=10AMNTYc-JrmPwHoPkAVb5kCjF7oxjhTp" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1qKUJ3WvgVleZ0-mGhp5vMVVZ3qLj52B1" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'ThreeRemainingMusketeers'
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
  border: 2px solid #253C59;
  margin-left: auto;
  margin-right: auto;
}
</style>