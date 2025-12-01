<script setup lang="ts">
interface Screenshot {
  filePath: string
  description?: string
}

interface Video {
  filePath: string
  description?: string
}

interface Download {
  url: string
  description: string
}

interface Props {
  teamName: string
  repoUrl: string
  developerNames: string[]
  managerNames: string[]
  heroScreenshotFilePath?: string
  genre: string
  screenshots: Screenshot[]
  videos: Video[]
  downloads: Download[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="root">
    <div class="outer-container">
      <div class="container">

        <h1>{{ props.teamName }}</h1>

        <div class="repo">
          <a :href="props.repoUrl">GitHub Repo</a>
        </div>

        <h2>Team Members</h2>

        <strong>Developers:</strong>
        <ul>
          <li v-for="developerName in props.developerNames" :key="developerName">
            {{ developerName }}
          </li>
        </ul>

        <div class="managers" v-if="props.managerNames.length > 0">
          <strong>Managers:</strong>
          <ul>
            <li v-for="managerName in props.managerNames" :key="managerName">
              {{ managerName }}
            </li>
          </ul>
        </div>

        <h2>Game</h2>

        <div class="screenshot" v-if="props.heroScreenshotFilePath">
          <img :src="props.heroScreenshotFilePath" />
        </div>

        <h3>About</h3>
        <slot name="about"></slot>

        <h3>Genre</h3>
        <p>{{ props.genre }}</p>

        <div class="screenshots" v-if="props.screenshots.length > 0">
          <h3>Screenshots</h3>

          <div
            class="screenshot"
            v-for="screenshot in props.screenshots"
            :key="screenshot.filePath"
          >
            <img :src="screenshot.filePath" />
            <p class="asset-description">{{ screenshot.description }}</p>
          </div>
        </div>

        <h3>Instructions</h3>
        <slot name="instructions"></slot>

        <h3>Notes</h3>
        <slot name="notes"></slot>

        <div class="videos" v-if="props.videos.length > 0">
          <h3>Videos</h3>

          <div class="video" v-for="video in props.videos" :key="video.filePath">
            <video :src="video.filePath" controls preload="metadata"></video>
            <p class="asset-description">{{ video.description }}</p>
          </div>
        </div>

        <h3>Downloads</h3>

        <div class="downloads" v-if="props.downloads.length > 0">
          <ul>
            <div
              class="download-container"
              v-for="download in props.downloads"
              :key="download.url"
            >
              <li>
                <a :href="download.url" download target="_blank">
                  {{ download.description }}
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div class="no-downloads" v-else>
          <em>Coming soon!</em>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  background: #5d7a8c;
}

.container {
  width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  background: #99b4bf;
  border: 2px solid #253c59;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.screenshot {
  display: flex;
  flex-direction: column;
}

img {
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  height: auto;
  border-radius: 7px;
  border: 2px solid #253c59;
}

a {
  color: #253c59;
}

a:active {
  color: #8a5f11;
}

.asset-description {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 5px;
  font-style: italic;
  margin-bottom: 30px;
}

.download-container {
  margin-bottom: 10px;
}

.video {
  display: flex;
  flex-direction: column;
}

video {
  max-width: 100%;
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #253c59;
}
</style>
