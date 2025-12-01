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

const teamName = ref('Slime Otissey')
const repoUrl = ref('https://github.com/aleenagraveline/SlimeOtissey')
const developerNames = ref<string[]>([
  'Aleena Graveline',
  'John Caceres',
  "MollyAnn O'Malley",
  'Ryan Barbarito'
])
const managerNames = ref<string[]>([
  'Eric Carlson',
  'Marcus Ferreira'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG, Adventure')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href, description: 'Cave' },
  { filePath: new URL('./assets/gameplay2.jpg', import.meta.url).href, description: 'Ice Puzzle' },
  { filePath: new URL('./assets/gameplay3.jpg', import.meta.url).href, description: 'Combat' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
  { filePath: new URL('./assets/trailer.mp4', import.meta.url).href, description: 'Game Trailer' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=15U8U1mEza9ZflOg37VnqTLlikhL14pNZ', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
          Alex finally made a friend, but he's a little bit different with a crazy backstory.
          Otis the slime was experimented on by King Lodeon, who experimented on an entire species (Slimes) to give them powers that make him stronger.
          Otis was given the power to morph into weapons but he managed to escape from the kingdom and make his way to a small village.
          Alex and Otis embark on an expedition to kill the King and free the rest of the slimes from his wrath.
        </p>
      </template>

      <template #instructions>
        <p>
          Travel through several biomes with your best bud Otis, solving puzzles, fighting enemies, and exploring new places on a long, treacherous journey to kill King Lodeon and free all the slime species.
        </p>
        <h4>Key controls:</h4>
        <ul>
          <li>W - Move Upwards</li>
          <li>S - Move Downwards</li>
          <li>A - Move Left</li>
          <li>D - Move Right</li>
          <li>Spacebar - Interact</li>
          <li>I - Open/Close Inventory</li>
          <li>P - Pause</li>
        </ul>
        <h4>Inventory Controls:</h4>
        <ul>
          <li>I - Open/Close Inventory</li>
          <li>C - Toggle Controls panel</li>
          <li>W - Move Up</li>
          <li>S - Move Down</li>
          <li>Spacebar - Select Item</li>
        </ul>
      </template>

      <template #notes>
        <p>
          There are 6 endings in our game, each depending on your friendship level with Otis and the outcome of the boss battle with King Lodeon.
          The best ending is when you beat the king and also have over 150 friendship points with Otis.
        </p>
        <p>
          There are several optional puzzles in our game: two in the village, one in the cave, and one in the Ice map.
          While these aren't necessary to complete, they are great opportunities to learn more about the lore and gain friendship points with Otis.
        </p>
        <p>
          There are only random battle pop-ups in the Forest.
          For the most part, if you stay on the path you won't encounter any enemies.
        </p>
      </template>
    </Project>
  </div>
</template>
