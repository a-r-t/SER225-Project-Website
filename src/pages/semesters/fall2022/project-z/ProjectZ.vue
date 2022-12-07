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
      h3 Genre
      p Survival Shooter, Horror
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
      p Your goal is to survive as long as possible. 
        | You want to do this by running around the map and trying to eliminate all the zombies. 
        | The longer you last, the harder it gets! When you survive another wave or eliminate a zombie, you get money. 
        | You can then use this money to buy different weapons or more ammo from the NPCs scattered around the map. 
        | Good luck finding them! 
      p For Co-op, you are working together! Be friends and communicate! Keep in mind that you share money, hearts, and ammunition!
      p Alex Controls (single player or left player in co-op)
      ul
        li WALK UP KEY = W
        li WALK LEFT KEY = A
        li WALK DOWN KEY = S 
        li WALK RIGHT KEY = D
        li INTERACT KEY = SPACE (can be used to talk to NPCs)
        li SHOOT KEY = F
      p Falex Controls (right player in co-op)
      ul
        li WALK UP KEY = ARROW KEY UP
        li WALK LEFT KEY = ARROW KEY LEFT
        li WALK DOWN KEY = ARROW KEY DOWN
        li WALK RIGHT KEY = ARROW KEY RIGHT
        li INTERACT KEY = SPACE (can be used to talk to NPCs)
        li SHOOT KEY = ENTER
      h3 Notes
      p The goal of the game is to last as long as possible. You only get one extra health and one nuke (kills all zombies currently on screen). Use them wisely!
      p For Co-op, remember you are working TOGETHER! Have fun and enjoy playing with a friend!!!!!
      p Known bugs: 
      ul
        li Voice lines always play even if you skip through NPC text.
        li In co-op, when interacting with an NPC, the textbox will pop up on both player's screens instead of just the player that did the interacting.
      h3 Videos
      .video
        video(:src="require('./assets/single-player.mp4')" controls preload="metadata")
        p.asset-description Single-Player Gameplay
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1OwfyBg3JmUJwAO1b5rR6IIXqZrmzg5LV" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1oUYSADH5B-SuMtgQc4zgf2PLMM-TGgu6" download target="_blank") Download EXE File (Windows Only)
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