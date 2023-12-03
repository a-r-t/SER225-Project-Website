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
      p Play Project Z...if you dare! 
      p An endless horde of zombies are coming at you -- are you ready to fight to survive?
      p Don't go alone! You can team up with a friend and get them in on the action in co-op mode.
    template(v-slot:instructions)
      p Your goal is to survive as long as possible. 
        | You want to do this by running around the map and trying to eliminate all the zombies. 
        | The longer you last, the harder it gets! When you survive another wave or eliminate a zombie, you get money. 
        | You can then use this money to buy different weapons or more ammo from the NPCs scattered around the map. 
        | Good luck finding them! 
      p For Co-op, you are working together! Be friends and communicate! Keep in mind that you share money, hearts, and ammunition!
      p Alex Controls (single player or left player in co-op)
      ul
        li WALK UP KEY = W
        li WALK LEFT KEY = A
        li WALK DOWN KEY = S 
        li WALK RIGHT KEY = D
        li INTERACT KEY = SPACE (can be used to talk to NPCs)
        li SHOOT KEY = F
      p Falex Controls (right player in co-op)
      ul
        li WALK UP KEY = ARROW KEY UP
        li WALK LEFT KEY = ARROW KEY LEFT
        li WALK DOWN KEY = ARROW KEY DOWN
        li WALK RIGHT KEY = ARROW KEY RIGHT
        li INTERACT KEY = SPACE (can be used to talk to NPCs)
        li SHOOT KEY = ENTER
    template(v-slot:notes)
      p The goal of the game is to last as long as possible. You only get one extra health and one nuke (kills all zombies currently on screen). Use them wisely!
      p For Co-op, remember you are working TOGETHER! Have fun and enjoy playing with a friend!!!!!
      p Known bugs: 
      ul
        li Voice lines always play even if you skip through NPC text.
        li In co-op, when interacting with an NPC, the textbox will pop up on both player's screens instead of just the player that did the interacting.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'ProjectZ',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Project Z',
      repoUrl: 'https://github.com/kevin-rodri/ZombieLand',
      developerNames: [
        'Aaryan Kapoor',
        'Brian Wanamaker',
        'Harsh Gandhi',
        'Kevin Rodriguez',
        'Matt Nova'
      ],
      managerNames: [
        'Kyle Chutjian'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Survival Shooter, Horror',
      screenshots: [
        {
          filePath: require('./assets/single-player.png'),
          description: 'Single Player'
        },
        {
          filePath: require('./assets/co-op.png'),
          description: 'Co-op'
        }
      ],
      videos: [
        {
          filePath: require('./assets/single-player.mp4'),
          description: 'Single-Player Gameplay'
        },
        {
          filePath: require('./assets/co-op.mp4'),
          description: 'Co-op Gameplay'
        }
      ],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1OwfyBg3JmUJwAO1b5rR6IIXqZrmzg5LV',
          description: 'Download JAR File (must have Java 1.8 or greater installed)'
        }
      ]
    }
  }
}
</script>