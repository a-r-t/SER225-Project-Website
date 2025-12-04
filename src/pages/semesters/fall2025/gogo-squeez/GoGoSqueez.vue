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

const teamName = ref('GoGo Squeez')
const repoUrl = ref('https://github.com/RiotKings/Ser225')
const developerNames = ref<string[]>([
  'Elias Hoxha',
  'Kaab Dawit',
  'Lukas Perrelli',
  'Luke Petrocelli',
  'Slater Von Stetten'
])
const managerNames = ref<string[]>([
  'Aleena Graveline',
  'Calvin Pancavage'
])
const heroScreenshotFilePath = ref(new URL('./assets/title.png', import.meta.url).href)
const genre = ref('Roguelike')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/enemies.png', import.meta.url).href, description: 'Watch out for enemies!' },
  { filePath: new URL('./assets/enemies2.png', import.meta.url).href, description: 'Many different randomized room designs!' },
  { filePath: new URL('./assets/items.png', import.meta.url).href, description: 'Collect items along the way!' },
  { filePath: new URL('./assets/finalboss.png', import.meta.url).href, description: 'Can you beat the final boss?' },

])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1a7jV6Gw_CjjAqdbaHLyQ9ExoNE57x7I9', description: 'Download JAR File (must have Java 23 or greater installed)' }
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
          Welcome to R'lyeh, the lost city that is the prison of Cthulhu. 
          Traverse through the ever changing rooms and alleys that warp and change with each revisit. 
          Clear the enemies in each room to travel to the next and collect items to help you in your quest to face Cthulhu.
          Will you answer the summons of Cthulhu?
        </p>
      </template>

      <template #instructions>
        <ul>
          <li>Use WASD to move.</li>
          <li>Space to dodge (can only be used once every 2 seconds).</li>
          <li>Use your mouse to aim and left click to shoot—bullets travel toward the mouse/crosshair.</li>
          <li>Avoid contact with enemies.</li>
          <li>Defeat all enemies and move to the door at the top of the room to progress.</li>
          <li>Losing all hearts results in a game over.</li>
          <li>Upon death all items and progress reset and the game randomizes.</li>
          <li>Every 5 rooms rewards an item, every 10 rooms contains a boss.</li>
          <li>Face Cthulhu in room 22. After beating a boss use the stairs to reach the next floor.</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>The player may encounter bugs that impact gameplay.</li>
          <li>The bottom doors have no collision; walking through them can take the player outside the map.</li>
          <li>Enemies bunched too close together may shift due to their collision.</li>
          <li>Avoiding the bottom door prevents leaving the map.</li>
          <li>Zombies can still bunch up due to their AI and spawn positions.</li>
        </ul>

        <h4>Enemies</h4>
          <ul>
            <li>Cultist: 3 health, shoots at player, deals half a heart.</li>
            <li>Bug: 2 health, contact damage, deals half a heart.</li>
            <li>Zombie: 4 health, contact damage, deals a full heart.</li>
            <li>Mine: 3 health, explodes after 8 seconds, deals half a heart.</li>
            <li>Sentry: 6 health, constantly shoots at player, deals half a heart.</li>
            <li>Floor Boss 1: 10 health, shoots at player, deals a full heart.</li>
            <li>Floor Boss 2: 13 health, shoots at player.</li>
            <li>Cthulhu: 20 health, shoots like cultist, bullet circle like mine, contact damage like zombie.</li>
          </ul>

          <h4>Items</h4>
          <ul>
            <li>Extra Heart: gives a new heart container.</li>
            <li>Double Damage: doubles the damage dealt by the player.</li>
            <li>Fire Rate: increases the player's fire rate.</li>
            <li>Shield: absorbs one hit in a room.</li>
            <li>SpeedBoots: increases player speed.</li>
          </ul>
      </template>
    </Project>
  </div>
</template>
