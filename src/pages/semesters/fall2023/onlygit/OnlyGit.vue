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

const teamName = ref('OnlyGit')
const repoUrl = ref('https://github.com/dbhargavQU/SER225Project')
const developerNames = ref<string[]>([
  'Cameron Anthony',
  'Carmine Andranovich',
  'Mohith Donthu',
  'Haig Mesrobian'
])
const managerNames = ref<string[]>(['William Siri (Billy)'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Puzzle, Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/Level1.png', import.meta.url).href, description: 'Level 1' },
  { filePath: new URL('./assets/Level2.jpg', import.meta.url).href, description: 'Level 2' },
  { filePath: new URL('./assets/Level3.jpg', import.meta.url).href, description: 'Level 3' },
  { filePath: new URL('./assets/Level4.jpg', import.meta.url).href, description: 'Level 4' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1VnF_1O9QKEiq5JRlH5zmkcw6VnDuqqOp',
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
        <p>Time to put your problem solving skills to the test!</p>
        <p>Explore and complete each level, which introduces a new challenging puzzle for you to solve.</p>
        <p>Can you get the highscore?</p>
      </template>

      <template #instructions>
        <h4>Objective:</h4>
        <p>As a skillful thief, your mission is to navigate through a labyrinth of cunning booby traps and vigilant guards. Your ultimate goal is to make a daring escape from the high-security facility.</p>

        <h4>Controls:</h4>
        <ul>
          <li>Up Arrow: Allows you to jump</li>
          <li>Down Arrow: Lay down to avoid detection or navigate low spaces</li>
          <li>Right Arrow: Move forward, advancing through the facility</li>
          <li>Left Arrow: Move backward, retreat or reposition as needed</li>
          <li>Space Bar: Interact with objects and elements within the game</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>If you find yourself at a loss on how to conquer Level 1, seek out the wise walrus for guidance. This intriguing character holds the key to progressing further in your adventure.</li>
          <li>Keep an eye out for sparkling gems scattered throughout the facility. Each gem you collect unveils fascinating facts and secrets, enriching your gameplay experience.</li>
        </ul>
        <p>Should you need a reminder of the controls or require further assistance, access the instruction page available in the main menu. Here, you'll find detailed guidelines and helpful hints to enhance your thieving escapade.</p>
      </template>
    </Project>
  </div>
</template>
