<template lang="pug">
.root
  .outer-container
    .container
      h1 Lunartics
      .repo
        a(href="https://github.com/jacobhogrefe/hogrefeProject") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li Elizabeth Delea (Ellie)
        li Jake Hogrefe
        li Lauren Sloane
        li Matt Zingarella
      strong Managers: 
      ul
        li Kevin Couillard
      h2 Game
      .screenshot
        img(:src="require('./assets/titlescreen.jpg')")
      h3 About
      p Welcome to Moon Valley!
      p In this story-driven game, it is up to you to help the mysterious walrus remember who he is.
      p Along the journey, you will explore many different biomes and come across some very zany characters -- hope you're prepared for the ride!
      h3 Genre
      p RPG
      h3 Screenshots
      .screenshot
        img(:src="require('./assets/desert-biome.jpg')")
        p.asset-description Desert Biome
      .screenshot
        img(:src="require('./assets/inventory.jpg')")
        p.asset-description Inventory Screen
      h3 Instructions
      ul
        li Go to the controls menu option to learn how to play the game (hit space to select a menu option).
        li There are a total of 5 areas to explore and access through the use of collectibles and quests. 
        li The main questbearer that sets a heavy plot in motion, is the blue walrus on the starting map. Listen to the walrus carefully.
        li Through some quests, there is an ability to obtain and place furniture within a house (or even outside) by placing it and interacting with it.
        li There is also an ability to put on and remove clothing from within the inventory.
        li You can enter a house by approaching the door and pressing space (except in the mountains biome, press space on the lower ladder).
      h3 Notes
      p Finishing the main quests yields a really cool effect with the starting map walrus.
      p To put on clothes, go to the inventory and hit the "Equip Clothes" button on a wearable item. 
        | They can be removed by going back to the inventory and hitting the "Remove Clothes" button.
      p To place furniture, go to the inventory and hit the "Place" button.
        | Hit space while in front of the furniture to move it to a desired location, and hit space again to drop it to that location.
      h3 Videos
      .video
        video(:src="require('./assets/game-video.mp4')" controls preload="metadata")
        p.asset-description Full Game Playthrough
      h3 Downloads
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=17FQBEqEYobbL4JqNu31y_y5uKNYDaPQ9" download target="_blank") Download JAR File (must have Java 1.8 or greater installed)
      .download-container
        a(href="https://drive.google.com/uc?export=download&id=1VlGXKSgk9XeGf1wlZjJ-Q7hBc6xYpHG3" download target="_blank") Download EXE File (Windows Only)
</template>

<script>
export default {
  name: 'Lunartics'
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
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  border-radius: 7px;
  border: 2px solid #253C59;
}
</style>