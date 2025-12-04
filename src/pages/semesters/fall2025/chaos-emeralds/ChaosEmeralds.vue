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

const teamName = ref('Chaos Emeralds')
const repoUrl = ref('https://github.com/ThisIsHP64/hive-heroes')
const developerNames = ref<string[]>([
  'Aditi Baghel',
  'Hunter Pageau',
  'MD Fayed Bin Salim',
  'Philip Kwiatkowski',
  'Wilson Chen'
])
const managerNames = ref<string[]>([
  'Ryan Seely'
])
const heroScreenshotFilePath = ref(new URL('./assets/Title.png', import.meta.url).href)
const genre = ref('RPG')
const screenshots = ref<Screenshot[]>([
  { filePath: new URL('./assets/Queen_Bee.png', import.meta.url).href, description: 'Talking to the queen bee' },
  { filePath: new URL('./assets/Regions.png', import.meta.url).href, description: 'Many regions to explore!' },
  { filePath: new URL('./assets/Extracting_Nectar.png', import.meta.url).href, description: 'You are a bee, you need your nectar!!!' },
  { filePath: new URL('./assets/Attacking_Enemies.png', import.meta.url).href, description: 'Sting the enemies!' },
  { filePath: new URL('./assets/Credits.png', import.meta.url).href, description: 'Credits' },
])
const videos = ref<Video[]>([
  { filePath: new URL('./assets/game-video.mp4', import.meta.url).href, description: 'Full Game Playthrough' },
])
const downloads = ref<Download[]>([
  { url: 'https://drive.google.com/uc?export=download&id=1P8koziBWA2bSKAh_3CHb9fcHFSOpk8Mi', description: 'Download JAR File (must have Java 23 or greater installed)' }
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
          The Queen Bee has chosen you for a sacred mission. 
          Venture beyond the hive, defeat the enemies that threaten your world, and collect nectar to restore your kingdom!
        </p>
      </template>

      <template #instructions>
        <h4>Menu Navigation</h4>
        <ul>
          <li>Use W (up) and S (down) to navigate the menu.</li>
          <li>The option you are currently on is highlighted in blue.</li>
          <li>Press Space to trigger your current selection.</li>
        </ul>

        <h4>In-game Navigation</h4>
        <p><strong>Controls</strong></p>
        <ul>
          <li>WASD - General Movement Keys</li>
          <li>Space - Attack (Stinger Strike / Projectiles) and Extract/Deposit Nectar</li>
          <li>Shift - Sprint</li>
          <li>E - Interact (NPCs, Doors, Pickups, Powerups, Tunics, Conversations)</li>
          <li>1 - Activate Speed Powerup</li>
          <li>3/4 - Equip Fire/Ice Tunic (respectively)</li>
          <li>P - Pause/Resume the Game</li>
        </ul>

        <h4>Progression & Enemies</h4>

        <ul>
          <li>
            <strong>Grasslands (Starting Area)</strong>
            <ul>
              <li>Learn movement, combat, and nectar collecting.</li>
              <li>Enemies: Spiders</li>
              <li>Progression through the Grasslands unlocks The Maze.</li>
            </ul>
          </li>

          <li>
            <strong>The Maze (Key Item & Easter Egg Item)</strong>
            <ul>
              <li>Navigate its twists to reach the Red Tunic.</li>
              <li>Red Tunic Ability: Protects you from Fire Rain in the Volcano Region.</li>
            </ul>
          </li>

          <li>
            <strong>Volcano Region (Unlocked after Level 2)</strong>
            <ul>
              <li>The Red Tunic allows you to survive the heat and falling fire.</li>
              <li>Enemies: Spiders, Bats, and Skulls</li>
            </ul>
          </li>

          <li>
            <strong>The Dungeon (Frost Tunic & Lore)</strong>
            <ul>
              <li>Dark, and full of secrets.</li>
              <li>Find the Blue Tunic here.</li>
              <li>Blue Tunic Ability: Required for surviving frost hazards.</li>
              <li>Interact with NPCs for storyline lore.</li>
            </ul>
          </li>

          <li>
            <strong>Frost Region (Chaos Emerald location)</strong>
            <ul>
              <li>Frozen terrain and powerful enemies.</li>
              <li>Enemies: Gremlins, Crabs, and Dragons.</li>
              <li>Collect the Emerald Nectar Flower here.</li>
              <li>Final Mission: With the Chaos Emerald in your possession, return to the Hive.</li>
            </ul>
          </li>

          <li>
            <strong>Final Boss</strong>
            <ul>
              <li>Face the Final Boss and uncover the truth behind the Queen's intentions.</li>
            </ul>
          </li>
        </ul>
      </template>

      <template #notes>
        <h4>Easter Egg</h4>
        <ul>
          <li>There is a small Easter Egg item hidden in The Maze.</li>
          <li>
            Trigger: The player must collect the special ring item in the Maze.
          </li>
          <li>
            Behavior: 10 seconds after entering the Volcano Region, the ring changes enemy behavior and an event triggers.
          </li>
          <li>
            Spawn the NPC: Appears in the Volcano map, tracks the player's movement and gets destroyed when the ring is destroyed.
          </li>
          <li>
            Ending: Player must press E at the volcano during the event to destroy the ring.
          </li>
        </ul>

        <h4>Tunics</h4>
        <ul>
          <li>You must equip the Red Tunic for the Volcano Region and the Blue Tunic for the Frost Region to counter the potential precarious weather.</li>
          <li>If tunic switching glitches, press the number key again to fix it.</li>
          <li>
            After changing areas with a tunic on, the bee's sprite may be reset to the default yellow one, but the effect lingers. To fix this, simply swap the respective key twice to reactivate the tunic and reshow the bee.
          </li>
        </ul>

        <h4>NPCs/Enemies</h4>
        <ul>
          <li>NPCs in the Dungeon provide extra lore but are optional.</li>
          <li>Some enemies may spawn or get stuck in impassable terrain; walk away and return to reset them.</li>
          <li>The NPCs (Queen and enemies) are atmosphere-based, meaning sometimes you will get stuck in a horde without any option but to fight.</li>
          <li>
            After you collect a set amount of nectar, a violent horde will spawn and chase you until you die. Make sure to conserve your stamina and prepare to fight when that occurs.
          </li>
        </ul>

        <h4>General</h4>
        <ul>
          <li>The powerups and their effects do NOT carry over when switching maps.</li>
          <li>There is music and sound effects integrated into the game, so make sure to have your audio on.</li>
          <li>
            After completing the game and returning to the menu screen, you will not be able to re-enter via the “Play” button. You can only reset the game by running it again.
          </li>
          <li>
            To review the guide on how to play, go to the Queen Bee or Walrus NPC in the Hive.
          </li>
          <li>You can regenerate your stamina by standing still and resting.</li>
          <li>Leveling up will upgrade your base stats and restore them to their new maximum values.</li>
          <li>
            As you traverse the grass map, more and more flowers will spawn, from which you can collect nectar.
          </li>
          <li>Tree trunks and trees are NOT passable, so you will have to go around them.</li>
          <li>
            The weather is based on a time system. Also, if it is raining in the grass map, it will be precipitating in the snow and volcano regions as well. Use this information to your advantage.
          </li>
        </ul>

        <h4>System Specs Advantage</h4>
        <ul>
          <li>
            How many frames of attack and extracting nectar is based off your laptop's performance. If the refresh rate on your device is higher, you will be able to get more damage off and extract nectar more efficiently compared to a less equipped one.
          </li>
        </ul>

        <h4>Bugs</h4>
        <ul>
          <li>
            After you die (in-game), your nectar is set to 0, but you retain your XP.
          </li>
          <li>
            Weird Bug: After you die (in-game), press exit, and play again; your stamina is set to almost zero. Even weirder, your nectar is retained.
          </li>
        </ul>

      </template>
    </Project>
  </div>
</template>
