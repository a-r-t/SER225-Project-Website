<template lang="pug">
.root
  .outer-container
    .container
      h1 {{ teamName }}
      .repo
        a(:href="repoUrl") GitHub Repo
      h2 Team Members
      strong Developers:
      ul
        li(v-for="developerName in developerNames" :key="developerName") {{ developerName }}
      strong Managers: 
      ul
        li(v-for="managerName in managerNames" :key="managerName") {{ managerName }}
      h2 Game
      .screenshot
        img(:src="heroScreenshotFilePath")
      h3 About
      slot(name="about")
      h3 Genre
      p {{ genre }}
      h3 Screenshots
      .screenshot(v-for="screenshot in screenshots" :key="screenshot.filePath")
        img(:src="screenshot.filePath")
        p.asset-description {{ screenshot.description }}
      h3 Instructions
      slot(name="instructions")
      h3 Notes
      slot(name="notes")
      h3 Videos
      .video(v-for="video in videos" :key="video.filePath")
        video(:src="`${video.filePath}`" controls preload="metadata")
        p.asset-description {{ video.description }}
      h3 Downloads
      .download-container(v-for="download in downloads" :key="download.url")
        a(:href="download.url" download target="_blank") {{ download.description }}
</template>

<script>
export default {
  name: 'Project',
  props: {
    teamName: {
      type: String,
      required: true
    },
    repoUrl: {
      type: String,
      required: true
    },
    developerNames: { // string[]
      type: Array,
      required: true
    },
    managerNames: { // string[]
      type: Array,
      required: true
    },
    heroScreenshotFilePath: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    screenshots: { // [ { filePath: string, description: string }]
      type: Array,
      required: true
    },
    videos: { // [ { filePath: string }]
      type: Array,
      required: true
    },
    downloads: { // [ { url: string, description: string }]
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped>
.outer-container {
  display: flex;
  justify-content: center;
  background: #5D7A8C;
}

.container {
  width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;  
  background: #99B4BF;
  border: 2px solid #253C59;
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
  border: 2px solid #253C59;
}

a {
  color: #253C59;
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
  border: 2px solid #253C59;
}
</style>