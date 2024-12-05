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
        p Enter a world of fantasy as you journey and fight your way through a gripping storyline and multiple quests!
      template(v-slot:instructions)
        p Our game is a 2D fantasy RPG with lots to explore and discover. 
          | There are some NPCs to talk to, some maps including inside buildings, enemies to fight, and even a couple side quests. 
          | The game has multiple quests with a main storyline where the player's main goal is to solve a mystery involving the kingdom!
      template(v-slot:notes)
        p(style="text-decoration: underline;margin-bottom: 0px;") Main Menu
        ul
          li Use the arrow keys to move up and down along the selections, and the spacebar to select an option
          li Launch the game by selecting 'Play Game'
          li The 'New Game' option will take you to a character customization menu where you can change the appearance of your sprite character and the character's name
          li The 'Credits' option shows the credits
          li The 'Controls' option will give you an overview of all the controls used in the game and their functions
        p(style="text-decoration: underline;margin-bottom: 0px;") Player Movement
        ul
          li Player movement is with W (up), A (left), S (down), and D (right) or the arrow keys (up, left, down, and right, respectively)
          li A quest log can be accessed with Q
          li Your inventory can be accessed with I
        p(style="text-decoration: underline;margin-bottom: 0px;") NPCs
        ul
          li When encountering an NPC, you can press the spacebar to interact
          li Some NPC's are enemies, which will be apparent when you enter combat mode after interacting with one 
          li Some NPC's are meant to guide you through quests, which will allow you to progress through the game
          li If you ever forget what you are supposed to be doing, you can press Q to enter and exit the quest log
          li Other NPC's are just there to add life to the game!
        p(style="text-decoration: underline;margin-bottom: 0px;") Map Traversal
        ul
          li The player starts in a small map area, but there is also a much larger town map to explore, as well as rooms inside buildings and a few smaller maps
          li Most text boxes will lock the player in place (such as when interacting with NPCs or enemies), but in instances where it does not (like when passing a sign), the text box may move while the text stays in place on the screen, due to the player location/orientation.
            | This can be fixed by walking back to the place where you first interacted with the text, or by pressing space bar to remove the text box
        p(style="text-decoration: underline;margin-bottom: 0px;") Recommended Minimum Specs
        ul
          li 8gb DDR4 RAM
          li 11th Gen Intel Core i5
          li NVIDIA GeForce GTX 1650
  </template>
  
  <script>
  import Project from '../../../../components/Project.vue'
  
  export default {
    name: 'GameforgeAlchemists',
    components: {
      Project
    },
    data() {
      return {
        teamName: 'GameforgeAlchemists',
        repoUrl: 'https://github.com/JLaFrance3/SER225-Game',
        developerNames: [
          'Dawit Kasy',
          'Erin Swearingen',
          'Jean LaFrance',
          'Skhy Morris',
          'Thomas Rua (Thom)',
        ],
        managerNames: [
          'Caden Effrece',
          'Caleb Muriuki-Mureithi'
        ],
        heroScreenshotFilePath: undefined,
        genre: 'RPG',
        screenshots: [
          {
            filePath: require('./assets/gameplay1.png')
          },
          {
            filePath: require('./assets/gameplay2.png')
          },
          {
            filePath: require('./assets/gameplay3.png')
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
            url: 'https://drive.google.com/uc?export=download&id=1cZiwfbOI-_Qs-c2zYNZLD8LtEuEemdiR',
            description: 'Download JAR File (must have Java 21 or greater installed)'
          }
        ]
      }
    }
  }
  </script>