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

const teamName = ref('Sleepy Squad')
const repoUrl = ref('https://github.com/Killakhi/GameProject')
const developerNames = ref<string[]>([
  'Aditi Baghel',
  'Diego Matayoshi',
  'Khila Sanchez (Khi)',
  'Stella Leonard',
  'Trey Paraska'
])
const managerNames = ref<string[]>([
  'Cameron Anthony',
  'Gregory Jean-Baptiste (Greg)'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay.png', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1Vg6iVs7mYzhL0M8Q0PSt-l5GumNWIZd5', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
          Are you looking for a wholesome, classic-feeling RPG? If so, this is the game for you!
        </p>
      </template>

      <template #instructions>
        <p>Your goal is to defeat as many enemies as you can see, by interacting with them and fighting.</p>
        <p>When you feel like you've done enough, fight the final boss by talking to the NPC at the upper left corner of the map.</p>
        <p>Use the arrow keys to move around the map, with your party members following you.</p>
        <p>
          Press space to perform all actions, like speaking with NPCs or selecting options in battle.
          Press Esc to look at the pause menu with your stats, and have the option to quit the game.
        </p>
      </template>

      <template #notes>
        <p>In-game, there is one small quest: collect all items for a reward at the end.</p>
        <p>The hitboxes can be a little weird; it is usually best to interact with NPCs and objects from the side, usually the right side.</p>
        <p>Selected item menus are always the brightest color. In-battle, the highlighted option is yellow; in the pause menu, the highlighted option is white.</p>
      </template>
    </Project>
  </div>
</template>
