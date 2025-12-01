<script setup lang="ts">
import Project from '../../../../components/Project.vue'
import { ref } from 'vue'

interface Screenshot {
  filePath: string
  description: string
}

interface Video {
  filePath: string
  description: string
}

interface Download {
  url: string
  description: string
}

const teamName = ref('FireFox')
const repoUrl = ref('https://github.com/Sharktroid/SER-225-Game-RPG')
const developerNames = ref<string[]>([
  'Aaron Toomer',
  'Calvin Pancavage',
  'Evan Quinn',
  'Juliet Lombardi',
  'Shannon Brickett'
])
const managerNames = ref<string[]>(['Matt Nova'])
const heroScreenshotFilePath = ref(new URL('./assets/hubworld.png', import.meta.url).href)
const genre = ref('RPG, Puzzle')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/windows.png', import.meta.url).href, description: 'World 1' },
  { filePath: new URL('./assets/apple.png', import.meta.url).href, description: 'World 2' },
  { filePath: new URL('./assets/chrome.png', import.meta.url).href, description: 'World 3' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  {
    url: 'https://drive.google.com/uc?export=download&id=1wR1mSbngfbJO_gmPewU9S4499rC2iUbv',
    description: 'Download JAR File (must have Java 17 or greater installed)'
  }
])
</script>

<template>
  <div class="root">
    <Project
      :teamName="teamName"
      :repoUrl="repoUrl"
      :developerNames="developerNames"
      :managerNames="managerNames"
      :heroScreenshotFilePath="heroScreenshotFilePath"
      :genre="genre"
      :screenshots="screenshots"
      :videos="videos"
      :downloads="downloads"
    >
      <template #about>
        <p>Oh no! The legendary FireFox has lost its orb, and it is up to you to recover it!</p>
        <p>Prepare to go on an adventure like no other as you explore interesting worlds, meet zany characters, and solve engaging puzzles!</p>
      </template>

      <template #instructions>
        <p>Enter - Interact with NPCs / Select dialogue option</p>
        <p>Up, Down, Left, Right - Move the player, Cycle through options</p>
        <p>Shift - Pressing once while moving will make the player sprint, pressing again will make them walk again.</p>
        <p>Space - Cycle through slideshow.</p>
        <p>E - Pull up inventory.</p>
      </template>

      <template #notes>
        <h4>Hub world - Firefox</h4>
        <p>This is the world that you spawn in. Talk to the firefox and figure out what to do!</p>

        <h4>World 1- Internet Explorer</h4>
        <p>This is the first world that unlocks. Talk to Old Man Jenkins in order to start the first quest, the engineers in order to start the second quest, and the librarian in order to start the last quest. (In order to enter the library in the first world, go next to the broken window tile.) Once all three quests are complete, go to the portal.</p>

        <h4>World 2 - Safari</h4>
        <p>This is the second world that unlocks. Go into the shops that are unlocked in order to find the pieces of the orb! Only characters with the “...” textbox can be talked to. There are three quests and three fragments to collect.</p>

        <h4>World 3 - Chrome World</h4>
        <p>This is the last world that unlocks. Go through the multiple floors of the building and defeat all of the NPCs. Only one fragment received on the top floor.</p>

        <h4>Bugs/Other Stuff</h4>
        <p>Issue: Interact with an npc (with “...” above their head) and they say nothing.<br/>Fix: Back away, go back up to them, then try interacting again.</p>
        <p>Issue: Stuck in wall in world one library (happened once during testing).<br/>Fix: Press '1' on the keyboard to reload world one. Flags are persistent so the first two quests will still be complete and you can go right back into the library.</p>
        <p>Issue: One of the NPCs you need to talk to for a quest in world two is partially obscured due to a positioning bug.<br/>Fix: look in the top left of the main street map.</p>
        <p>Issue: Battle dialogue freezing.<br/>Fix: Just wait, there is a bit of a delay when loading a battle.</p>
      </template>
    </Project>
  </div>
</template>
