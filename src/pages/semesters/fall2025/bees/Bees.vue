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

const teamName = ref('Bees')
const repoUrl = ref('https://github.com/PixelMelt/SER225')
const developerNames = ref<string[]>([
  'Alexander Pina',
  'Julian Colon',
  'TJ Therrien',
  'Tyler Smalley'
])
const managerNames = ref<string[]>([
  'Ethan Kulawiak',
  'Jean LaFrance' 
])
const heroScreenshotFilePath = ref(new URL('./assets/title.png', import.meta.url).href)
const genre = ref('Platformer, Speedrunning')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/menu.png', import.meta.url).href, description: 'Main Menu' },
  { filePath: new URL('./assets/screenshot2.png', import.meta.url).href, description: 'Grapple onto pieces of bread!' },
  { filePath: new URL('./assets/screenshot3.png', import.meta.url).href, description: 'Try not to die!' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1MaisxP5zcU3Kxx0npgAtHaQ3B8qDa_p5', description: 'Download JAR File (must have Java 23 or greater installed)' }
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
        <p>SpeedStep is a 2D platformer game focused on speedrunning that features grapple mechanics and multiple obstacles such as buzzsaws and spikes to dodge.</p>
      </template>

      <template #instructions>
        <p>
          Your goal is to make it across the map as quickly as possible without running into any obstacles or other challenges ahead. 
          You are given the option to use the goose's neck to grapple onto the bread nodes. 
          Use them wisely and in a timely manner.
        </p>

        <h4>Basic Controls: Keyboard Controls</h4>

        <ul>
          <li>
            Ground Movement:
            <ul>
              <li>WASD and arrow keys</li>
              <li>Left/A and Right/D to move across the map</li>
              <li>Up/W to jump and Down/S to crouch</li>
              <li>Hold Up/W to jump higher</li>
              <li>Tap Up/W to do a small jump</li>
            </ul>
          </li>

          <li>
            Grappling Movement:
            <ul>
              <li>Click X/N to grapple to the nearest node</li>
              <li>Left/A and Right/D to swing on the node</li>
              <li>Up/W to jump off the grapple effect</li>
              <li>Down/S to drop off the grapple effect</li>
            </ul>
          </li>

          <li>
            Miscellaneous:
            <ul>
              <li>Escape to go back to the main menu</li>
              <li>P to pause the game</li>
              <li>Press Space to interact with NPCs and respawn when dead</li>
              <li>Z/M to honk</li>
            </ul>
          </li>
        </ul>
      </template>

      <template #notes>
        <p>Good luck on Level 8</p>
      </template>
    </Project>
  </div>
</template>
