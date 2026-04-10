<template>
  <video
    ref="videoEl"
    v-bind="$attrs"
    autoplay
    loop
    muted
    playsinline
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  src: string
}>()

const videoEl = ref<HTMLVideoElement | null>(null)
let hls: any = null

onMounted(async () => {
  if (!videoEl.value) return
  const Hls = (await import('hls.js')).default

  if (Hls.isSupported()) {
    hls = new Hls({ autoStartLoad: true, startLevel: -1 })
    hls.loadSource(props.src)
    hls.attachMedia(videoEl.value)
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoEl.value?.play().catch(() => {})
    })
  } else if (videoEl.value.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari native HLS
    videoEl.value.src = props.src
    videoEl.value.play().catch(() => {})
  }
})

onUnmounted(() => {
  hls?.destroy()
})
</script>
