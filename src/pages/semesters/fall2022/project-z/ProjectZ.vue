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

const teamName = ref('Project Z')
const repoUrl = ref('https://github.com/kevin-rodri/ZombieLand')
const developerNames = ref<string[]>([
  'Aaryan Kapoor',
  'Brian Wanamaker',
  'Harsh Gandhi',
  'Kevin Rodriguez',
  'Matt Nova'
])
const managerNames = ref<string[]>(['Kyle Chutjian'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Survival Shooter, Horror')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/single-player.png', import.meta.url).href, description: 'Single Player' },
  { filePath: new URL('./assets/co-op.png', import.meta.url).href, description: 'Co-op' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/single-player.mp4', import.meta.url).href, description: 'Single-Player Gameplay' },
  { filePath: new URL('./assets/co-op.mp4', import.meta.url).href, description: 'Co-op Gameplay' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1OwfyBg3JmUJwAO1b5rR6IIXqZrmzg5LV',
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
        <p>Play Project Z...if you dare!</p>
        <p>An endless horde of zombies are coming at you -- are you ready to fight to survive?</p>
        <p>Don't go alone! You can team up with a friend and get them in on the action in co-op mode.</p>
      </template>

      <template #instructions>
        <p>Your goal is to survive as long as possible. You want to do this by running around the map and trying to eliminate all the zombies. The longer you last, the harder it gets! When you survive another wave or eliminate a zombie, you get money. You can then use this money to buy different weapons or more ammo from the NPCs scattered around the map. Good luck finding them!</p>
        <p>For Co-op, you are working together! Be friends and communicate! Keep in mind that you share money, hearts, and ammunition!</p>
        <p>Alex Controls (single player or left player in co-op)</p>
        <ul>
          <li>WALK UP KEY = W</li>
          <li>WALK LEFT KEY = A</li>
          <li>WALK DOWN KEY = S</li>
          <li>WALK RIGHT KEY = D</li>
          <li>INTERACT KEY = SPACE (can be used to talk to NPCs)</li>
          <li>SHOOT KEY = F</li>
        </ul>
        <p>Falex Controls (right player in co-op)</p>
        <ul>
          <li>WALK UP KEY = ARROW KEY UP</li>
          <li>WALK LEFT KEY = ARROW KEY LEFT</li>
          <li>WALK DOWN KEY = ARROW KEY DOWN</li>
          <li>WALK RIGHT KEY = ARROW KEY RIGHT</li>
          <li>INTERACT KEY = SPACE (can be used to talk to NPCs)</li>
          <li>SHOOT KEY = ENTER</li>
        </ul>
      </template>

      <template #notes>
        <p>The goal of the game is to last as long as possible. You only get one extra health and one nuke (kills all zombies currently on screen). Use them wisely!</p>
        <p>For Co-op, remember you are working TOGETHER! Have fun and enjoy playing with a friend!!!!!</p>
        <p>Known bugs:</p>
        <ul>
          <li>Voice lines always play even if you skip through NPC text.</li>
          <li>In co-op, when interacting with an NPC, the textbox will pop up on both player's screens instead of just the player that did the interacting.</li>
        </ul>
      </template>
    </Project>
  </div>
</template>
