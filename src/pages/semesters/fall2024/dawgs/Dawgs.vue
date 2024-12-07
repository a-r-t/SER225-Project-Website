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
        p Your brother has been missing for months, and the investigation has gone absolutely nowhere. 
          | Since you've arrived home from college, you've taken it upon yourself to solve this mystery once and for all! 
          | By talking to the townspeople about your brother, collecting pages from his notebook, and getting clues from around town and from the investigator, discover what truly happened to your brother!
      template(v-slot:instructions)
        p As the only one who is really concerned about your brother, your goal is to find out where he is and uncover what happened to him. 
          | Make sure you use the journal and talk to NPCs to unlock more pages and clues!
        h4(style="margin-bottom: 0px") Controls:
        ol
          li TO MOVE: Use the arrow keys.
          li TO TALK: Use the space key to talk to other characters.
          li TO CHECK SIGNS: Use 'space' key when in contact with sign.
          li TO OPEN JOURNAL: Use the 'j' key to open/close journal.
          li TO FLIP JOURNAL PAGES: Use the arrow keys.
          li TO SPRINT: Hold down 'shift' key.
          li TO ESCAPE POP-UPs: Use 'esc' key.
          li You don't need to keep these in mind; we have a HOW TO PLAY section in the game.
      template(v-slot:notes)
        p When exiting a pop-up page, press escape and one of the arrow keys to exit the image. 
        p Keep an eye out for anything unusual around the map!
        h4 Help, I'm stuck on the part of the game with the crossword puzzle -- it's too hard!
        p While the crossword puzzle is intended to be challenging, we would not want to prevent you from progressing in the game if you truly cannot figure out the answers. 
          | Click on the appropriate collapsible below for the answer to a few of the trickier questions:
        Collapsible(title="5 letter word to describe an overwhelming feeling of fear and anxiety")
          template(v-slot:content)
            p(style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;") PANIC
        Collapsible(title="10 letter term for exploring events that are beyond scientific reasoning" style="margin-top: 10px;")
          template(v-slot:content)
            p(style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;") PARANORMAL
        Collapsible(title="8 letter word meaning a state of nervous uncertainty for what comes next" style="margin-top: 10px;")
          template(v-slot:content)
            p(style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;") SUSPENSE
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  import Collapsible from '../../../../components/Collapsible.vue'
  
  export default {
    name: 'Dawgs',
    components: {
      Project,
      Collapsible
    },
    data() {
      return {
        teamName: 'Dawgs',
        repoUrl: 'https://github.com/SamWoodburn26/MysteryGame',
        developerNames: [
          'Adelina Chocho',
          'Ella Berry',
          'Morgan Montz',
          'Samantha Woodburn (Sam)',
          'Tuana Turhan'
        ],
        managerNames: [],
        heroScreenshotFilePath: require('./assets/titlescreen.png'),
        genre: 'Mystery, Horror',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.png'),
            description: 'One morning you wake up can change everything in your life!'
          },
          {
            filePath: require('./assets/gameplay2.png'),
            description: 'Everywhere a different mystery can be hidden!'
          },
          {
            filePath: require('./assets/gameplay3.png'),
            description: 'If you want to progress in the game, I suggest you focus on puzzles.'
          },
          {
            filePath: require('./assets/gameplay4.png'),
            description: 'Turn up the music if you want to feel more of the mystery as you stroll through the town!'
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
            url: 'https://drive.google.com/uc?export=download&id=1tezw7OaLY8shGm6wYPN1Dezt7qCuCOjv',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>
