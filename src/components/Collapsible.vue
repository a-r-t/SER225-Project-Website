<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  title: string
  buttonBackgroundColor?: string
  buttonTextColor?: string
  backgroundColor?: string
  borderColor?: string
  borderThickness?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonBackgroundColor: 'white',
  buttonTextColor: 'black',
  backgroundColor: 'transparent',
  borderColor: 'black',
  borderThickness: '1px'
})

const isCollapsed = ref(true)

const toggleText = computed(() =>
  isCollapsed.value ? `> ${props.title}` : `˅ ${props.title}`
)

const collapsibleStyles = computed(() => ({
  background: props.backgroundColor,
  border: `${props.borderThickness} solid ${props.borderColor} !important`
}))

const toggleButtonStyles = computed(() => ({
  background: props.buttonBackgroundColor,
  color: props.buttonTextColor
}))

const toggleCollapsible = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div class="root">
    <button
      class="toggle-button"
      @click="toggleCollapsible"
      :style="toggleButtonStyles"
    >
      {{ toggleText }}
    </button>

    <div
      v-if="!isCollapsed"
      class="collapsible"
      :style="collapsibleStyles"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

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