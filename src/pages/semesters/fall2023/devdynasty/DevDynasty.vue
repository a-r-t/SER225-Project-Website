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

const teamName = ref('devDynasty')
const repoUrl = ref('https://github.com/WanderingCat27/devdynasty-game')
const developerNames = ref<string[]>([
  'Alex Power',
  'Christian Kilduff (Chris)',
  'Ryan Fennelly',
  'Timothy McGinley',
  'Zoe McLaughlin'
])
const managerNames = ref<string[]>(['Chris Rocco'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG, Adventure')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/lab.png', import.meta.url).href, description: 'You never know what will happen when you use that time machine!' },
  { filePath: new URL('./assets/wildwest.png', import.meta.url).href, description: 'Wild West Time Period' },
  { filePath: new URL('./assets/future.png', import.meta.url).href, description: 'FUTURE' },
  { filePath: new URL('./assets/combat.png', import.meta.url).href, description: 'Watch out -- some people don\'t take too kindly to time travelers!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1xdAlqxMwMWjydnLnMzDN7f_XhnbWcplA',
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
        <p>Prepare to go on a time travel adventure like no other!</p>
        <p>In <i>Time Dynasties</i>, you will explore several different time periods to collect parts, solve puzzles, and fight bosses.</p>
        <p>It is up to you to fix the time machine in order to return home!</p>
      </template>

      <template #instructions>
        <p>Your goal for this game is to explore various time periods to get items you need to repair your time machine and return home. In each level, you must defeat the final boss and they will drop the item and your time machine will reappear. Return to your home base and bring the item to the item table to unlock the next level. After you return the final item to the table, interact with the table again to win the game. Each level has a unique combat minigame. You will be provided with instructions for each minigame before you play it for the first time.</p>

        <h4>Controls:</h4>
        <ul>
          <li>W-A-S-D to move</li>
          <li>Mouse / left click to activate buttons</li>
          <li>Shift to sprint</li>
          <li>Esc to pause (adjust volume from the pause menu)</li>
          <li>Enter to interact with objects/NPCs</li>
          <li>` to select no item</li>
          <li>1-2-3-4 to choose item slot</li>
          <li>R to drop item with slot selected (if dropped item on the table, just interact with the table, you do not need to worry about which slot you have chosen)</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>In order to change costumes and to enter the saloon, you need to go far to the bottom left of the map and there will be a building. If you go to the right side of it, you will see an “!” appear and you can enter the building, talk to the npc, and change into the necessary costume. Only then are you going to be allowed to enter the saloon.</li>
          <li>After defeating a boss, the time machine will spawn back at the map you are currently in to take you back to the science lab. The spawns are as follows:
            <ul>
              <li>Wild West: Top left corner of the map after you leave the saloon</li>
              <li>Prehistoric: Once you leave the cave, it will be upwards to the right of the cave</li>
              <li>Future: Once you leave the building all together, it will be to your right</li>
            </ul>
          </li>
          <li>In the Prehistoric map, pick up the flashlight before entering the cave. You then push all the colored blocks into their correct spot. For example, push the red block towards the other one, and line it up in the correct spot (you will see a tile where it should go). Then, the lock will be opened and you can fight the boss. This is a bit glitchy, but doable. Hold Enter when interacting with a colored block to "pick it up". Reset the puzzle by leaving and re-entering the cave.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
