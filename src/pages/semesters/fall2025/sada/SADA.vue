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

const teamName = ref('SADA')
const repoUrl = ref('https://github.com/SmSeeley/Sada-s-Nightmare')
const developerNames = ref<string[]>([
  'Abner Garza',
  'Annie McCullagh',
  'Diya Patel',
  'Shane Seeley'
])
const managerNames = ref<string[]>([
  'Christian Kilduff (Chris)'
])
const heroScreenshotFilePath = ref(new URL('./assets/title.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/story.png', import.meta.url).href, description: 'Learn about the game\'s story!' },
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href, description: 'Play through various levels!' },
  { filePath: new URL('./assets/dreamhall.png', import.meta.url).href, description: 'Select a level!' },
])
const videos = ref<Video[]>([])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1UFlXtAzRL4A5s3dMal5nH7wVn1hw8rnM', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>The goal of Sada's Nightmare is to go through different rooms interacting with NPCs, collecting keys and coins while defeating enemies to get to the last room to defeat the final boss Vladimir.</p>
      </template>

      <template #instructions>
        <h4>Controls:</h4>
        <ul>
          <li>Space Bar to start game</li>	
          <li>Movement: Use W, A, S, D keys to move your character</li>	
          <li>Attack: Use arrow keys to attack</li>	
          <li>Interaction: Press E to interact with NPCs</li>	
          <li>Use up and down arrow keys to choose option</li>	
        </ul>
      </template>

      <template #notes>
        <p>While playing Sada's Nightmare, there are some important things to note:</p>
        <ul>
          <li>There is a glitch in the game where if you respawn you cannot collect keys anymore. It is important to restart the game after dying (close out and repoen).</li>
          <li>Another important thing to keep in mind is that the game was designed for users to run through dungeon, then ice, then sand, then fire.  Before going to fire, users should try to buy the angel sword because it is the strongest currently in our game.</li>
          <li>Users should interact with every Wizard they come by.  While they look the exact same and some just give you coins, others give you the keys needed to leave the room.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
