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

const teamName = ref('Team Squirrel')
const repoUrl = ref('https://github.com/AndrewLabbe/Squirrel_RPG')
const developerNames = ref<string[]>([
  'Alexander Goriup (Alec)',
  'Andrew Kulowski',
  'Andrew Labbe',
  'Garrett Goldberg',
  'Micaela Grajales (Mica)',
  'Phil Caldarella'
])
const managerNames = ref<string[]>(['Amber Kusma'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/mainmap.png', import.meta.url).href, description: 'What\'s in the chest?' },
  { filePath: new URL('./assets/ghost.png', import.meta.url).href, description: 'Look out!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1_O5uhHiIAz0UFMC1KzpaONV4BKvJgxhR',
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
        <p>After witnessing the death of his girlfriend at the hands of a mysterious stranger, Squirrel is determined to get revenge.</p>
        <p>Beware -- you never know what lies in store on the path of vengeance.</p>
      </template>

      <template #instructions>
        <h4>Controls</h4>
        <ul>
          <li><strong>Space bar</strong> - interact with NPC's, open doors or chests</li>
          <li><strong>F key</strong> - shoot acorn</li>
          <li><strong>Shift key</strong> - sprint</li>
          <li><strong>Arrow keys</strong> - movement of player</li>
          <li><strong>I key</strong> - Open and close inventory</li>
        </ul>
      </template>

      <template #notes>
        <h4>Objectives</h4>
        <h5>Main Level</h5>
        <ul>
          <li>Run around the map to the four chests to collect the keys to unlock the temple in the top part of the map.</li>
          <li>Ghosts will damage you upon contact so watch out!</li>
          <li>You can launch projectiles at enemies to eliminate them, and they may drop a random powerup on defeat.</li>
          <li>Eliminating ghosts along the way gains coins and which can use the shop (house looking building) to buy health.</li>
          <li>Once you collect all four keys, you can open the temple door at the top of the map.</li>
        </ul>
        <h5>Temple Level 1</h5>
        <p>Talk to the table in the top center of the map for a clue on how to complete the puzzle.</p>
        <h5>Temple Level 2</h5>
        <p>Swim from platform to platform and eliminate enemies along the way until you reach the other side.</p>
        <h5>Temple Level 3</h5>
        <p>Find the key from the chest to unlock the exit. Do not walk on the lava tiles or in front of spring traps -- they will damage you!</p>
        <h5>Temple Level 4 (Boss Fight)</h5>
        <p>Duke it out with the evil warlock and take your revenge for him absolutely murking your girlfriend</p>
      </template>
    </Project>
  </div>
</template>
