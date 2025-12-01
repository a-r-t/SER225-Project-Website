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

const teamName = ref('Cascade')
const repoUrl = ref('https://github.com/R-Seel02/RPG-Project')
const developerNames = ref<string[]>([
  'Mark Pfister',
  'Matthew Wheeler (Matt)',
  'Max Cheezic',
  'Pierce Conway',
  'Ryan Seely'
])
const managerNames = ref<string[]>([
  'Andrew Labbe',
  'Garrett Goldberg'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href }
])
const videos = ref<Video[]>([])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1cyCzDg_O1qAN-w0CkYNYqqRU94Zr7ZBm',
    description: 'Download JAR File (must have Java 21 or greater installed)'
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
        <p>
          Your goal is to traverse the lands of Thimineur to take down the evil King John Kingsley (who has previously kicked your butt). 
          You need to gain your strength and beat his minions first, though, so do quests, fight enemies, and buy some good 'ol potions from your friendly neighborhood insect potion dealer using the coins you gain to give yourself the strength to fight Kingsley!
        </p>
      </template>

      <template #instructions>
        <p>
          Use WASD to move the player and to highlight options in menus and text boxes. 
          Use E to interact with NPCs and items, and select options in menus.
        </p>
        <p>
          Press I to open and close your inventory. 
          Press M to open the map.
        </p>
      </template>

      <template #notes>
        <p>
          Currently, there are a few times where you “get” an item that you don't actually get. 
          Those are usually needed for other quests, but don't show up in the inventory since they don't count as items - other than that, they're currently just a bit of flavor.
        </p>
        <p>
          There are a few minor bugs in the game, but nothing game-breaking. 
          If you encounter something game-breaking, consider not encountering that again.
        </p>
        <p>
          The inventory currently just shows what you have, and can't really be interacted with. 
          There aren't yet enough items to fill your inventory, so don't worry about running out of space.
        </p>
        <p>
          The map animation is pretty low FPS due to limitations with Java. It's not a you thing.
        </p>
      </template>
    </Project>
  </div>
</template>
