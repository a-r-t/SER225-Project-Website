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

const teamName = ref('Rift')
const repoUrl = ref('https://github.com/semeds/timeline_assault')
const developerNames = ref<string[]>([
  'Jace Pivarnik',
  'Khang Nguyen',
  'Sean Emede',
  'Shawn Acheampong'
])
const managerNames = ref<string[]>([])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.jpg', import.meta.url).href)
const genre = ref('Action, Shooter')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay3.jpg', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1auPXBFMHxCds7F21xI5KVmmluYu6rFDJ', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
      <template #about></template>

      <template #instructions>
        <p>
          Your goal in the game is to eliminate all enemy waves and progress through multiple maps until you reach the final level. 
          Use the following controls to play the game:
        </p>
        <ul>
          <li>Movement: Use the arrow keys to move your character left and right and up and down. Double-tapping the up arrow key for double jump</li>
          <li>Shooting: Press the spacebar to shoot.</li>
          <li>Reload: Press the R key to reload your current weapons</li>
          <li>Interaction: Press Shift when near interactive weapons to pick them up.</li>
        </ul>
        <p>
          As you move through the levels, enemies will become tougher, and new maps will unlock. 
          Explore each map to find power-ups and rewards that will help you progress, and defeating enemies will drop power-ups and coins. 
          Be strategic with your movement and attacks to survive enemy waves and complete the game.
        </p>
      </template>

      <template #notes>
        <p>Here are some important notes to help you make the most of your gameplay experience:</p>
        <ol>
          <li>Hidden Secrets: Look out for special kinds of enemies that are in the waves</li>
          <li>Known Bugs:
            <ul>
              <li>Avoid rapidly double-jumping near corners, as it may cause animation glitches and you will fall through the map</li>
            </ul>
          </li>
          <li>Game Tips:
            <ul>
              <li>Defeating enemies allows for power-ups and coins to drop</li>
              <li>Watch for enemy patterns to anticipate their moves and plan your attacks accordingly.</li>
            </ul>
          </li>
          <li>BUG: If you have defeated all of the enemies on the map and no new enemies appear / you are not automatically taken to the next level, wait a bit, jump around all over the map, shoot all over the map, etc., and eventually (hopefully) the game should "fix" itself and do what it should do.</li>
        </ol>
      </template>
    </Project>
  </div>
</template>
