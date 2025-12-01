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

const teamName = ref('Airplane')
const repoUrl = ref('https://github.com/Oscarlin0591/SER_RPG')
const developerNames = ref<string[]>([
  'Aislin Hayes',
  'Andrew McCleary',
  'Ayden Hafidi',
  'Jacob Levin',
  'Oscar Lin'
])
const managerNames = ref<string[]>([])
const heroScreenshotFilePath = ref(undefined)
const genre = ref('RPG, Open World')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay3.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay4.png', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1P2vWl4AgQbFmBAITfu6Tt32Dxn1nAh9C',
    description: 'Download JAR File (must have Java 21 or greater installed)'
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
        <p>Set sail in (Au)rg, an adventure where your choices shape your story!</p>
        <p>Explore islands, battle enemies, and complete quests to unlock the final boss island and one of the unique endings.</p>
        <p>Interact with NPCs, solve puzzles, or even try your luck at romance -- your journey is yours to choose!</p>
      </template>

      <template #instructions>
        <p>
          The goal of (Au)rg is to explore and complete the nonlinear story through numerous NPC, Enemy, and Boss interactions to ultimately unlock the final boss island and receive one of several endings based on their decisions. 
          These interactions can come in the form of fights, quests, dating minigames, and more.
        </p>
        <p>The player starts off on an island, but can leave the island to travel to the ocean hub-world which connects all other areas in the game.</p>
        <p>If you ever find yourself confused at what to do, try talking to the NPCs around you, especially the tutorial NPC on the first island.</p>
        <h4 style="margin-bottom: 0px">Controls:</h4>
        <ul>
          <li>WASD to move and traverse menus</li>
          <li>Shift to sprint</li>
          <li>Esc to pause</li>
          <li>E to interact and select</li>
          <li>Space to attack (while in combat)</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>There are numerous NPCs scattered around the game's map. You are encouraged to interact with them and follow their instructions as completing their mini-quests can give you certain boosts for your player.</li>
          <li>Often times NPC quest lines can be progressed by killing enemies, completing tasks, or talking to other NPCs. Make sure you check in with NPCs periodically to see if they have anything new to say.</li>
          <li>The game can be continued after exiting/dying by use of the continue button. However, an (Au)rg purist may be more inclined to click 'new game' each time.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
