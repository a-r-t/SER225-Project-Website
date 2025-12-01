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

const teamName = ref('RPG')
const repoUrl = ref('https://github.com/GalacticSeal/Rocket_Rhodey')
const developerNames = ref<string[]>([
  'Isaias Barreto',
  'Jason Handrahan',
  'Jeremy Wiening',
  'Jesse Chaput',
  'Paul Zegarek'
])
const managerNames = ref<string[]>([
  'Dylan Bellinger',
  'Steven Griffin'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.jpg', import.meta.url).href)
const genre = ref('Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay3.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay4.jpg', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=15g7-Kc8FFRLOIRZWB7Zia5fU66qPjR7z', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>Welcome to Rocket Rhodey, a game destined to be Twitch's next rage-game trend!</p>
        <p>Good luck on your climb to the top of the mountain...and try not to fall too much.</p>
      </template>

      <template #instructions>
        <p>
          The player is a Rhode Island resident who enjoys skiing at his favorite mountain, however a rogue soldier with a rocket launcher blows up the ski lift, leaving the player stranded at the bottom of the mountain with no way up.
        </p>
        <p>
          The player decides to take the rocket launcher from the soldier and use it to propel himself up the mountain in order to be able to ski down. 
          You, as the player, need to use your movement to your advantage to aim and shoot the launcher, as well as dodge various obstacles to get up the mountain and complete the mission of skiing down the mountain.
        </p>
      </template>

      <template #notes>
        <p>There are two sets of key binds:</p>
        <ul>
          <li>W, A, S, D</li>
          <li>↑, ←, ↓, → keys</li>
        </ul>
        <p>Space to Jump</p>
        <p>There are various blue pylons that lay across the map, these are checkpoints for the player to use:</p>
        <ul>
          <li>Activated with the 'C' key</li>
          <li>You can traverse the mountain without using any checkpoints or use each pylon to spawn back at that exact spot if needed.</li>
        </ul>
        <p>
          Tip: If timed right, a player can jump and shoot the ground at the same time and give themselves a “super jump”. 
          This jump gives the player almost 2x the knockback a normal rocket jump would give them
        </p>
        <p>Current time to beat:</p>
        <ul>
          <li>Regular: 1:39</li>
          <li>No checkpoints and no jumps: 2:30</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
