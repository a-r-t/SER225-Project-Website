<template lang="pug">
.root
  Project(
    :teamName="teamName",
    :repoUrl="repoUrl",
    :developerNames="developerNames"
    :managerNames="managerNames"
    :heroScreenshotFilePath="heroScreenshotFilePath"
    :genre="genre",
    :screenshots="screenshots",
    :videos="videos",
    :downloads="downloads"
  )
    template(v-slot:about)
      p Welcome to Quinnipiac!
      p As a newly admitted student, it is up to you to complete all quests across campus in order to graduate.
      p Along the way, you will explore popular campus locations and meet several &#40;in&#41;famous characters that make Quinnipiac the special school that it is.
      p Go Bobcats!
    template(v-slot:instructions)
      p Traverse the Quinnipiac campus and complete the quests in order to graduate! 
        | Quests can be accessed through the Quest menu, where players can also see their progress.
    template(v-slot:notes)
      p There are a couple of bugs here and there due to both the complexity of the features the team implemented as well as the large number of features that were fit into this project.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'Art',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'ART',
      repoUrl: 'https://github.com/Sligertiger1230/SER-225-Game',
      developerNames: [
        'Brooks Jackson',
        'Connor Ryan',
        'Hayden Lacy',
        'Julia Bock',
        'Ryan Sliger'
      ],
      managerNames: [
        'Alex Thimineur'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Adventure, RPG',
      screenshots: [
        {
          filePath: require('./assets/campus.png'),
          description: 'Main Campus'
        },
        {
          filePath: require('./assets/cce030.png'),
          description: 'Room CCE030'
        },
        {
          filePath: require('./assets/pubsafety.png'),
          description: 'Engage with a cast of Quinnipiac-related characters!'
        },
        {
          filePath: require('./assets/quest.png'),
          description: 'Complete quests across campus!'
        },
        {
          filePath: require('./assets/hockey.png'),
          description: 'Tackle various puzzles and challenges!'
        },
      ],
      videos: [
        {
          filePath: require('./assets/game-video.mp4'),
          description: 'Full Game Playthrough'
        }
      ],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1JjgZAeDih2O0M4XmYUTq7lV0tpHhVr7q',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>