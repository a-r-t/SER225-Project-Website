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
        p The Legend of Hobbomock is an exploration-based RPG set on the mysterious mountain of The Sleeping Giant. 
        | What begins as a simple hike takes a strange turn when a park ranger warns of unusual occurrences in the mountain. 
        | Skeptical, you continue -- only to discover unsettling truths. 
        | To complete your journey, you must confront the mountain's hidden forces and unravel its secrets. 
        | Will you awaken the legend, or will it claim you? 
        | The adventure begins now.
      template(v-slot:instructions)
        h4 Game Controls:
        ul(style="list-style:none;")
          li W: Move Up
          li A: Move Left
          li S: Move Down
          li D: Move Right
          li E: Interact 
          li H: To access the Help Screen
          li ECS: Pause/Exit
        h4 Combat Controls: 
        ul(style="list-style:none;")
          li Left Shift: Ranged Attack (Slingshot)
          li Space Bar: Melee Attack (Hiking Stick)
        h4 How to get the weapons needed for each level:
        p In Level 1 use the hiking stick initially to break the log and enter the clearing along the path. 
        | When you enter the clearing with the bears, the slingshot pickup is located in the middle
      template(v-slot:notes)
        p When starting the game, use W and S to scroll through the menu and E to select options, interact with objects, and cycle through text. 
        | Selecting a Play Game begins the story, introducing the hiker's journey.

        p After the intro, you start in a small area blocked by fences and a log. 
        | A prompt in the bottom-right suggests pressing H for the help screen, which updates with guidance as you play. 
        | Press ESC to access controls and other options.
        
        p Explore the area, follow the help prompts, and encounter enemies that reduce your health (indicated by flashing red). 
        | Use SPACE to attack them. 
        | Defeat the enemies guarding the slingshot, press E to pick it up, and use it to knock down a branch, crossing the river to complete the level.
        
        p Explore the new area, follow the new help prompts, and encounter new enemies. 
        | The player must make it through the ferocious volley of nuts being thrown at them to make it to the altar. 
        | Interacting with the altar by pressing E makes it possible to finish the level. 
        | Make it back through the squirrels and exit the second to the third and final level. 
        
        p In the third level you will enter a castle which is being guarded by the Big Boomer Boss (BBB) on the first floor. 
        | Defeat BBB with your attacks and make it to the second floor of the castle where you meet the spirit of Hobbomock and finish the story.
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'Hobo',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'Hobo',
        repoUrl: 'https://github.com/JessicaTheodore/TMobile',
        developerNames: [
          'Andrew Ehlers',
          'Evan Vastakis',
          'Grant Foody',
          'Jessica Theodore (Jess)',
          'Natalie Spiska'
        ],
        managerNames: [],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'RPG',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.png')
          },
          {
            filePath: require('./assets/gameplay2.png')
          },
          {
            filePath: require('./assets/gameplay3.png'),
            description: 'The hardest part of the game...'
          },
          {
            filePath: require('./assets/meme.png')
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
            url: 'https://drive.google.com/uc?export=download&id=1091HC4u9oSRzF3_tGHg71zEmj8NbDvnC',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>