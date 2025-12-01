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

const teamName = ref('SinTax')
const repoUrl = ref('https://github.com/cmbrooks103/Sintax')
const developerNames = ref<string[]>([
  'Andrew Goodman',
  'Conner Brooks-Chapman',
  'Lehan Dharmatilake',
  'Thomas Mitropoulos'
])
const managerNames = ref<string[]>([
  'Camryn Keller',
  'SeSe Allerheiligen'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1ZI7rj691JX_TPiSN7JC6T90Ol1EqIfRw', description: 'Download JAR File (must have Java 21 or greater installed)' },
  { url: 'https://drive.google.com/uc?export=download&id=1P9FKPDNt4J7NInLere5-2adO0lsZirl6', description: 'Download JAR File with Player Invincibility Mod (for those that want to experience the game without dying)' }
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
        <p>Do you have what it takes to escape from Hell?</p>
      </template>

      <template #instructions>
        <p>
          This is a platformer game, so the goal is to get to the end of the map while avoiding obstacles and fighting enemies.
        </p>
        <p>
          Use the arrow keys to move around and space to interact with NPCs and objects or pick up items.
        </p>
        <p>
          After picking up a weapon, use X to fight back against your enemies.
        </p>
      </template>

      <template #notes>
        <p>
          There are various perks as well as weapons throughout the map that the player can pick up, as well as other collectibles that unlock new characters for the player.
        </p>
      </template>
    </Project>
  </div>
</template>
