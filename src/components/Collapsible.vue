<template lang="pug">
  .root
    button.toggle-button(@click="toggleCollapsible") {{ toggleText }}
    .collapsible(v-if="!isCollapsed")
      slot(name="content")

</template>

<script>
export default {
  name: 'Navbar',
  components: {
  },
  data() {
    return {
      isCollapsed: true
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  created() {

  },
  computed: {
    toggleText() {
      return this.isCollapsed ? `> ${this.title}` : `˅ ${this.title}`
    }
  },
  methods: {
    toggleCollapsible() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style scoped>
.collapsible {
  padding-bottom: 2px;
  border: 1px solid black;
}

.toggle-button {
  width: 100%;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 0px;
}
</style>