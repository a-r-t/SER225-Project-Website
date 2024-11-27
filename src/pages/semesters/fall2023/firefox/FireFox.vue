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
      p Oh no! The legendary FireFox has lost its orb, and it is up to you to recover it!
      p Prepare to go on an adventure like no other as you explore interesting worlds, meet zany characters, and solve engaging puzzles!
    template(v-slot:instructions)
      p Enter - Interact with NPCs / Select dialogue option
      p Up, Down, Left, Right - Move the player, Cycle through options
      p Shift - Pressing once while moving will make the player sprint, pressing again will make them walk again.
      p Space - Cycle through slideshow.
      p E - Pull up inventory.
    template(v-slot:notes)
      h4 Hub world - Firefox
      p This is the world that you spawn in. Talk to the firefox and figure out what to do!
      h4 World 1- Internet Explorer
      p This is the first world that unlocks. 
        | Talk to Old Man Jenkins in order to start the first quest, the engineers in order to start the second quest, and the librarian in order to start the last quest. 
        | (In order to enter the library in the first world, go next to the broken window tile.) once all three quests are complete, go to the portal.
      h4 World 2 - Safari
      p This is the second world that unlocks. 
        | Go into the shops that are unlocked in order to find the pieces of the orb! 
        | Only characters with the “...” textbox can be talked to. 
        | There are three quests and three fragments to collect.
      h4 World 3 - Chrome World
      p This is the last world that unlocks. 
      p Go through the multiple floors of the building and defeat all of the NPCs. Only one fragment received on the top floor.
      h4 Bugs/Other Stuff
      p Issue: Interact with an npc (with “...” above their head) and they say nothing.
      p Fix: Back away, go back up to them, then try interacting again.
      p Issue: Stuck in wall in world one library (happened once during testing).
      p Fix: Press '1' on the keyboard to reload world one. Flags are persistent so the first two quests will still be complete and you can go right back into the library.
      p Issue: One of the NPCs you need to talk to for a quest in world two is partially obscured due to a positioning bug.
      p Fix: look in the top left of the main street map.
      p Issue: Battle dialogue freezing.
      p Fix: Just wait, there is a bit of a delay when loading a battle.
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'FireFox',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'FireFox',
      repoUrl: 'https://github.com/Sharktroid/SER-225-Game-RPG',
      developerNames: [
        'Aaron Toomer',
        'Calvin Pancavage',
        'Evan Quinn',
        'Juliet Lombardi',
        'Shannon Brickett'
      ],
      managerNames: [
        'Matt Nova'
      ],
      heroScreenshotFilePath: require('./assets/hubworld.png'),
      genre: 'RPG, Puzzle',
      screenshots: [
        {
          filePath: require('./assets/windows.png'),
          description: 'World 1'
        },
        {
          filePath: require('./assets/apple.png'),
          description: 'World 2'
        },
        {
          filePath: require('./assets/chrome.png'),
          description: 'World 3'
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
          url: 'https://drive.google.com/uc?export=download&id=1wR1mSbngfbJO_gmPewU9S4499rC2iUbv',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>