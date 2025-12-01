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

const teamName = ref('Dream Team 2.0')
const repoUrl = ref('https://github.com/Kmschro/DreamTeam2')
const developerNames = ref<string[]>([
  'Ethan Lanier',
  'Henry Cort',
  'Klaus Schroeder',
  'Thomas Morrissey'
])
const managerNames = ref<string[]>(['Emilio Cruz'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer, Action')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href, description: 'Complete each level!' },
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href, description: 'Use gravity switching to your advantage!' },
  { filePath: new URL('./assets/gameplay3.png', import.meta.url).href, description: 'Watch out for enemies!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1OSdOkrmkUWxGE-DejNgEtqKIHruWCIHz',
    description: 'Download JAR File (must have Java 17 or greater installed)'
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1TUxkR930og6Or-HMOcZTve-vdiPp6b34',
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
        <i>Lab Run</i> <span>is here and ready to shake up the platformer formula!</span>
        <p>The name of the game is to strategically switch gravity as you make your way through each level.</p>
        <p>If you want a challenge, look no further -- this game will test you!</p>
      </template>

      <template #instructions>
        <p>Your goal is to traverse through each platforming level and get to the portal at the end of every level.</p>
        <p>There are various kinds of enemies and obstacles that you will need to avoid.</p>
        <p>There are six levels that you need to complete to finish the game. There are also coins on each level for you to collect.</p>

        <h4>Controls:</h4>
        <ul>
          <li>W key: Reverses the player's gravity</li>
          <li>A key: Move Left</li>
          <li>D key: Move Right</li>
          <li>F key: will allow you to shoot fireballs at enemies once you get the power-up.</li>
          <li>SHIFT key: will allow you to sprint while holding a movement button, once you get the sprint powerup</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>If you run out of time on the level timer, you will have to start over, but if you die on a particular level, you will respawn at the start of that level.</li>
          <li>The hitbox on the powerups may be a bit small so, you might need to move around and hit it directly.</li>
          <li>The audio may overlap a little if Greg keeps dying, so in case the audio repeats, you can just hit mute on your laptop.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
