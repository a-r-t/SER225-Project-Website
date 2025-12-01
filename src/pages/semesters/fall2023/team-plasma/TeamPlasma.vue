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

const teamName = ref('Team Plasma')
const repoUrl = ref('https://github.com/AnzilottiChristopher/SER225_Plasma')
const developerNames = ref<string[]>([
  'Caleb Muriuki-Mureithi',
  'Christopher Anzilotti',
  'Lucas Jenkins',
  'Omar Fofana',
  'SeSe Allerheiligen'
])
const managerNames = ref<string[]>(['Humna Hanif'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/intro.png', import.meta.url).href, description: 'Boomer needs to save the school!' },
  { filePath: new URL('./assets/map.png', import.meta.url).href, description: 'Explore the map!' },
  { filePath: new URL('./assets/combat.png', import.meta.url).href, description: 'Defeat the brainwashed professors!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=12j9He0HTOGWVZ_dDTVd2D4ZIrZDp9AkY',
    description: 'Download JAR File (must have Java 17 or greater installed)'
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
        <p>HELP! Several Quinnipiac professors have suddenly started acting strange and are causing chaos across campus.</p>
        <p>Play as Boomer as you explore campus, defeat enemies in combat, and get to the bottom of this mystery in order to save Quinnipiac!</p>
      </template>

      <template #instructions>
        <p>Use the arrow keys to navigate the menu, press space to select.</p>
        <p>Walk around the overworld with arrow keys, hold shift to sprint, and press space to interact with NPCs.</p>
        <p>In combat, use the arrow keys to select what move you want to use. Press space to lock in your attack and see what happens!</p>
      </template>

      <template #notes>
        <ul>
          <li>The game follows a sequential storyline. If you ever get stuck, talk to find and interact with Ness</li>
          <li>If you aren't sure where to go, explore around to proc Ness's dialogue trigger</li>
          <li>This game is a parody and purely satire. Depictions of real people aren't meant for defamation or belitting, and are only jestures.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
