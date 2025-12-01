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

const teamName = ref('Gamesrock')
const repoUrl = ref('https://github.com/lolbequiet/SERgang')
const developerNames = ref<string[]>([
  'Fahim Kalange',
  'Jacorian Adom (JJ)',
  'Michael Alvarado (Mike)',
  'Sebastian Salazar (Seb)',
])
const managerNames = ref<string[]>(['Mia Troiano'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay3.png', import.meta.url).href },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1YPdZKvSqpu5-pu_6DJwLs4s3cpyfKQwy', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
          Dreamscape is a game where players explore diverse lands, interact with mobs, and collect loot, all leading to a climactic final boss battle that reveals the protagonist's backstory. 
          The game features an interactive map with proximity-triggered enemies and treasures scattered across the environment. 
          Designed for RPG enthusiasts who enjoy story-driven gameplay, Dreamscape stands out with its intriguing character sprites, compelling narrative, and simple yet engaging art style.
        </p>
      </template>

      <template #instructions>
        <ul>
          <li>Movement: Use the W, A, S, D keys to move your character.</li>
          <li>Sprinting: Hold Shift to sprint.</li>
          <li>Combat: Press R for Ice spells, F for Fire spells, and Space Bar to fight enemies.</li>
          <li>Interaction: Use Space Bar to interact with NPCs and E to pick up objects.</li>
          <li>Portals: Press Enter to use portals.</li>
          <li>Inventory: Access your inventory by pressing I.</li>
          <li>Quest Screen: Press Q to view your active quests.</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>
            Main Menu Navigation: Use the W and S arrow keys to navigate the main menu. 
            Press Space Bar to confirm your selection, whether it's starting the game or viewing credits.
          </li>
        </ul>
      </template>
    </Project>
  </div>
</template>
