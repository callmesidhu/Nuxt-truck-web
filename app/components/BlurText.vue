<template>
  <span ref="wrapEl" :class="wrapClass">
    <span
      v-for="(segment, i) in segments"
      :key="i"
      class="blur-word inline-block"
      :style="{
        animationDelay: `${startDelay + i * delay}ms`,
        animationPlayState: visible ? 'running' : 'paused',
        opacity: visible ? undefined : 0,
      }"
    >{{ segment }}<template v-if="byWord && i < segments.length - 1">&nbsp;</template></span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  text: string
  byWord?: boolean
  delay?: number
  startDelay?: number
  class?: string
}>(), {
  byWord: true,
  delay: 100,
  startDelay: 0,
})

const wrapEl = ref<HTMLElement | null>(null)
const visible = ref(false)

const segments = computed(() =>
  props.byWord ? props.text.split(' ') : props.text.split('')
)

const wrapClass = computed(() => props.class || '')

let observer: IntersectionObserver | null = null

onMounted(() => {
  const target = wrapEl.value
  if (!target) { visible.value = true; return }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  observer.observe(target)
})

onUnmounted(() => observer?.disconnect())
</script>
