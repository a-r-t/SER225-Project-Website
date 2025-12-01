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

const teamName = ref('Bobcat Brawlers')
const repoUrl = ref('https://github.com/NolanKrieger/bobcatBrawlers')
const developerNames = ref<string[]>([
  'Aaron Wilhelm',
  'Andrew Goodman',
  'Joseph Lurie',
  'Lucas Deutsch',
  'Nolan Krieger'
])
const managerNames = ref<string[]>([
  'Brandon McCrave',
  'Joshua Molin'
])
const heroScreenshotFilePath = ref(undefined)
const genre = ref('')
const screenshots = ref<Screenshot[]>([])
const videos = ref<Video[]>([])
const downloads = ref<Download[]>([])
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
      </template>

      <template #instructions>
      </template>

      <template #notes>
      </template>
    </Project>
  </div>
</template>
