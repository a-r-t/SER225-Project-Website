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
      p Master the elements in this unforgettable platforming adventure!
      p Can you defeat all of the bosses and become the true elemental hero?
    template(v-slot:instructions)
      ul
        li Explore each level
        li Locate the 'Unknown Traveler' NPC 
        li Take down enemies along your path
        li Defeat end-level boss to progress
      
      h4 Controls:
      h5 Movement:
      ul
        li Jump -&gt; Up Arrow
        li Crouch -&gt; Down Arrow
        li Walk Left -&gt; Left Arrow
        li Walk Right -&gt; Right Arrow

      h5 Attacking:
      ul  
        li Use Ability -&gt; F Key
        li Cycle Abilities -&gt; R Key
      
      h5 Misc:
      ul 
        li Talk to NPC -&gt; Space Bar
        li Pause Game -&gt; P Key
    template(v-slot:notes)
      p This is an action platformer where you progress through levels unlocking abilities that are unique and interact with enemies differently. 
        | You unlock an ability after every level completion. 
        | Make sure you understand how to use all 5!
      p The 5 elements that are present in this game are Earth, Fire, Water, Electric, Air. 
        | Air counters electric, electric counters water, water counters fire, fire counters earth, and earth counters air. 
        | Pay attention to what element counters what, as it will be necessary when you face the final boss.
      p Don't be worried if you struggle fighting some of the bosses, this game is not meant to be super easy! 
        | Remember that there is no time limit, and you can take all the time that you need.
      p You will get softlocked if you walk off the edge of any of the maps! Make sure to avoid the edges.
      p Have fun!
</template>

<script>
import Project from '../../../../components/Project.vue'

export default {
  name: 'ElementalHero',
  components: {
    Project
  },
  data() {
    return {
      teamName: 'Elemental Hero',
      repoUrl: 'https://github.com/PeterZegarek/elemental-hero',
      developerNames: [
        'Hunter Yocum',
        'Lukas Martino',
        'Peter Zegarek',
        'Philip Nora'
      ],
      managerNames: [
        'Kevin Rodriguez'
      ],
      heroScreenshotFilePath: require('./assets/titlescreen.png'),
      genre: 'Platformer, Action',
      screenshots: [
        {
          filePath: require('./assets/FireMap.png'),
          description: 'Fire Level'
        },
        {
          filePath: require('./assets/ElectricMap.png'),
          description: 'Electric Level'
        },
        {
          filePath: require('./assets/KrakenBoss.png'),
          description: 'Kraken Boss Fight'
        }
      ],
      videos: [],
      downloads: [
        {
          url: 'https://drive.google.com/uc?export=download&id=1zejd4S-XPo8Pwd7S4JjmJcqcwR7qWQ7r',
          description: 'Download JAR File (must have Java 17 or greater installed)'
        }
      ]
    }
  }
}
</script>