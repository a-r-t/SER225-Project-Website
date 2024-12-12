<template lang="pug">
  .root
    button.toggle-button(@click="toggleCollapsible" :style="toggleButtonStyles") {{ toggleText }}
    .collapsible(v-if="!isCollapsed" :style="collapsibleStyles")
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
    },
    buttonBackgroundColor: {
      type: String,
      default: 'white'
    },
    buttonTextColor: {
      type: String,
      default: 'black'
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    borderColor: {
      type: String,
      default: 'black'
    },
    borderThickness: {
      type: String,
      default: '1px'
    }
  },
  created() {

  },
  computed: {
    toggleText() {
      return this.isCollapsed ? `> ${this.title}` : `˅ ${this.title}`
    },
    collapsibleStyles() {
      return {
        background: this.backgroundColor,
        border: `${this.borderThickness} solid ${this.borderColor} !important`
      }
    },
    toggleButtonStyles() {
      return {
        background: this.buttonBackgroundColor,
        color: this.buttonTextColor
      }
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
}

.toggle-button {
  width: 100%;
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 0px;
}
</style>