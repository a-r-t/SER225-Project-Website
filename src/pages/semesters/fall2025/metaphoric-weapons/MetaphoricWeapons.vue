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

const teamName = ref('Metaphoric Weapons')
const repoUrl = ref('https://github.com/bbailor/SER225')
const developerNames = ref<string[]>([
  'Aurelien Buisine',
  'Benjamin Bailor',
  'Dean Acheampong',
  'Jackson Sennhenn',
  'Ryan Davis'
])
const managerNames = ref<string[]>([
  'Isabela Ayers'
])
const heroScreenshotFilePath = ref(new URL('./assets/title.PNG', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([])
const videos = ref<Video[]>([])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1z1ewctL3dOPMofT6x5UtC9Ed1-nqFeOm', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>
          Gnomeo lived a comfortable life in his cabin in the woods, until his love, Juliet, was taken from him. 
          Now, he must fight through the five stages of grief to rescue her from the clutches of death.
        </p>

        <p style="margin-bottom: 10px;font-style: italic">Watch our trailer!</p>
        <video style="width: 100%" :src="trailer" controls preload="metadata"></video>
      </template>

      <template #instructions>
        <p>
          The goal of the game is to progress through the story and work through Gnomeo's grief. 
          Pick up all items you can find (apples, cherries, etc.) as they may help in upcoming battles. 
          Talk to NPCs, and consult the quest log in the menu if uncertain where to go.
        </p>

        <h4>Controls</h4>

        <ul>
          <li>
            Movement & Interactions:
            <ul>
              <li>Use WASD to move.</li>
              <li>Press SPACE to interact with NPCs, skip dialogue, and pick up items.</li>
            </ul>
          </li>

          <li>
            Screens:
            <ul>
              <li>Press ESC to open the menu.</li>
              <li>Interact with menus using the mouse or arrow keys with ENTER/SPACE and ESC.</li>
              <li>In the inventory, press U to use items and BACKSPACE to remove items.</li>
            </ul>
          </li>

          <li>
            Saving:
            <ul>
              <li>Use the SAVE tab in the menu to save progress.</li>
              <li>To load saved progress, click the saved file in the save menu.</li>
            </ul>
          </li>
        </ul>

      </template>

      <template #notes>
        <ul>
          <li>Apples restore HP.</li>
          <li>Make sure to equip weapons as you find them—they are powerful.</li>
          <li>Side quests reward powerful items; explore to discover and complete them.</li>
          <li>
            Follow the blue wisps after defeating bosses to reach the next map. 
            Your hitbox is near your feet and must pass through the wisp to trigger the next one.
          </li>
          <li>
            Declining to fight some enemies may prevent further progress, so avoid choosing "no" at battle prompts.
          </li>
          <li>
            After the bargaining boss fight, losing all HP should normally trigger end-game, 
            but since the check is missing outside battle, you may get an additional chance to try again.
          </li>
        </ul>        
      </template>
    </Project>
  </div>
</template>
