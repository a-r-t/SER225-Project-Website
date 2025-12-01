<script setup lang="ts">
import Project from '../../../../components/Project.vue'
import Collapsible from '../../../../components/Collapsible.vue'
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

const teamName = ref('Dawgs')
const repoUrl = ref('https://github.com/SamWoodburn26/MysteryGame')
const developerNames = ref<string[]>([
  'Adelina Chocho',
  'Ella Berry',
  'Morgan Montz',
  'Samantha Woodburn (Sam)',
  'Tuana Turhan'
])
const managerNames = ref<string[]>([])
const heroScreenshotFilePath = ref(new URL('./assets/titlescreen.png', import.meta.url).href)
const genre = ref('Mystery, Horror')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/gameplay1.png', import.meta.url).href, description: 'One morning you wake up can change everything in your life!' },
  { filePath: new URL('./assets/gameplay2.png', import.meta.url).href, description: 'Everywhere a different mystery can be hidden!' },
  { filePath: new URL('./assets/gameplay3.png', import.meta.url).href, description: 'If you want to progress in the game, I suggest you focus on puzzles.' },
  { filePath: new URL('./assets/gameplay4.png', import.meta.url).href, description: 'Turn up the music if you want to feel more of the mystery as you stroll through the town!' }
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' }
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1tezw7OaLY8shGm6wYPN1Dezt7qCuCOjv', description: 'Download JAR File (must have Java 21 or greater installed)' }
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
        <p>
          Your brother has been missing for months, and the investigation has gone absolutely nowhere. 
          Since you've arrived home from college, you've taken it upon yourself to solve this mystery once and for all! 
          By talking to the townspeople about your brother, collecting pages from his notebook, and getting clues from around town and from the investigator, discover what truly happened to your brother!
        </p>
      </template>

      <template #instructions>
        <p>
          As the only one who is really concerned about your brother, your goal is to find out where he is and uncover what happened to him. 
          Make sure you use the journal and talk to NPCs to unlock more pages and clues!
        </p>
        <h4 style="margin-bottom: 0px">Controls:</h4>
        <ol>
          <li>TO MOVE: Use the arrow keys.</li>
          <li>TO TALK: Use the space key to talk to other characters.</li>
          <li>TO CHECK SIGNS: Use 'space' key when in contact with sign.</li>
          <li>TO OPEN JOURNAL: Use the 'j' key to open/close journal.</li>
          <li>TO FLIP JOURNAL PAGES: Use the arrow keys.</li>
          <li>TO SPRINT: Hold down 'shift' key.</li>
          <li>TO ESCAPE POP-UPs: Use 'esc' key.</li>
          <li>You don't need to keep these in mind; we have a HOW TO PLAY section in the game.</li>
        </ol>
      </template>

      <template #notes>
        <p>When exiting a pop-up page, press escape and one of the arrow keys to exit the image.</p>
        <p>Keep an eye out for anything unusual around the map!</p>
        <h4>Help, I'm stuck on the part of the game with the crossword puzzle -- it's too hard!</h4>
        <p>
          While the crossword puzzle is intended to be challenging, we would not want to prevent you from progressing in the game if you truly cannot figure out the answers. 
          Click on the appropriate collapsible below for the answer to a few of the trickier questions:
        </p>

        <Collapsible title="5 letter word to describe an overwhelming feeling of fear and anxiety">
          <template #content>
            <p style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;">PANIC</p>
          </template>
        </Collapsible>

        <Collapsible title="10 letter term for exploring events that are beyond scientific reasoning" style="margin-top: 10px;">
          <template #content>
            <p style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;">PARANORMAL</p>
          </template>
        </Collapsible>

        <Collapsible title="8 letter word meaning a state of nervous uncertainty for what comes next" style="margin-top: 10px;">
          <template #content>
            <p style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;">SUSPENSE</p>
          </template>
        </Collapsible>

        <h4>Multiple Endings</h4>
        <p>
          There are two possible endings that you can get upon finishing the game based on the decisions you make while playing.
          One of the endings is very common, while the other ending requires you to make very specific decisions.
          It is very likely on your first playthrough that you will receive the "bad" ending.
          If you have already played through the game once and would like to know which decisions need to be made in order to get the "better" ending on a subsequent playthrough, click the collapsible below to see what you need to do:
        </p>

        <Collapsible title='How to get the "better" ending'>
          <template #content>
            <p style="padding-left:5px;margin-bottom: 8px;margin-top: 8px;">You must make the following choices while playing the game:</p>
            <ul>
              <li>Do NOT tell your mom what you are doing when she asks (you have to explicitly tell her that you won't tell her)</li>
              <li>Do NOT help Camila with her crossword puzzle (you have to explicitly refuse)</li>
              <li>After helping the butcher with his meat scale puzzle, keep pushing the butcher for more info until he croaks</li>
              <li>Do NOT help the little girl save the Mad Hatter in the alleyway (you have to explicitly refuse)</li>
            </ul>
          </template>
        </Collapsible>
      </template>
    </Project>
  </div>
</template>
