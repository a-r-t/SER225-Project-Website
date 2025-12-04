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

const teamName = ref('Bobcat Brawlers')
const repoUrl = ref('https://github.com/NolanKrieger/bobcatBrawlers')
const developerNames = ref<string[]>([
  'Aaron Wilhelm',
  'Andrew Goodman',
  'Joseph Lurie',
  'Lucas Deutsch',
  'Nolan Krieger'
])
const managerNames = ref<string[]>([
  'Brandon McCrave',
  'Joshua Molin'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Fighting')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/game.png', import.meta.url).href, description: 'Professor Alex vs Judy Olian' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1B-vWcd1LvHsjkHqSxkWMaNg1xfFtizy4', description: 'Download JAR File (must have Java 23 or greater installed)' }
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
        Choose your favorite Quinnipiac-related character and fight!!!
      </template>

      <template #instructions>
        <p>
          Your goal is to win by fighting your opponent in combat. 
          You can move, crouch, shoot, dash, jump, and more. 
          Also, if you hit a certain key at the right time you can either be super fast or have a super high jump. 
          You also play your friend in a 1 verse 1 game. 
        </p>

        <h4>Choosing a Character/Map:</h4>
        <ul>
          <li>Arrow keys left and right to switch between each option </li>
          <li>Space bar for selecting what you want</li>
        </ul> 
        
        <h4>Controls for player 1 and 2:</h4>
        <ul>
          <li>Move:WASD/IJKL</li>
          <li>Dash: F/H</li>
          <li>Punch:Q/O</li>
          <li>Kick:R/Y</li>
          <li>Power up:1,2/7,8</li>
          <li>Shoot: E/U</li>
          <li>Change projectile: X/N</li>
        </ul>
      </template>

      <template #notes>
        <p>Each character has different stats, which you can see on the character select screen.</p>
      </template>
    </Project>
  </div>
</template>
