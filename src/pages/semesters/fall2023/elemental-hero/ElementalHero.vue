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

const teamName = ref('Elemental Hero')
const repoUrl = ref('https://github.com/PeterZegarek/elemental-hero')
const developerNames = ref<string[]>([
  'Hunter Yocum',
  'Lukas Martino',
  'Peter Zegarek',
  'Philip Nora'
])
const managerNames = ref<string[]>(['Kevin Rodriguez'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platformer, Action')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/FireMap.png', import.meta.url).href, description: 'Fire Level' },
  { filePath: new URL('./assets/ElectricMap.png', import.meta.url).href, description: 'Electric Level' },
  { filePath: new URL('./assets/KrakenBoss.png', import.meta.url).href, description: 'Kraken Boss Fight' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1zejd4S-XPo8Pwd7S4JjmJcqcwR7qWQ7r',
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
        <p>Master the elements in this unforgettable platforming adventure!</p>
        <p>Can you defeat all of the bosses and become the true elemental hero?</p>
      </template>

      <template #instructions>
        <ul>
          <li>Explore each level</li>
          <li>Locate the 'Unknown Traveler' NPC</li>
          <li>Take down enemies along your path</li>
          <li>Defeat end-level boss to progress</li>
        </ul>

        <h4>Controls:</h4>
        <h5>Movement:</h5>
        <ul>
          <li>Jump -> Up Arrow</li>
          <li>Crouch -> Down Arrow</li>
          <li>Walk Left -> Left Arrow</li>
          <li>Walk Right -> Right Arrow</li>
        </ul>

        <h5>Attacking:</h5>
        <ul>
          <li>Use Ability -> F Key</li>
          <li>Cycle Abilities -> R Key</li>
        </ul>

        <h5>Misc:</h5>
        <ul>
          <li>Talk to NPC -> Space Bar</li>
          <li>Pause Game -> P Key</li>
        </ul>
      </template>

      <template #notes>
        <p>This is an action platformer where you progress through levels unlocking abilities that are unique and interact with enemies differently. You unlock an ability after every level completion. Make sure you understand how to use all 5!</p>
        <p>The 5 elements that are present in this game are Earth, Fire, Water, Electric, Air. Air counters electric, electric counters water, water counters fire, fire counters earth, and earth counters air. Pay attention to what element counters what, as it will be necessary when you face the final boss.</p>
        <p>Don't be worried if you struggle fighting some of the bosses, this game is not meant to be super easy! Remember that there is no time limit, and you can take all the time that you need.</p>
        <p>You will get softlocked if you walk off the edge of any of the maps! Make sure to avoid the edges.</p>
        <p>Have fun!</p>
      </template>
    </Project>
  </div>
</template>
