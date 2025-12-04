<script setup lang="ts">
import Project from '../../../../components/Project.vue'
import { ref } from 'vue'

interface Screenshot {
  filePath: string
  description?: string
}

interface Video {
  filePath: string
  description: string
}

interface Download {
  url: string
  description: string
}

const teamName = ref('Kraken Killers')
const repoUrl = ref('https://github.com/edri0/Kraken_Killers')
const developerNames = ref<string[]>([
  'Gwen Bradshaw',
  'Jaiden Palazzo',
  'Nicky Desai'
])
const managerNames = ref<string[]>([
  'Oscar Lin',
  'Shawn Acheampong'
])
const heroScreenshotFilePath = ref(new URL('./assets/title.PNG', import.meta.url).href)
const genre = ref('Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/level1.PNG', import.meta.url).href, description: 'Traverse through pirate-themed levels!' },
  { filePath: new URL('./assets/shop.PNG', import.meta.url).href, description: 'Buy items from the shop!' },
  { filePath: new URL('./assets/kraken.PNG', import.meta.url).href, description: 'Can you defeat the kraken?' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1jyeeorpUGiaEDhpKH5WOku43pGMeErux', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>
          Conquer the levels in this Pirates of the Caribbean themed game! 
          Pick from campaign or arcade mode to customize your gameplay! 
          Finish each level by walking through the hitboxes, fight enemies to collect cash, equip armor for extra protection, and defeat the Kraken to win!
        </p>
      </template>

      <template #instructions>
        <p>
          The game opens on the Menu Screen where you can choose either Campaign Mode or Arcade Mode using the Up and Down arrows and confirm with the space bar. Arcade randomly generates a level each time you play, while Campaign mode lets you start at the first level and progress through. If you leave Campaign and return later, your progress will be saved from the level you left off at.
        </p>
        <p>
          After selecting the game mode, select your character—Captain Jack Sparrow or Will Turner—using the same arrow and space controls. Once selected, the game begins!
        </p>
        <p>
          At any point during the game, press S to open the shop where you can purchase and equip armor or weapons. Avoid enemies while moving through the maps, and when you reach the end of a level, go through the victory box to continue.
        </p>
        <p>
          Defeat the Kraken on the last level to win the game! Good luck!
        </p>

        <h4>Controls</h4>
        <ul>
          <li>Arrow keys to move left or right</li>
          <li>Use Up/Down arrows and Space to select player and game mode</li>
          <li>Up arrow to jump</li>
          <li>Down arrow to crouch</li>
          <li>C + Up arrow to climb</li>
          <li>A key to attack</li>
          <li>D to use the one-shot pistol</li>
          <li>S key to access the shop</li>
          <li>Space to interact with chests</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>When you win the game, the end screen is just a background with your character falling down the screen.</li>
          <li>You cannot have armor equipped and use the pistol at the same time.</li>
          <li>Please don't fall when fighting the kraken -- you will just fall endlessly...</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
