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

const teamName = ref('Clankers')
const repoUrl = ref('https://github.com/JacobBatson/FightingKombat')
const developerNames = ref<string[]>([
  'Adam Parks',
  'Andrew Ozimek',
  'Cody Lippy',
  'Jacob Batson',
  'Khang Nguyen'
])
const managerNames = ref<string[]>([
  'Connor Nylund',
  'Tannon Bryant'
])
const heroScreenshotFilePath = ref(new URL('./assets/title.png', import.meta.url).href)
const genre = ref('Fighting')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/css.png', import.meta.url).href, description: 'Select your characters...' },
  { filePath: new URL('./assets/mss.png', import.meta.url).href, description: 'Select a map...' },
  { filePath: new URL('./assets/fight.png', import.meta.url).href, description: '...and fight!' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1kecMkp0z7aZCX-MCU0Qr5AaZrOC0SVWm', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>Choose a character and fight against your friends!</p>
      </template>

      <template #instructions>
        <p>
          2 Player fighting game 
        </p>
        <p> 
          2 two separate controls for each person 
        </p>
        <p>
          Controls can be read from controls menu in game
        </p>
        <p>
          Fill up your special meter by dealing damage, and then use special move once meter is filled up
        </p>
      </template>

      <template #notes>
        <p>
          First to lose 3 hearts loses the game and each player corresponding map gives them a 5+ boost on damage. 
        </p>
      </template>
    </Project>
  </div>
</template>
