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

const teamName = ref('Mean Turtles')
const repoUrl = ref('https://github.com/rpekash/Yup-RPG-Game')
const developerNames = ref<string[]>([
  'Dylan Bellinger',
  'Kastrijot Syla (Kash)',
  'Mia Troiano'
])
const managerNames = ref<string[]>(['Alex Thimineur'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Puzzle')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/jupiters-claim.png', import.meta.url).href, description: "In-game recreation of Jupiter's Claim from the movie Nope" },
  { filePath: new URL('./assets/final-puzzle.png', import.meta.url).href, description: 'Watch out!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1aprr6XeybK1zK2d9_tK-lqXzLOcV_Gib',
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
        <p>
          Inspired by Jordan Peele's movie 
          <em><a href="https://www.imdb.com/title/tt10954984/">Nope</a></em>, 
          <em>Yup!</em> is a game where you play from the POV of Lucky the Horse and attempt to defeat the UFO.
        </p>
        <p>There will be many obstacles and hazards in Lucky's way, but this horse is determined to defend the ranch and the people that care for him.</p>
        <p>Along the way, Lucky will journey around the central locations and interact with the main characters from the movie.</p>
      </template>

      <template #instructions>
        <p>Navigate Lucky the Horse around the map to portals, which lead to puzzles that need to be completed.</p>
        <p>Complete each puzzle to unlock the final puzzle where you need to avoid the UFO and go into the glass box.</p>
        <p>Controls:</p>
        <ul>
          <li>Use the arrow keys to move.</li>
          <li>Use spacebar to interact with objects, portals and NPCs.</li>
          <li>Press P to use the pause menu.</li>
        </ul>
      </template>

      <template #notes>
        <p>
          You have to complete all five puzzles to win the game. Four of the puzzles are unlocked from the start. 
          The 5th one is hidden and locked until all four starting puzzles have been completed.
        </p>
        <p>There is a bug in our game where you randomly die...but the game will let you respawn from where you were at when you died so it's all good...</p>
      </template>
    </Project>
  </div>
</template>
