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

const teamName = ref('AvengHERs')
const repoUrl = ref('https://github.com/TrippMenhall/AvengHERs')
const developerNames = ref<string[]>([
  'Isabela Ayers',
  'Megan Mohr',
  'Reeya Patel',
  'Tripp Menhall',
  'Tyler Rinko'
])
const managerNames = ref<string[]>([
  'Gabriella Pierce (Gabby)',
  'Milena Silva'
])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Platform Fighter')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/character-selection-screen.png', import.meta.url).href, description: 'Character Selection Screen' },
  { filePath: new URL('./assets/level-select-screen.png', import.meta.url).href, description: 'Level Selection Screen' },
  { filePath: new URL('./assets/fight-screen.png', import.meta.url).href, description: 'Level 1 Game Screen' },
  { filePath: new URL('./assets/gameover-screen.png', import.meta.url).href, description: 'Game Over Screen' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Example Fights' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1zYyjZ2uUluzceFCX7feYU-WGm2OJJAO_',
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
        <p>Avengers assemble!</p>
        <p>Battle against your friends in this Avengers-themed platform fighter!</p>
        <p>Which superhero will you choose?</p>
      </template>

      <template #instructions>
        <h4>Game Controls:</h4>
        <p style="font-weight: 600;">Menu controls: <span style="font-weight: 400;">arrow or W-A-S-D keys; space to select</span></p>
        <p style="font-weight: 600;">Level Screen: <span style="font-weight: 400;">arrow keys to choose levels; space to select</span></p>
        <p style="font-weight: 600;">Player 1: <span style="font-weight: 400;">W-A-S-D for movement; Q key to shoot</span></p>
        <p style="font-weight: 600;">Player 2: <span style="font-weight: 400;">Arrow keys for movement; shift key to shoot</span></p>
        <p style="font-weight: 600; margin-bottom: 10px;">Misc:</p>
        <ul style="margin-top: 0px;">
          <li><p>press esc key to return to main menu</p></li>
          <li><p>press P key to pause</p></li>
        </ul>
        <h4>Objective:</h4>
        <p>
          In this local multiplayer platformer game you control the character that you choose and you are given a set health. 
          As you move around the map the goal is to strike your opponent as many times as possible to get their health down. 
          When one player is out of health the round is over.
        </p>
      </template>

      <template #notes>
        <ul>
          <li>
            Each character has different abilities. 
            Hulk's abilities are low jump height, low speed, but a fast firing rate. 
            Iron Man has high jump height, moderate speed, and middle firing rate. 
            Captain America has middle jump height, middle speed and middle firing rate. 
            And lastly, Spiderman has the abilities of moderate jump height, fast speed, and low firing rates.
          </li>
          <li>
            Players can gain health back throughout the match by picking up the first aid kit that spawns randomly throughout the map, to heal one hit back.
          </li>
          <li>
            To activate the easter egg, players will press the keys H, E, R at the same time while on the character selection screen before characters are selected to give the characters selected ponytails in the play screen.
          </li>
        </ul>
      </template>
    </Project>
  </div>
</template>
