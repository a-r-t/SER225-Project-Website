<template lang="pug">
.root
  .outer-container
    .header-image-container
      .header-container
        h1.header Welcome to the SER225 Project Website!
    .container
      .subcontainer
        h2.subheader(style="margin-top:0px") What is this site?
        .paragraph-container
          p This site proudly displays the projects made by students taking Quinnipiac University's SER225 course.
        h2.subheader What is SER225?
        .paragraph-container
          p SER225 is the (in)famous Intro to Software Development course. 
          p Students are put into assigned groups, given a base project, and learn how to use and apply Agile Methodology principles and values in order to develop the project further in their own desired direction.
            | Traditionally, the base project given out is a game of some kind (platformer, RPG, etc.).
            | The teams of students go through a phase where the plan out the direction they want to take the game in, and strategize how they are going to make the most out of their Sprints to get all the highest priority work done.
          p During this course, students learn how to put all of the programming fundamentals they learned in previous courses into practice.
            | They also improve on their communication, problem-solving, time management, and version control skills.
            | Finally, the "workplace simulation" that is put into place during this course gives students familiarity with how work gets done in the industry,
            | which not only prepares them for internships and jobs, but also gets them excited for their futures and builds their confidence.
        h2.subheader How To Use This Site
        .paragraph-container
          p The 
            router-link(to="/teams") Teams
            |  page will allow you to look at all of the projects done by each team of students in a given semester.
          p There is also a 
            router-link(to="/search") Search
            |  page will allow you to look up a specific student's or team's project quickly in the case that you are having difficulty finding it.
        h2.subheader What does the base project look like?
        .paragraph-container
          p The base project changes every so often, but most recently the students were given the options between two different games to start with -- a platformer or a top-down styled RPG.
          h3 Platformer
          a.github-link(href="https://github.com/a-r-t/SER-225-Game-Platformer") GitHub Repo
          .video
            video(:src="require('../assets/platformer-gameplay.mp4')" controls preload="metadata")
          h3 RPG
          a.github-link(href="https://github.com/a-r-t/SER-225-Game-RPG") GitHub Repo
          .video
            video(:src="require('../assets/rpg-gameplay.mp4')" controls preload="metadata")
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.outer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #5D7A8C;
}

.container {
  max-width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  border-radius: 10px;  
  background: #99B4BF;
  border: 2px solid #253C59;
  padding-bottom: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: #253C59;
}

a:active {
  color: #8a5f11;
}

.github-link {
  margin-bottom: 10px;
}

.video {
  margin-top: 10px;
}

video {
  max-width: 100%;
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid #253C59;
}

.asset-description {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-top: 5px;
  font-style: italic;
  margin-bottom: 30px;
}

.header-container {
  background: #253C59;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: fit-content;

}

.header {
  font-size: 65px;
  font-family: 'Arcade';
  text-align: center;
  margin-bottom: 0px;
  margin-top: 10px;
  color: white;
}

.subheader {
  font-size: 25px
}

.header-image-container {
  width: 100%;
  background-image: url('~@/assets/header-background.png');
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #253C59;
}
</style>
