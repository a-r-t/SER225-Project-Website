<template lang="pug">
.root
  .outer-container
    .container
      h1 Welcome!
      h2 What is this site?
      .paragraph-container
        p This site proudly displays the projects made by students taking Quinnipiac University's SER225 course.
      h2 What is SER225?
      .paragraph-container
        p SER225 is the (in)famous Intro to Software Development course. 
        p.indent Students are put into assigned groups, given a base project, and learn how to use and apply Agile Methodology principles and values in order to develop the project further in their own desired direction.
          | Traditionally, the base project given out is a game of some kind (platformer, RPG, etc.).
          | The teams of students go through a phase where the plan out the direction they want to take the game in, and strategize how they are going to make the most out of their Sprints to get all the highest priority work done.
        p.indent During this course, students learn how to put all of the programming fundamentals they learned in previous courses into practice.
          | They also improve on their communication, problem-solving, time management, and version control skills.
          | Finally, the "workplace simulation" that is put into place during this course gives students familiarity with how work gets done in the industry,
          | which not only prepares them for internships and jobs, but also gets them excited for their futures and builds their confidence.
      h2 How To Use This Site
      .paragraph-container
        p The 
          router-link(to="/teams") Teams
          |  page will allow you to look at all of the projects done by each team of students in a given semester.
        p There is also a 
          router-link(to="/search") Search
          |  page will allow you to look up a specific student's or team's project quickly in the case that you are having difficulty finding it.
      h2 What does the base project look like?
      .paragraph-container
        p The base project changes every so often, but most recently the students were given the options between two different games to start with -- a platformer or a top-down styled RPG.
        h3 Platformer

      
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
  justify-content: center;
  background: #5D7A8C;
}

.container {
  width: 60rem;
  margin-top: 28px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;  
  background: #99B4BF;
  border: 2px solid #253C59;
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paragraph-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.indent {
  text-indent: 50px;
}
</style>
