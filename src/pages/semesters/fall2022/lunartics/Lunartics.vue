<script setup lang="ts">
import Project from '../../../../components/Project.vue'
import { ref } from 'vue'

interface Screenshot {
  filePath: string
  description: string
}

interface Video {
  filePath: string
  description: string
}

interface Download {
  url: string
  description: string
}

const teamName = ref('Lunartics')
const repoUrl = ref('https://github.com/jacobhogrefe/hogrefeProject')
const developerNames = ref<string[]>([
  'Elizabeth Delea (Ellie)',
  'Jacob Hogrefe',
  'Lauren Sloane',
  'Matt Zingarella'
])
const managerNames = ref<string[]>(['Kevin Couillard'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.jpg', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/desert-biome.jpg', import.meta.url).href, description: 'Desert Biome' },
  { filePath: new URL('./assets/inventory.jpg', import.meta.url).href, description: 'Inventory Screen' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=17FQBEqEYobbL4JqNu31y_y5uKNYDaPQ9',
    description: 'Download JAR File (must have Java 8 or greater installed)'
  }
])
</script>

<template>
  <div class="root">
    <Project
      :teamName="teamName"
      :repoUrl="repoUrl"
      :developerNames="developerNames"
      :managerNames="managerNames"
      :heroScreenshotFilePath="heroScreenshotFilePath"
      :genre="genre"
      :screenshots="screenshots"
      :videos="videos"
      :downloads="downloads"
    >
      <template #about>
        <p>Welcome to Moon Valley!</p>
        <p>In this story-driven game, it is up to you to help the mysterious walrus remember who he is.</p>
        <p>Along the journey, you will explore many different biomes and come across some very zany characters -- hope you're prepared for the ride!</p>
      </template>

      <template #instructions>
        <ul>
          <li>Go to the controls menu option to learn how to play the game (hit space to select a menu option).</li>
          <li>There are a total of 5 areas to explore and access through the use of collectibles and quests.</li>
          <li>The main questbearer that sets a heavy plot in motion, is the blue walrus on the starting map. Listen to the walrus carefully.</li>
          <li>Through some quests, there is an ability to obtain and place furniture within a house (or even outside) by placing it and interacting with it.</li>
          <li>There is also an ability to put on and remove clothing from within the inventory.</li>
          <li>You can enter a house by approaching the door and pressing space (except in the mountains biome, press space on the lower ladder).</li>
        </ul>
      </template>

      <template #notes>
        <p>Finishing the main quests yields a really cool effect with the starting map walrus.</p>
        <p>To put on clothes, go to the inventory and hit the "Equip Clothes" button on a wearable item. They can be removed by going back to the inventory and hitting the "Remove Clothes" button.</p>
        <p>To place furniture, go to the inventory and hit the "Place" button. Hit space while in front of the furniture to move it to a desired location, and hit space again to drop it to that location.</p>
      </template>
    </Project>
  </div>
</template>
