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
      p Hope you're ready for a scavenger hunt!
      p In this game, you will need to explore several worlds, collect items, and fight enemies in order to survive.
      p And for those of you that are fans of 
        i Gossip Girl
        span , can you spot all of the references spread throughout the game?
    template(v-slot:instructions)
      p Press space to start the game 
      p Use the arrows on the keyboard to select which character you would like to play with 
      p Press enter to begin the game and then press enter after the video has played to begin playing
      p Walk using the arrows on the keyboard or run using A,W,S,D 
      p Collect items by running over them 
      p Beware of enemies they will decrease health, collecting items however will increase health 
      p When the axe is collected use E to hit enemies 
      p When key is collected go to the portal 
      p To talk to NPCs by walking up to them and pressing space 
      p To answer a trivia question press space and then enter the number of your answer
    template(v-slot:notes)
      p When the player reaches the second level there is trivia questions about Gossip Girl after you collect an item. 
        | You must select the correct answer to collect the item and complete the level.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'XoxoGossipGirl',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'XOXO, Gossip Girl',
      repoUrl: 'https://github.com/aamnahmalik/SER225Game',
      developerNames: [
        'Aamnah Malik',
        'Gabriella Pierce (Gabby)',
        'Milena Silva',
        'Tess Bossdorf'
      ],
      managerNames: [
        'Emily Balboni'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'RPG, Collect-a-Thon',
      screenshots: [
        {
          filePath: require('./assets/CharacterSelect.png'),
          description: 'Choose wisely...'
        },
        {
          filePath: require('./assets/Level1.png'),
          description: 'Watch out for zombies!'
        },
        {
          filePath: require('./assets/Level2.png'),
          description: 'How well do you know your Gossip Girl lore?'
        }
      ],
      videos: [
        {
          filePath: require('./assets/game-video.mp4'),
          description: 'Full Game Playthrough'
        }
      ],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1RAgN8MeH92dRJAcYkqkOLoWWLLCNK7KT',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>