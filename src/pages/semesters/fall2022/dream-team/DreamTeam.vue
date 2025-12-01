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

const teamName = ref('Dream Team')
const repoUrl = ref('https://github.com/Taylorlea43/DreamTeam-Platformer')
const developerNames = ref<string[]>([
  'Emilio Cruz',
  'Hannah Pfersch',
  'James Phillips',
  'Taylor Lea'
])
const managerNames = ref<string[]>(['Samantha Spinner (Sammi)'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/desert-level.png', import.meta.url).href, description: 'Desert Level' },
  { filePath: new URL('./assets/tree-level.png', import.meta.url).href, description: 'Tree Level' },
  { filePath: new URL('./assets/underwater-level.png', import.meta.url).href, description: 'Underwater Level' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1h-P83zhyLtC_2ilcdJZGz5s8oJ9KxN60',
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
        <p>Welcome to Zoomania!</p>
        <p>An evil zookeeper has kidnapped several zoo animals, and it is up to you to journey across the globe to save them.</p>
        <p>Watch out -- the zookeeper's plan will not be so easy to foil!</p>
      </template>

      <template #instructions>
        <p>Your goal is to use arrow keys to move left, right, and jump through the level to hit the caged animal at the end and free them!</p>
        <p>Hit space to select anything.</p>
        <p>P to pause, and Command Q to quit.</p>
        <p>You will be taken through a tutorial level prior to the start of the game that will explain the goals and storyline.</p>
      </template>

      <template #notes>
        <p>Collecting all of the coins in every level will give you a special reward at the end party screen (hit the disco ball)!</p>
      </template>
    </Project>
  </div>
</template>
