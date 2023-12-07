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
      p What happens when you mix an roguelike game with a food theme?
      p You get an incredibly unique experience full of rooms to explore, enemies to defeat, and skills to unlock.
      p And yes, everything in this game is food related. And we mean EVERYTHING.
    template(v-slot:instructions)
      p Your goal is to make it through three floors of the food pyramid, navigating through rooms to a boss fight, then ascending to the next floor. 
      p Use the skill tree available to upgrade your character and get stronger, and even unlock ultimate abilities! 
      p There is a shop that allows you to get new items and projectiles to make your character more versatile.                                   
      
      h4 Controls:                                                                                                     
      ul
        li Movement - WASD                                                                                       
        li Fire Projectile - J                                                                                       
        li Use Current Ultimate Ability - L                                                            
        li View Skill Tree - T                                                                                       
        li Pause Game - P                                                                            
        li Inventory Menu - I                                                                                           
        li View/Change Active Ultimate Screen - M                                                       
        li Interact/Talk/Use Door - SPACE                                                                 
        li Escape Window - ESC or Same Key Used to Open Window                            
    template(v-slot:notes)
      ul
        li You won't  be able to see your ultimates by using M until you've unlocked them! So make sure to unlock them first!                 
        li There is a secret hidden somewhere inside the game! His name is Platino! Try and find him!
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'LetUsCook',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Let Us Cook',
      repoUrl: 'https://github.com/Ceffrece/SER225-Project',
      developerNames: [
        'Caden Effrece',
        'Kyle MacDonald',
        'Marcus Ferreira',
        'Riley Damasco',
        'William Regan (Bill)'
      ],
      managerNames: [
        'Brian Wanamaker'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Roguelike',
      screenshots: [
        {
          filePath: require('./assets/gameplay2.png'),
          description: 'Traverse rooms and defeat enemies!'
        },
        {
          filePath: require('./assets/gameplay3.png'),
          description: 'Be sure to collect goodies along the way!'
        },
        {
          filePath: require('./assets/skilltree1.png'),
          description: 'Don\t forget to upgrade your skills in the Skill Tree!'
        },
        {
          filePath: require('./assets/skilltree2.png'),
          description: 'The Skill Tree allows the player to do things like increase their attack power, attack range, and more!'
        }
      ],
      videos: [
        
      ],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1fM7Q_HD_RSsifLvvVvkP-p4dWEVKRbFc',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>