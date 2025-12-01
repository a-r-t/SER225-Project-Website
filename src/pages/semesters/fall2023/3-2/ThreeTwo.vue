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

const teamName = ref('3-2')
const repoUrl = ref('https://github.com/angelami4/CSC225')
const developerNames = ref<string[]>([
  'Aidan Armellino',
  'Angela Bruno',
  'Cole Davignon',
  'Javier Flores (Javi)'
])
const managerNames = ref<string[]>(['Rion-Mark McLaren'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/map.png', import.meta.url).href, description: 'Go Bobcats!' },
  { filePath: new URL('./assets/battle.png', import.meta.url).href, description: 'Defeat the other teams to earn your trophy!' },
  { filePath: new URL('./assets/inventory.png', import.meta.url).href, description: 'Utilize items and other goodies to help aid you in combat!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1SIatV6MjUxyKA_dFuYra1sqSfDTDmJbA',
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
        <p>Based off of the Quinnipiac Hockey Team's incredible championship run in 2023, 
          <i>The Road To Victory</i> 
          <span>will allow you to battle each of their opponents during the Frozen Four.</span>
        </p>
        <p>Do you have what it takes to bring home the trophy?</p>
      </template>

      <template #instructions>
        <h4>Game Controls:</h4>
        <ul>
          <li>WASD For Movement</li>
          <li>ESC for Inventory</li>
          <li>ENTER for Inventory Interaction</li>
          <li>SHIFT to Sprint</li>
        </ul>

        <h4>Battle Controls</h4>
        <ul>
          <li>UP and DOWN arrow keys for selecting Attack Choice</li>
          <li>ENTER for Attack Selection</li>
        </ul>

        <h4>Battle Rules</h4>
        <ul>
          <li>In this game, there are 3 attacks; HEAVY, LIGHT, & DEFEND</li>
          <li>In a battle, the attack bounds are as follows:
            <ul>
              <li>HEAVY beats DEFEND</li>
              <li>DEFEND beats LIGHT</li>
              <li>LIGHT beats HEAVY</li>
            </ul>
          </li>
        </ul>
      </template>

      <template #notes>
        <p>You need to fight the bosses in order of how the tournament actually went. 
          The 4 teams (in order) were:
        </p>
        <ol>
          <li>Merrimack Knights</li>
          <li>Ohio State Buckeyes</li>
          <li>Michigan Wolverines</li>
          <li>Minnesota Golden Gophers</li>
        </ol>
        <p>You cannot move on to the next fight until you beat the boss before it.</p>
        <p>Once you beat the 2 bosses on the main map, you need to go to the arrow up above in the ice rink, interact with it with SPACE, and then you will be transported to the championship map.</p>
        <p>Each boss has a specific pattern of attack that you will need to memorize in order to beat them. Each pattern and boss gets harder each time.</p>
      </template>
    </Project>
  </div>
</template>
