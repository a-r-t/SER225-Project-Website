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

const teamName = ref('Delirium')
const repoUrl = ref('https://github.com/Vicman8/Delirium--game')
const developerNames = ref<string[]>([
  'Akshaj Illa',
  'Brandon McCrave',
  'Nicholas Demetrio (Nick)',
  'Tamar Foster',
  'Victor Fuda'
])
const managerNames = ref<string[]>([])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.jpg', import.meta.url).href)
const genre = ref('RPG, Adventure, Comedy')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.jpg', import.meta.url).href },
  { filePath: new URL('./assets/gameplay3.jpg', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=12xy30MmEOrvmEOTllC3sFPkbwKgWQSIh', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>Take back your air conditioning!</p>
        <p>
          In Medievirium, a bear has ransacked the Quinnipiac Campus and has destroyed the parts of your dorm's air conditioning, 
          scattering the parts around the campus.
        </p>
        <p>
          Travel around the campus, find the air conditioning, talk to strange characters, and challenge the bear in a final duel to get your AC back!
        </p>
      </template>

      <template #instructions>
        <ul>
          <li>Your goal is to collect air conditioning components spread around the campus</li>
          <li>E to pick up AC parts</li>
          <li>Arrow keys to move</li>
          <li>S to save (can only be done in the dormitory)</li>
          <li>Space to interact</li>
          <li>Hold shift to sprint</li>
          <li>Doors are interacted with automatically</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>
            There is a hidden level that can be accessed from the exterior Mountainview map. 
            WARNING: Once you are in this level you are unable to leave without quitting out the game. 
            So it is only recommended to look for this level once you have completed the game once already or are not planning to finish it. 
            Hint: It can only be accessed when the player is in the real world.
          </li>
          <li>
            Key presses when picking up an item can be a bit finicky. 
            If you don't collect an item on the first try, try it again from different angles until you get the item.
          </li>
          <li>
            The final fight can be engaged by going south of Mountainview in the hallucinated world. 
            The fight can be done at any point in the game, but the players must answer questions during it that can only be answered correctly by seeing certain parts of the game.
          </li>
        </ul>
      </template>
    </Project>
  </div>
</template>
