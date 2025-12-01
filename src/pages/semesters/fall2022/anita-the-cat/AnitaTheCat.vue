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

const teamName = ref('Anita the Cat')
const repoUrl = ref('https://github.com/jjnoga/Witchy-Cat-Game')
const developerNames = ref<string[]>([
  'Camryn Keller',
  'Joseph Noga (Joe)',
  'Madigan Smith (Madi)',
  'Michael Ruocco',
  'Nicholas Centeno (Nic)'
])
const managerNames = ref<string[]>(['Sadjell Mamon'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG, Puzzle')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/autumn.png', import.meta.url).href, description: 'Autumn' },
  { filePath: new URL('./assets/winter.png', import.meta.url).href, description: 'Winter' },
  { filePath: new URL('./assets/summer.png', import.meta.url).href, description: 'Summer' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1FJOzq6t0l1sboO72krEiK2XMVmVcNTf1',
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
        <p>Welcome to Witchy Cat!</p>
        <p>Join Anita the Cat in her quest to create a mysterious magic potion!</p>
        <p>
          You will explore various different areas representing the four seasons in
          order to find the ingredients needed.
        </p>
        <p>
          What does this potion do exactly? Well...you're just going to have to find out.
        </p>
      </template>

      <template #instructions>
        <p>
          Your goal is to travel through every seasonal-based area and collect three key items in order to create a potion:
        </p>
        <ul>
          <li>Golden Leaf from the Autumn Zone</li>
          <li>Perfect Sphere of Ice from the Winter Zone</li>
          <li>Fire Rose from the Summer Zone</li>
        </ul>
        <p>Controls:</p>
        <ul>
          <li>Use the directional keys to move the player character, Anita the Cat.</li>
          <li>Hold SHIFT while moving to sprint.</li>
          <li>Press SPACE while facing an NPC character to speak to or and to use an item on its intended target.</li>
          <ul>
            <li>Also, will pick up items and progress through dialogue boxes.</li>
          </ul>
          <li>Press I to either reveal or hide the inventory.</li>
          <li>Press E while the inventory is active to drop Anita's current held item.</li>
          <li>Press O to reveal the instructions for the sound system</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>The Hall of Shame easter egg is hidden behind Pizza's house in the Summer Zone.</li>
          <li>
            Collect 15 coins and bring them to the moyai head in the Haunted House to unlock a secret.
            <ul>
              <li>There are 4 coins in the Spring Zone, 5 in the Autumn Zone (including the Haunted House), 5 in the Winter Zone, and 3 in the Summer Zone.</li>
            </ul>
          </li>
          <li>The boat spawned by the potion appears at the bottom of the Spring Zone map.</li>
          <li>There is a noticeable lag spike when picking up the Fish in the Spring Zone, should you end up dropping it from your inventory.</li>
          <li>DO NOT DROP THE STAFF WHILE IN THE MAZE. YOU MAY GET SOFTLOCKED.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
