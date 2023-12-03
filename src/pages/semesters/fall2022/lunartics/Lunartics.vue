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
      p Welcome to Moon Valley!
      p In this story-driven game, it is up to you to help the mysterious walrus remember who he is.
      p Along the journey, you will explore many different biomes and come across some very zany characters -- hope you're prepared for the ride!
    template(v-slot:instructions)
      ul
        li Go to the controls menu option to learn how to play the game (hit space to select a menu option).
        li There are a total of 5 areas to explore and access through the use of collectibles and quests. 
        li The main questbearer that sets a heavy plot in motion, is the blue walrus on the starting map. Listen to the walrus carefully.
        li Through some quests, there is an ability to obtain and place furniture within a house (or even outside) by placing it and interacting with it.
        li There is also an ability to put on and remove clothing from within the inventory.
        li You can enter a house by approaching the door and pressing space (except in the mountains biome, press space on the lower ladder).
    template(v-slot:notes)
      p Finishing the main quests yields a really cool effect with the starting map walrus.
      p To put on clothes, go to the inventory and hit the "Equip Clothes" button on a wearable item. 
        | They can be removed by going back to the inventory and hitting the "Remove Clothes" button.
      p To place furniture, go to the inventory and hit the "Place" button.
        | Hit space while in front of the furniture to move it to a desired location, and hit space again to drop it to that location.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'Lunartics',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Lunartics',
      repoUrl: 'https://github.com/jacobhogrefe/hogrefeProject',
      developerNames: [
        'Elizabeth Delea (Ellie)',
        'Jacob Hogrefe',
        'Lauren Sloane',
        'Matt Zingarella'
      ],
      managerNames: [
        'Kevin Couillard'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.jpg'),
      genre: 'RPG',
      screenshots: [
        {
          filePath: require('./assets/desert-biome.jpg'),
          description: 'Desert Biome'
        },
        {
          filePath: require('./assets/inventory.jpg'),
          description: 'Inventory Screen'
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
          url: 'https://drive.google.com/uc?export=download&id=17FQBEqEYobbL4JqNu31y_y5uKNYDaPQ9',
          description: 'Download JAR File (must have Java 8 or greater installed)'
        }
      ]
    }
  }
}
</script>