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

const teamName = ref('Scrumblies')
const repoUrl = ref('https://github.com/zacharymarlowe101/Lil_Robo_Vs_The_Shrooms')
const developerNames = ref<string[]>([
  'Aiden Agas',
  'Reed Scampoli',
  'Zachary Marlowe',
  'Zachary Nedell'
])
const managerNames = ref<string[]>([
  'Hunter Yocum',
  'Paul Zegarek'
])
const heroScreenshotFilePath = ref(new URL('./assets/title.png', import.meta.url).href)
const genre = ref('Roguelike')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/screenshot2.png', import.meta.url).href },
  { filePath: new URL('./assets/screenshot1.png', import.meta.url).href, description: 'Can you beat the final boss?' },
])
const videos = ref<Video[]>([])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1X85fqK1K9VM9KtBiGweLclyZ57_ceAxM', description: 'Download JAR File (must have Java 21 or greater installed)' }
])

const trailer = new URL('./assets/trailer.mp4', import.meta.url).href
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
          Lil Robo Vs The Shrooms is a crazy, fast-paced, and tense game where machine might meets mycelium mayhem. 
          You control Lil Robo as they navigate the swampy wastes and try to discover what happened. 
          You'll battle a wide variety of enemies, culminating in a final boss.
          After every level you beat, you'll get to choose between upgrading your speed, damage, or getting some extra health. You may die. You may fail. 
          But never stop trying to free Lil Robo from the Maleficent Mushrooms!
        </p>

        <p style="margin-bottom: 10px;font-style: italic">Watch our trailer!</p>
        <video style="width: 100%" :src="trailer" controls preload="metadata"></video>
      </template>

      <template #instructions>
        <h4>Controls</h4>

        <ul>
          <li>
            Menu Controls:
            <ul>
              <li>Use W and S to navigate the menu, and press Space to select an option.</li>
            </ul>
          </li>

          <li>
            Movement & Combat:
            <ul>
              <li>Move using W-A-S-D.</li>
              <li>Press LMB to fire your primary weapon.</li>
              <li>Press Space to auto-fire toward your cursor.</li>
              <li>Use R to reflect, giving a brief shield that reflects all attacks back at enemies.</li>
            </ul>
          </li>
        </ul>

        <ul>
          <li>
            Room Progression:
            <ul>
              <li>You must defeat all enemies in the room to unlock the exit.</li>
              <li>Once cleared, find the teleport tile to move to the next area.</li>
            </ul>
          </li>

          <li>
            Upgrades:
            <ul>
              <li>Press 1, 2, or 3 to select an upgrade when prompted.</li>
              <li>Upgrades can increase speed, damage, and health.</li>
              <li>Upgrades stack, letting you create unique builds each run.</li>
            </ul>
          </li>

          <li>
            Objective:
            <ul>
              <li>Survive bullet-hell combat, clear each room, and reach the final boss.</li>
              <li>Every run is different, so adapt your strategy as you progress.</li>
            </ul>
          </li>
        </ul>

      </template>

      <template #notes>
        <ul>
          <li>When you kill an enemy, you gain a reflect charge that increases your reflect bar.</li>
          <li>Using the reflect ability depletes the bar. Fully depleting it disables reflect until more enemies are killed.</li>
          <li>The teleport tile appears only after all mushrooms are defeated.</li>
          <li>You may need to explore the map to find remaining enemies or the teleport tile.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
