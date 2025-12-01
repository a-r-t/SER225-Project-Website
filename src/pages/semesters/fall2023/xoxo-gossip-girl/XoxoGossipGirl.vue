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

const teamName = ref('XOXO, Gossip Girl')
const repoUrl = ref('https://github.com/aamnahmalik/SER225Game')
const developerNames = ref<string[]>([
  'Aamnah Malik',
  'Gabriella Pierce (Gabby)',
  'Milena Silva',
  'Tess Bossdorf'
])
const managerNames = ref<string[]>(['Emily Balboni'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('RPG, Collect-a-Thon')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/CharacterSelect.png', import.meta.url).href, description: 'Choose wisely...' },
  { filePath: new URL('./assets/Level1.png', import.meta.url).href, description: 'Watch out for zombies!' },
  { filePath: new URL('./assets/Level2.png', import.meta.url).href, description: 'How well do you know your Gossip Girl lore?' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1RAgN8MeH92dRJAcYkqkOLoWWLLCNK7KT',
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
        <p>Hope you're ready for a scavenger hunt!</p>
        <p>In this game, you will need to explore several worlds, collect items, and fight enemies in order to survive.</p>
        <p>And for those of you that are fans of <i>Gossip Girl</i>, can you spot all of the references spread throughout the game?</p>
      </template>

      <template #instructions>
        <p>Press space to start the game</p>
        <p>Use the arrows on the keyboard to select which character you would like to play with</p>
        <p>Press enter to begin the game and then press enter after the video has played to begin playing</p>
        <p>Walk using the arrows on the keyboard or run using A,W,S,D</p>
        <p>Collect items by running over them</p>
        <p>Beware of enemies they will decrease health, collecting items however will increase health</p>
        <p>When the axe is collected use E to hit enemies</p>
        <p>When key is collected go to the portal</p>
        <p>To talk to NPCs by walking up to them and pressing space</p>
        <p>To answer a trivia question press space and then enter the number of your answer</p>
      </template>

      <template #notes>
        <p>When the player reaches the second level there is trivia questions about Gossip Girl after you collect an item. You must select the correct answer to collect the item and complete the level.</p>
      </template>
    </Project>
  </div>
</template>
