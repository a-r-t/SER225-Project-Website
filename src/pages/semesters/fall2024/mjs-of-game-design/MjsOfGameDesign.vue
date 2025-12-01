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

const teamName = ref("MJ's of Game Design")
const repoUrl = ref('https://github.com/anthony-gon/smash-fighters')
const developerNames = ref<string[]>([
  'Anthony Gonzalez Bravo',
  'Benjamin Delton',
  'Hayden Ward',
  'Mario Panagrosso',
  'Samuel Joor (Sam)'
])
const managerNames = ref<string[]>(['Charlize Aponte'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platform Fighter')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay.png', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1R5jLG02BpLIJhK9bSHNuoHS2CH2gVxyV', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
          Smash Fighters is a game very similar to Smash Bros. 
          There are different character classes that you can use to fight with.
        </p>
      </template>

      <template #instructions>
        <p>
          Once you load into the homescreen you have the option to go into the training room where you can get comfortable with the controls. 
          Or hop right into the game where a player will be chosen to pick a map then both players will pick their characters.
        </p>
        <h4 style="margin-bottom: 2px;">Controls</h4>
        <div class="controls-container" style="display: flex; flex-direction: column; gap: 40px;">
          <div class="player-one">
            <p style="font-weight: 600;">Player One</p>
            <p style="margin: 0px;">Jump: W</p>
            <p style="margin: 0px;">Crouch: S</p>
            <p style="margin: 0px;">Right: D</p>
            <p style="margin: 0px;">Left: A</p>
            <p style="margin: 0px;">Attack: E</p>
            <p style="margin: 0px;">Select: Space</p>
          </div>
          <div class="player-two">
            <p style="font-weight: 600;">Player Two</p>
            <p style="margin: 0px;">Jump: I</p>
            <p style="margin: 0px;">Crouch: K</p>
            <p style="margin: 0px;">Right: L</p>
            <p style="margin: 0px;">Left: J</p>
            <p style="margin: 0px;">Attack: U</p>
            <p style="margin: 0px;">Select: Enter</p>
          </div>
        </div>
      </template>

      <template #notes>
        <p>Have fun and beat your friends in a fight.</p>
        <p>
          Also, when you see the "Error" intro screen when first booting up the game, 
          hit "Space" to continue to the main menu after an epic cutscene.
        </p>
      </template>
    </Project>
  </div>
</template>
