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

const teamName = ref('GameforgeAlchemists')
const repoUrl = ref('https://github.com/JLaFrance3/SER225-Game')
const developerNames = ref<string[]>([
  'Dawit Kasy',
  'Erin Swearingen',
  'Jean LaFrance',
  'Skhy Morris',
  'Thomas Rua (Thom)',
])
const managerNames = ref<string[]>([
  'Caden Effrece',
  'Caleb Muriuki-Mureithi'
])
const heroScreenshotFilePath = ref(undefined)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href },
  { filePath: new URL('./assets/gameplay3.png', import.meta.url).href }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1cZiwfbOI-_Qs-c2zYNZLD8LtEuEemdiR', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>Enter a world of fantasy as you journey and fight your way through a gripping storyline and multiple quests!</p>
      </template>

      <template #instructions>
        <p>
          Our game is a 2D fantasy RPG with lots to explore and discover. 
          There are some NPCs to talk to, some maps including inside buildings, enemies to fight, and even a couple side quests. 
          The game has multiple quests with a main storyline where the player's main goal is to solve a mystery involving the kingdom!
        </p>
      </template>

      <template #notes>
        <p style="text-decoration: underline;margin-bottom: 0px;">Main Menu</p>
        <ul>
          <li>Use the arrow keys to move up and down along the selections, and the spacebar to select an option</li>
          <li>Launch the game by selecting 'Play Game'</li>
          <li>The 'New Game' option will take you to a character customization menu where you can change the appearance of your sprite character and the character's name</li>
          <li>The 'Credits' option shows the credits</li>
          <li>The 'Controls' option will give you an overview of all the controls used in the game and their functions</li>
        </ul>

        <p style="text-decoration: underline;margin-bottom: 0px;">Player Movement</p>
        <ul>
          <li>Player movement is with W (up), A (left), S (down), and D (right) or the arrow keys (up, left, down, and right, respectively)</li>
          <li>A quest log can be accessed with Q</li>
          <li>Your inventory can be accessed with I</li>
        </ul>

        <p style="text-decoration: underline;margin-bottom: 0px;">NPCs</p>
        <ul>
          <li>When encountering an NPC, you can press the spacebar to interact</li>
          <li>Some NPC's are enemies, which will be apparent when you enter combat mode after interacting with one</li>
          <li>Some NPC's are meant to guide you through quests, which will allow you to progress through the game</li>
          <li>If you ever forget what you are supposed to be doing, you can press Q to enter and exit the quest log</li>
          <li>Other NPC's are just there to add life to the game!</li>
        </ul>

        <p style="text-decoration: underline;margin-bottom: 0px;">Map Traversal</p>
        <ul>
          <li>The player starts in a small map area, but there is also a much larger town map to explore, as well as rooms inside buildings and a few smaller maps</li>
          <li>Most text boxes will lock the player in place (such as when interacting with NPCs or enemies), but in instances where it does not (like when passing a sign), the text box may move while the text stays in place on the screen, due to the player location/orientation. This can be fixed by walking back to the place where you first interacted with the text, or by pressing space bar to remove the text box</li>
        </ul>

        <p style="text-decoration: underline;margin-bottom: 0px;">Recommended Minimum Specs</p>
        <ul>
          <li>8gb DDR4 RAM</li>
          <li>11th Gen Intel Core i5</li>
          <li>NVIDIA GeForce GTX 1650</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
