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

const teamName = ref('Cosmic Cats')
const repoUrl = ref('https://github.com/lucasmore244/SER225_Platformer')
const developerNames = ref<string[]>([
  'Lucas Morello',
  'Momoreoluwa Ayinde (Momore)',
  'Ohm Patel',
  'Rom Wasserman',
  'Steven Griffin'
])
const managerNames = ref<string[]>(['Isaac Crawford'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer, Runner')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/intro-video.png', import.meta.url).href, description: 'Intro Sequence' },
  { filePath: new URL('./assets/level2.png', import.meta.url).href, description: 'Level 2' },
  { filePath: new URL('./assets/level4.png', import.meta.url).href, description: 'Level 4' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1JoFEdb7Clny0HbT6xMEkjsFCAHMYtTK6',
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
        <p>Oh no! Cat's kittens have been stolen by an evil space dog.</p>
        <p>Cat will do anything to save them...no matter what it takes.</p>
      </template>

      <template #instructions>
        <p>
          A Space Dog came to earth and stole a cat's kittens.
          Your goal is to traverse through each level and finally fight the Dog in the last level to save the kittens.
        </p>
        <p>Controls:</p>
        <ul>
          <li>Use the arrow keys on the keyboard for movement</li>
          <li>At the start of the game, you can click on the space bar to skip the intro sequence</li>
          <li>In Level 2, press the Q Key to shoot</li>
          <li>In Level 4, press the Q key while in the air to attack the enemy</li>
        </ul>
      </template>

      <template #notes>
        <p>You need to collect all of the collectables in Level 4 to have access to the boss fight.</p>
        <p>You can click the M key to change the background music to one of the available options.</p>
        <p>Collecting at least three collectables in each level increases your health by 1.</p>
      </template>
    </Project>
  </div>
</template>
