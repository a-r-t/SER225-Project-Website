<template lang="pug">
.root
  .outer-container
    .container
      h1 Project Z
      .repo
        a(href="https://github.com/kevin-rodri/ZombieLand") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Aaryan Kapoor
        li Brian Wanamaker
        li Harsh Gandhi
        li Kevin Rodriguez
        li Matt Nova
      strong Managers: 
      ul
        li Kyle Chutjian
      h2 Game
      img(:src="require('./assets/titlescreen.png')")
      h3 About
      p Play Project Z...if you dare! 
      p An endless horde of zombies are coming at you -- are you ready to fight to survive?
      p Don't go alone! You can team up with a friend and get them in on the action in co-op mode.
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/single-player.png')")
        p.asset-description Single Player
      .screenshot
        img(:src="require('./assets/co-op.png')")
        p.asset-description Co-op
      h3 Instructions
      p The goal of each level is to find the key, and then use that key to unlock the animal from the cage.
      p If an enemy hits the player, they will take damage. Take enough damage and its game over.
      h3 Notes
      p Collecting all of the coins in every level will give you a special reward at the end party screen (hit the disco ball)!
      h3 Videos
      .video
        video(:src="require('./assets/single-player.mp4')" controls preload="metadata")
        p.asset-description Single-Player Gameplay
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1crSxO2C24-0mCX-xPFIAgDQ5V76ztXA0" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1p2ImKstl6pikelwc7YOB9Z8yVvvpvOgk" download target="_blank") Download EXE File (Windows Only)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1p2ImKstl6pikelwc7YOB9Z8yVvvpvOgk" download target="_blank") Download APP File (MacOS Only)
</template>

<script>
export default {
  name: 'ProjectZ'
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

video {
  max-width: 100%;
  border-radius: 7px;
}
</style>