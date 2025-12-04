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

const teamName = ref('5 Swords')
const repoUrl = ref('https://github.com/EarthToMaher/ser225_4swords_game')
const developerNames = ref<string[]>([
  'Alex Gold',
  'Christopher Falcone',
  'Evan Alves',
  'Kate Francis',
  'Matthew Maher'
])
const managerNames = ref<string[]>([
  'Tripp Menhall', 
  'Tyler Rinko'
])
const heroScreenshotFilePath = ref(new URL('./assets/TitleScreen.PNG', import.meta.url).href)
const genre = ref('Puzzle')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/Rang.PNG', import.meta.url).href, description: 'Solve puzzles!' },
  { filePath: new URL('./assets/Boss.PNG', import.meta.url).href, description: 'Final boss' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1ZrQ5vX_mbPdLcg0a_sMqDIc78t5FR0N6', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>Your goal in Circuit Switch is to traverse through the floors of the laboratory, defeat enemy robots, and solve the puzzle to reach the following level.</p>
      </template>

      <template #instructions>
        <ul>
          <li>The player is granted two separate robot players and can press C to switch between them. This is a crucial mechanic required to solve puzzles.</li>
          <li>The player is given a currency known as charges, which can be spent in two ways. Pressing E costs one charge and fires an electric bolt that damages enemies.</li>
          <li>Pressing R allows the player to dash quickly in a direction to move faster and avoid attacks, costing two charges.</li>
          <li>Charges regenerate every second and are shared between both robot players.</li>
          <li>Throughout the game, various power-ups are provided to assist in solving puzzles; these can be used by pressing Q.</li>
        </ul>

        <p>
          Puzzles generally revolve around retrieving keycards scattered across the map to unlock the doors blocking the exit. 
          These may be hidden, locked behind bars, blocked by walls, or protected by enemies. 
          The player must navigate the map, using both robots and the power-up provided in the level to solve the puzzle.
        </p>
      </template>

      <template #notes>
        <ul>
          <li>You control two robots tasked with reaching the server room of a rogue government facility to upload a security patch and restore control over the facility's robots.</li>
          <li>The robots can only hold one item at a time and do not share keycards.</li>
          <li>Items can be obtained from Item Shrines by pressing Space next to them.</li>
          <li>Item Shrines hold one item at a time and can store items for later use.</li>
          <li>Some levels have signs containing hints or item explanations. These can be read by pressing Space next to them.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
