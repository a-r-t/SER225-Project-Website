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

const teamName = ref('ART')
const repoUrl = ref('https://github.com/Sligertiger1230/SER-225-Game')
const developerNames = ref<string[]>([
  'Brooks Jackson',
  'Connor Ryan',
  'Hayden Lacy',
  'Julia Bock',
  'Ryan Sliger'
])
const managerNames = ref<string[]>(['Alex Thimineur'])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Adventure, RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/campus.png', import.meta.url).href, description: 'Main Campus' },
  { filePath: new URL('./assets/cce030.png', import.meta.url).href, description: 'Room CCE030' },
  { filePath: new URL('./assets/pubsafety.png', import.meta.url).href, description: 'Engage with a cast of Quinnipiac-related characters!' },
  { filePath: new URL('./assets/quest.png', import.meta.url).href, description: 'Complete quests across campus!' },
  { filePath: new URL('./assets/hockey.png', import.meta.url).href, description: 'Tackle various puzzles and challenges!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1JjgZAeDih2O0M4XmYUTq7lV0tpHhVr7q',
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
        <p>Welcome to Quinnipiac!</p>
        <p>As a newly admitted student, it is up to you to complete all quests across campus in order to graduate.</p>
        <p>Along the way, you will explore popular campus locations and meet several (in)famous characters that make Quinnipiac the special school that it is.</p>
        <p>Go Bobcats!</p>
      </template>

      <template #instructions>
        <p>Traverse the Quinnipiac campus and complete the quests in order to graduate! Quests can be accessed through the Quest menu, where players can also see their progress.</p>
      </template>

      <template #notes>
        <p>There are a couple of bugs here and there due to both the complexity of the features the team implemented as well as the large number of features that were fit into this project.</p>
      </template>
    </Project>
  </div>
</template>
