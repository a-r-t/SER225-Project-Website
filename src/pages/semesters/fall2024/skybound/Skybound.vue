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

const teamName = ref('Skybound')
const repoUrl = ref('https://github.com/Dvitash/Skybound')
const developerNames = ref<string[]>([
  'Daniel Vitashkevich',
  'Ethan Kulawiak',
  'Joshua Molin',
  'Zakaria Merzougui (Zak)'
])
const managerNames = ref<string[]>([
  'Aamnah Malik',
  'Tess Bossdorf'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay.png', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Example Gameplay' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=18n7nbAFI5IRuCPQFSmWlWFpchZcpGVtC', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
          This is an infinite vertical scrolling platformer inspired by the mobile game Doodle Jump.
          Enjoy this fresh and expansive take on a classic that we all know and love.
        </p>
        <p>Can you set the highest score?</p>
      </template>

      <template #instructions>
        <ul>
          <li>Movement is WASD or arrow keys.</li>
          <li>Hold the up arrow or W for a constant jump boost.</li>
          <li>Use the space bar for a dash; the dash cooldown is displayed in the top middle of the screen.</li>
          <li>Click on the screen to shoot in that direction.</li>
          <li>Press the down arrow or S to crouch.</li>
          <li>Each powerup lasts at least 5 seconds with minor variation.</li>
          <li>You are able to go through each side of the screen to come out on the opposite side.</li>
          <li>Collected coins get added to your score at the end: 1 coin equals 2 points.</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>Use space and arrows to select skin colors.</li>
          <li>Enemies can shoot and break the breakable tiles.</li>
          <li>Enemies can't hit you through the bottom of the metal tiles.</li>
          <li>The player can't stand on the cloud tiles.</li>
          <li>The player can't pass through the metal tiles.</li>
          <li>Killing enemies drops coins.</li>
          <li>The player has a max of 5 hearts.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
