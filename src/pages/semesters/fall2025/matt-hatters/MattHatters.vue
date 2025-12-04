<script setup lang="ts">
import Project from '../../../../components/Project.vue'
import { ref } from 'vue'

interface Screenshot {
  filePath: string
  description?: string
}

interface Video {
  filePath: string
  description: string
}

interface Download {
  url: string
  description: string
}

const teamName = ref('Matt Hatters')
const repoUrl = ref('https://github.com/193926Matthew/CardansAdventure')
const developerNames = ref<string[]>([
  'Brian Palchizaca Neira',
  'Brody Chevrier',
  'Matthew Jones',
  'Mia Hernandez'
])
const managerNames = ref<string[]>([
  'Jason Jackson',
  'Tuana Turhan'
])
const heroScreenshotFilePath = ref(new URL('./assets/TitleScreen.png', import.meta.url).href)
const genre = ref('Platformer')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/desertLevel.png', import.meta.url).href, description: 'Desert Level' },
  { filePath: new URL('./assets/snowLevel.png', import.meta.url).href, description: 'Snow Level' },
  { filePath: new URL('./assets/jungleLevel.png', import.meta.url).href, description: 'Jungle Level' },
  { filePath: new URL('./assets/snowBoss.png', import.meta.url).href, description: 'Snow Level Boss' },
  { filePath: new URL('./assets/jungleBoss.png', import.meta.url).href, description: 'Jungle Level Boss' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1iI37wVXgUngGLVvKUqjf19TKrGGd7aIQ', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>In Cardan's Adventure, you play as Cardan the Chinchilla on a quest to save Rosie, his red panda friend.</p>
        <p>But beware! Danger lurks with biome-inspired levels full of predator enemies such as snakes and skunks, and watch out for toxic blocks and falling platforms.</p>
      </template>
      <template #instructions>
        <h4>Objective:</h4> 
        <p>Your goal is to free your red panda friend by traversing through each platforming level and interacting with the red panda at the end of each level.</p>

        <h4>Controls:</h4>

        <p>Menu selection: to select an option from the menu upon startup, use the up and down arrow keys and hit enter to confirm your selection.</p>

        <p>Please note that at any time, you can use the P key to pause the game.</p>

        <h4>Movement:</h4>

        <p>
          You can move, walk, crouch, and jump by using the WASD keys. 
          This means that to walk forward, you would use the D key, and to walk backwards, you would use the A key. 
          To crouch, use the S key, and to jump, use the W key. 
        </p>
        
        <h4>Attacks:</h4>

        <p>
          You have two base attacks available to use: tail spin and tail attack. 
          To use tail spin, use the left arrow key. To use the tail attack, use the right arrow key. 
        </p>
        
        <p>NOTE: If you need more help with the controls, hit the controls menu.</p>

        <h4>Power Ups:</h4> 

        <p>
          You have 5 power-ups across the levels, although they are unique to their specific level. 
          When you obtain the power-up, a pop-up will display showing how to use it. 
        </p>
        
        <p>
          Double-Jump: press the W key twice. 
          Please note there is a cooldown after each use.
        </p>
        <p>
          Speed-Boost: automatically activated upon collection. 
          There is a cooldown after each use.
        </p>
        <p>
          Ice-Ball: Use the I key to shoot the ice ball projectiles. 
          This will also slow down your enemies.
        </p>
        <p>
          Fire-Ball: Use the B key to shoot the fireball projectiles. 
          This does the most damage to your enemies.
        </p>
        <p>
          Poison-Ball: Use the O key to shoot the poison ball projectiles. 
          This will cause initial damage, along with dealing additional damage after a specific time to your enemy. 
        </p>

        <h4>Level Selection:</h4> 

        After you finish the tutorial, you will load into the lobby map.  
        The lobby map is the main hub where you will have access to all the levels and where you will respawn after completing a level or boss fight.

        <p>To play the Snow level, walk past the tree (make sure to avoid the entrance near the tree, otherwise you will walk into the jungle level) and walk into the entrance in the igloo.</p>

        <p>To play the Jungle level, walk into the entrance in the tree.</p>

        <p>To play the Desert level, walk into the entrance of the pyramid.</p>
      </template>

      <template #notes>
        <p>You start with the tutorial level to learn how to interact with the game.</p>
        <p>
          The Snow and Jungle levels have boss fights that may be difficult. 
          You can prepare for the jungle boss fight by collecting your health power-ups ahead of time. 
          You can prepare for the snow boss fight by watching for the movement of the narwhal. 
          When it is stunned, that is your time to attack. 
          The desert level, however, does not have a boss fight. 
        </p>
        
        <p>While on frozen blocks in the snow level, you will slide and have your mobility increased.</p>

        <p>When you collect a power-up, look out for the pop-up to see how to use the collected power-up.</p>
      </template>
    </Project>
  </div>
</template>
