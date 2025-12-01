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

const teamName = ref('Three Remaining Musketeers')
const repoUrl = ref('https://github.com/kinshu0/SER225-RPG-Project')
const developerNames = ref<string[]>([
  'Eric Carlson',
  'John Hangen (Jack)',
  'Kinshu Gupta'
])
const managerNames = ref<string[]>(['Aidan Schmid'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Survival, Tower Defense, Horror')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay.png', import.meta.url).href, description: 'Here they come!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=10AMNTYc-JrmPwHoPkAVb5kCjF7oxjhTp',
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
        <p>You are under attack by zombies and ghosts!</p>
        <p>Can you survive ten nights while protecting both yourself and your castle?</p>
        <p>Hope your combat skills are up to snuff!</p>
      </template>

      <template #instructions>
        <ul>
          <li>Move: Arrow keys</li>
          <li>Pause: P
            <ul>
              <li>Makes player and base invincible while game is paused</li>
              <li>Press space while option is highlighted to select it</li>
            </ul>
          </li>
          <li>Press G to equip weapons</li>
          <li>Attack: Enemies are automatically attacked when you are near them and in the range of your weapon</li>
          <li>Equip weapons
            <ul>
              <li>H: axe
                <ul>
                  <li>Great attack damage with decent range</li>
                </ul>
              </li>
              <li>J: spear
                <ul>
                  <li>Has the best attack range but has the weakest damage</li>
                </ul>
              </li>
              <li>K: machete
                <ul>
                  <li>Highest attack damage but has the lowest range</li>
                </ul>
              </li>
              <li>L: katana
                <ul>
                  <li>Second highest damage with good range</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Inventory
            <ul>
              <li>Press I to open inventory</li>
              <li>To upgrade weapons, use the arrow keys again to highlight the upgrade material (steel) then press enter and your selected weapon and it will have a bonus increase to damage</li>
            </ul>
          </li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>Axe has great attack damage with decent range</li>
          <li>Spear has the best attack range but has the weakest damage</li>
          <li>Machete has the highest attack damage but has the smallest range</li>
          <li>Katana has the second highest damage with good range</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
