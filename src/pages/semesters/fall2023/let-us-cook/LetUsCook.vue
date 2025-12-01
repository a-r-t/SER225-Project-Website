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

const teamName = ref('Let Us Cook')
const repoUrl = ref('https://github.com/Ceffrece/SER225-Project')
const developerNames = ref<string[]>([
  'Caden Effrece',
  'Kyle MacDonald',
  'Marcus Ferreira',
  'Riley Damasco',
  'William Regan (Bill)'
])
const managerNames = ref<string[]>(['Brian Wanamaker'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Roguelike')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href, description: 'Traverse rooms and defeat enemies!' },
  { filePath: new URL('./assets/gameplay3.png', import.meta.url).href, description: 'Be sure to collect goodies along the way!' },
  { filePath: new URL('./assets/skilltree1.png', import.meta.url).href, description: "Don't forget to upgrade your skills in the Skill Tree!" },
  { filePath: new URL('./assets/skilltree2.png', import.meta.url).href, description: 'The Skill Tree allows the player to do things like increase their attack power, attack range, and more!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1fM7Q_HD_RSsifLvvVvkP-p4dWEVKRbFc',
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
        <p>What happens when you mix an roguelike game with a food theme?</p>
        <p>You get an incredibly unique experience full of rooms to explore, enemies to defeat, and skills to unlock.</p>
        <p>And yes, everything in this game is food related. And we mean EVERYTHING.</p>
      </template>

      <template #instructions>
        <p>Your goal is to make it through three floors of the food pyramid, navigating through rooms to a boss fight, then ascending to the next floor.</p>
        <p>Use the skill tree available to upgrade your character and get stronger, and even unlock ultimate abilities!</p>
        <p>There is a shop that allows you to get new items and projectiles to make your character more versatile.</p>

        <h4>Controls:</h4>
        <ul>
          <li>Movement - WASD</li>
          <li>Fire Projectile - J</li>
          <li>Use Current Ultimate Ability - L</li>
          <li>View Skill Tree - T</li>
          <li>Pause Game - P</li>
          <li>Inventory Menu - I</li>
          <li>View/Change Active Ultimate Screen - M</li>
          <li>Interact/Talk/Use Door - SPACE</li>
          <li>Escape Window - ESC or Same Key Used to Open Window</li>
        </ul>
      </template>

      <template #notes>
        <ul>
          <li>You won't be able to see your ultimates by using M until you've unlocked them! So make sure to unlock them first!</li>
          <li>There is a secret hidden somewhere inside the game! His name is Platino! Try and find him!</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
