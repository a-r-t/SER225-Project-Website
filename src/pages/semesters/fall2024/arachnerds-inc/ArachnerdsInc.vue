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

const teamName = ref('Arachnerds, Inc.')
const repoUrl = ref('https://github.com/Arachnerds/SER225')
const developerNames = ref<string[]>([
  'Brooks Jackson',
  'Callandra Ruiter',
  'Eric May',
  'Ryan Slattery'
])
const managerNames = ref<string[]>([])
const heroScreenshotFilePath = ref(undefined)
const genre = ref('Platformer, Puzzle')
const screenshots = ref<Screenshot[]>([])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1csWe1_15QdoieaN9XXtEL-NNwDPwiSf8',
    description: 'Download JAR File (must have Java 21 or greater installed)'
  },
  {
    url: 'https://drive.google.com/uc?export=download&id=1A6hwMHWiUf3mflnI1LcH75dY8L2VwaLz',
    description: 'Download JAR File with Player Buff Mod (makes the player move faster and jump higher for an easier time)'
  }
])

const trailer = new URL('./assets/trailer.mp4', import.meta.url).href
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
        <p style="margin-bottom: 10px;font-style: italic">Watch our trailer!</p>
        <video :src="trailer" controls preload="metadata"></video>
      </template>

      <template #instructions>
        <p>
          The goal of the game is to complete the levels and defeat the human who destroyed the spider's web. 
          To complete a level, the user must navigate to the side of the level opposite from where they began. 
          The spider is moved left and right using either the A and D or left and right arrow keys. 
          They can jump using spacebar, crouch using S or the down arrow, and shoot a web with the Q key. 
          Levels contain enemy bugs the player must avoid or defeat. 
          <span style="font-weight: 600">To damage an enemy, the player must web and jump on enemies while they are stunned.</span>
        </p>
        <p>
          Some controls are location-specific. 
          When close the old spider, press T to talk. 
          When near a swing point or jump point, press E to interact with it. 
          Upon coming into contact with a vertical surface, the spider can climb up or down using a combination of the C key and either W and S or the up and down arrows.
        </p>
        <p>
          Several levels contain puzzles. 
          These are generally interacted with using keys 1, 2, 3, and sometimes 4 (depending on how many components there are to the puzzle). 
          An NPC provides advice on the puzzles, including reminding users of the controls.
        </p>
      </template>

      <template #notes>
        <p>
          Arachnophobia mode is available for users with a fear of spiders. 
          It will replace all spiders with walruses. It can be enabled on the main menu, before beginning the game. 
          Select the option with either WASD or the arrow keys and enable or disable it with the spacebar.
        </p>
        <h4 style="text-decoration: underline;">Known issues:</h4>
        <p>
          When using the “jump points” in the backyard level, the player character can become stuck in the falling animation. 
          It is best to try to hit an enemy/hazard in order to restart the level, or else the game will have to be quit.
        </p>
        <h4 style="text-decoration: underline;">Puzzle Advice:</h4>
        <p>
          In the bedroom level, there is a puzzle involving a key and a lock. 
          Find the jar and push it off the shelf to obtain the key. With the key, you may now approach the lock. 
          The goal of the puzzle is to form the image of a keyhole from the scrambled rings. 
          Pressing the 1, 2, or 3 keys will rotate one ring by 45 degrees.
        </p>
      </template>
    </Project>
  </div>
</template>
