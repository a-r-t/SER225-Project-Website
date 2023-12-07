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
      p Based off of the Quinnipiac Hockey Team's incredible championship run in 2023, 
        i The Road To Victory 
        span will allow you to battle each of their opponents during the Frozen Four.
      p Do you have what it takes to bring home the trophy?
    template(v-slot:instructions)
      h4 Game Controls:
      ul 
        li WASD For Movement
        li ESC for Inventory
        li ENTER for Inventory Interaction
        li SHIFT to Sprint
      
      h4 Battle Controls
      ul
        li UP and DOWN arrow keys for selecting Attack Choice
        li ENTER for Attack Selection

      h4 Battle Rules
      ul
        li In this game, there are 3 attacks; HEAVY, LIGHT, &amp; DEFEND
        li In a battle, the attack bounds are as follows:
        ul 
          li HEAVY beats DEFEND
          li DEFEND beats LIGHT
          li LIGHT beats HEAVY
    template(v-slot:notes)
      p You need to fight the bosses in order of how the tournament actually went. 
        | The 4 teams (in order) were: 
        ol
          li Merrimack Knights 
          li Ohio State Buckeyes
          li Michigan Wolverines
          li Minnesota Golden Gophers.
      p You cannot move on to the next fight until you beat the boss before it. 
      p Once you beat the 2 bosses on the main map, you need to go to the arrow up above in the ice rink, interact with it with SPACE, and then you will be transported to the championship map. 
      p Each boss has a specific pattern of attack that you will need to memorize in order to beat them. Each pattern and boss gets harder each time. 
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'ThreeTwo',
  components: {
    Project
  },
  data() {
    return {
      teamName: '3-2',
      repoUrl: 'https://github.com/angelami4/CSC225',
      developerNames: [
        'Aidan Armellino',
        'Angela Bruno',
        'Cole Davignon',
        'Javier Flores (Javi)'
      ],
      managerNames: [
        'Rion-Mark McLaren'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'RPG',
      screenshots: [
        {
          filePath: require('./assets/map.png'),
          description: 'Go Bobcats!'
        },
        {
          filePath: require('./assets/battle.png'),
          description: 'Defeat the other teams to earn your trophy!'
        },
        {
          filePath: require('./assets/inventory.png'),
          description: 'Utilize items and other goodies to help aid you in combat!'
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
          url: 'https://drive.google.com/uc?export=download&id=1SIatV6MjUxyKA_dFuYra1sqSfDTDmJbA',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>