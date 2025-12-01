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

const teamName = ref('ERROR101')
const repoUrl = ref('https://github.com/iiYOUNGSHOGUN/SER-225-Platformer')
const developerNames = ref<string[]>([
  'Charlize Aponte',
  'Gregory Jean-Baptiste',
  'Jason Jackson',
  'Jon Cela',
  'Shannon Gill'
])
const managerNames = ref<string[]>(['Julia Woeste'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer, Action, Adventure')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/Level1.png', import.meta.url).href, description: 'Level 1' },
  { filePath: new URL('./assets/Level2.png', import.meta.url).href, description: 'Level 2' },
  { filePath: new URL('./assets/Level3.png', import.meta.url).href, description: 'Level 3' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1HQi04MpHxreooIub7io7H2LWf5GyatMD',
    description: 'Download JAR File (must have Java 17 or greater installed)'
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1JlbxVwa_s6En0Jc9iLYYV2ZSCUp3jFbc',
    description: 'Download JAR File with Player Invincibility Mod (this is for those that want to experience the entire game without having to worry about dying)'
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
        <p>Max needs you to help them find their way back home!</p>
        <p>In <i>Escape: Back to Reality</i>, you must run, jump, and fight your way through each level.</p>
        <p>Watch out! This will be a very perilous journey...</p>
      </template>

      <template #instructions>
        <h4>Goal</h4>
        <p>Your goal is to help the main character Max escape from the bunker by attacking/avoiding enemies until you reach the end of the level by hitting the exit sign box. You can also collect coins to use in the coin shop to buy powerups. You can access the coin shop in between each level.</p>

        <h4>Levels:</h4>
        <ul>
          <li>The Bunker</li>
          <li>Fake Outside</li>
          <li>Space</li>
        </ul>

        <h4>Controls</h4>
        <h5>In Game Menu:</h5>
        <ul>
          <li>Use the W key to move up options in game menu</li>
          <li>Use S key to move down the options in game menu</li>
          <li>Use space bar to interact with the game menu and cutscenes</li>
        </ul>

        <h5>When you are playing the game:</h5>
        <ul>
          <li>The D key is to walk right</li>
          <li>The A key is to walk left</li>
          <li>The W key is to jump</li>
          <li>The S key is to crouch</li>
          <li>To attack the enemies, use the K key</li>
          <li>To jump attack, press both W and K keys</li>
          <li>To pause the game, use the P key</li>
        </ul>

        <h5>When you are in the shop:</h5>
        <ul>
          <li>Use the D key to move left in the selections</li>
          <li>Use the A key to move right in the selections</li>
          <li>Use Space bar to select your items</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>Walking into the prison guard and dog without attacking will kill you regardless if you have 3 lives or not.</li>
          <li>Upon beating the level by touching the exit sign at the end, the shop screen will appear to buy power ups.</li>
          <li>You are able to buy all powers at once and can only buy each power up once and are also able to rebuy the power ups in the second level shop. Example: if you buy the speed power in level 2, your speed will increase. If you buy it again in level 3, your speed will increase even more.</li>
          <li>You are able to jump on the platform in level 2, first level, with all the coins.</li>
          <li>There are two ways to complete level 3.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
