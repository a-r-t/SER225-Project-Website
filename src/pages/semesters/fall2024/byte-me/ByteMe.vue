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

const teamName = ref('Byte Me')
const repoUrl = ref('https://github.com/ConnorNylund/RPG-game-SER225')
const developerNames = ref<string[]>([
  'Billy Godoy',
  'Brady Galligan',
  'Connor Nylund',
  'Maximus Riat (Max)',
  'Tannon Bryant'
])
const managerNames = ref<string[]>([
  'Harsh Gandhi',
  'Julia Bock'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.jpg', import.meta.url).href)
const genre = ref('Survival, Shooter')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay.png', import.meta.url).href, description: 'Gameplay' },
  { filePath: new URL('./assets/shop.jpg', import.meta.url).href, description: 'Shop' },
  { filePath: new URL('./assets/boss-arena.png', import.meta.url).href, description: 'Boss Arena' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video-part1.mp4', import.meta.url).href, description: 'Full Game Playthrough - Part 1' },
  { filePath: new URL('./assets/game-video-part2.mp4', import.meta.url).href, description: 'Full Game Playthrough - Part 2' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1grSd1FwAgJhL-XiSfqBTGkHm4iLtA8eS',
    description: 'Download JAR File (must have Java 21 or greater installed)'
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
        <p>Welcome to Sector Survival, where survival and violence is the name of the game!</p>
      </template>

      <template #instructions>
        <p style="font-weight: 600;">Navigating the Menu: <span style="font-weight: 400;">Use the <span style="font-weight: 600;">up and down arrow keys</span> to scroll through menu options. When you're ready, press <span style="font-weight: 600;">space</span> to select.</span></p>
        <p style="font-weight: 600;">Movement: <span style="font-weight: 400;">Control your character using <span style="font-weight: 600;">WASD</span> -- W to move up, A to move left, S to move down, and D to move right.</span></p>
        <p style="font-weight: 600;">Interacting: <span style="font-weight: 400;">Press <span style="font-weight: 600;">space</span> to engage in conversations with NPCs, enter or exit shops, and pick up items off the ground.</span></p>
        <p style="font-weight: 600;">Combat: <span style="font-weight: 400;">To attack enemies, simply <span style="font-weight: 600;">click on them</span> to deliver damage and gain the upper hand in battle.</span></p>
        <p style="font-weight: 600;">Starting or Pausing the Game: <span style="font-weight: 400;">Press the <span style="font-weight: 600;">P key</span> at any time to <span style="font-weight: 600;">pause</span> or <span style="font-weight: 600;">resume</span> the game.</span></p>
        <p>Lastly, be sure to keep your mouse pointer within the game screen, as moving it outside may occasionally cause the game to crash.</p>
      </template>

      <template #notes>
        <ul>
          <li>Start by talking to the NPCs below the starting area to open the forest zone</li>
          <li>Press space on coins dropped from enemies to pick them up</li>
          <li>Press space on the door to the building in the center to enter the shop</li>
          <li>Use your coins to buy items in the shop by approaching them and pressing space</li>
          <li>A boss will open up every 5 waves and the boss must be killed in order to progress</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
