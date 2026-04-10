<template>
  <!-- Hero Section: Scroll-driven cinematic frame animation -->
  <section id="home" ref="heroSection" class="hero-scroll-container">
    <!-- Sticky canvas viewport -->
    <div class="hero-sticky">
      <!-- Canvas renders the frame sequence -->
      <canvas ref="heroCanvas" class="hero-canvas" />

      <!-- Persistent dark gradient overlays -->
      <div class="hero-overlay-top" />
      <div class="hero-overlay-bottom" />
      <div class="hero-overlay-sides" />

      <!-- Hero text content — fades out after scroll begins -->
      <div class="hero-content" :style="{ opacity: contentOpacity }">
        <!-- Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100, duration: 600 } }"
          class="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8"
        >
          <span class="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
            New
          </span>
          <span class="text-white/80 text-xs font-body pr-3">
            Introducing AI-powered truck fleet web design.
          </span>
        </div>

        <!-- Heading -->
        <h1
          class="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-4px] mb-6"
        >
          <BlurText
            text="The Fleet Website Your Brand Deserves"
            :by-word="true"
            :delay="100"
            :start-delay="200"
          />
        </h1>

        <!-- Subtext -->
        <p
          v-motion
          :initial="{ filter: 'blur(10px)', opacity: 0, y: 20 }"
          :enter="{
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: { delay: 800, duration: 600 },
          }"
          class="text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-lg mb-8"
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is fleet web design, wildly reimagined.
        </p>

        <!-- CTA Buttons -->
        <div
          v-motion
          :initial="{ filter: 'blur(10px)', opacity: 0, y: 20 }"
          :enter="{
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: { delay: 1100, duration: 600 },
          }"
          class="flex items-center gap-4"
        >
          <a
            href="#contact"
            class="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Get Started
            <ArrowUpRight :size="16" />
          </a>
          <a
            href="#work"
            class="flex items-center gap-2 text-white/70 hover:text-white text-sm font-body transition-colors"
          >
            <div
              class="w-8 h-8 rounded-full liquid-glass-strong flex items-center justify-center"
            >
              <Play :size="12" fill="white" class="ml-0.5" />
            </div>
            Watch the Film
          </a>
        </div>
      </div>

      <!-- Scroll progress indicator -->
      <div class="scroll-hint" :style="{ opacity: scrollHintOpacity }">
        <div class="scroll-hint-line" />
        <span class="scroll-hint-text font-body">Scroll to explore</span>
      </div>

      <!-- Chapter labels that appear during scroll -->
      <div
        v-for="(chapter, idx) in chapters"
        :key="idx"
        class="chapter-label font-body"
        :style="{
          opacity: activeChapter === idx ? chapterLabelOpacity : 0,
          transform: `translateY(${activeChapter === idx ? '0px' : '12px'})`,
        }"
      >
        <span class="chapter-number">{{ String(idx + 1).padStart(2, '0') }}</span>
        <span class="chapter-title">{{ chapter }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { ArrowUpRight, Play } from 'lucide-vue-next'

// ─── Sequence configuration ───────────────────────────────────────────────────
const SEQUENCES = [
  { folder: '001', count: 151 },
  { folder: '002', count: 240 },
  { folder: '003', count: 240 },
  { folder: '004', count: 240 },
  { folder: '005', count: 240 },
]

const chapters = [
  'Power Unleashed',
  'Precision Engineered',
  'Built to Dominate',
  'The Road Ahead',
  'Your Brand. Elevated.',
]

// Pixels of scroll per frame (lower = faster animation)
const SCROLL_PER_FRAME = 8

// Total frames across all sequences
const totalFrames = SEQUENCES.reduce((sum, s) => sum + s.count, 0)

// Total scroll height for the section
const scrollHeight = computed(() => totalFrames * SCROLL_PER_FRAME + window.innerHeight)

// ─── Refs ─────────────────────────────────────────────────────────────────────
const heroSection = ref<HTMLElement | null>(null)
const heroCanvas = ref<HTMLCanvasElement | null>(null)

const contentOpacity = ref(1)
const scrollHintOpacity = ref(1)
const chapterLabelOpacity = ref(0)
const activeChapter = ref(-1)

// ─── Image cache ──────────────────────────────────────────────────────────────
// Flat array of all image objects (lazy loaded)
const imageCache: Array<HTMLImageElement | null> = new Array(totalFrames).fill(null)
let imagesLoaded = 0

// Build a flat frame index → { folder, frameNum }
function getFramePath(globalIndex: number): string {
  let remaining = globalIndex
  for (const seq of SEQUENCES) {
    if (remaining < seq.count) {
      const num = String(remaining + 1).padStart(3, '0')
      return `/assets/images/hero-section/${seq.folder}/ezgif-frame-${num}.jpg`
    }
    remaining -= seq.count
  }
  // fallback to last frame
  const lastSeq = SEQUENCES[SEQUENCES.length - 1]
  return `/assets/images/hero-section/${lastSeq.folder}/ezgif-frame-${String(lastSeq.count).padStart(3, '0')}.jpg`
}

// ─── Canvas rendering ─────────────────────────────────────────────────────────
let currentFrame = 0
let ctx: CanvasRenderingContext2D | null = null
let rafId: number | null = null

function renderFrame(index: number) {
  const canvas = heroCanvas.value
  if (!canvas || !ctx) return

  const img = imageCache[index]
  if (!img || !img.complete) return

  const cw = canvas.width
  const ch = canvas.height
  const iw = img.naturalWidth
  const ih = img.naturalHeight

  // Cover fit: scale to fill canvas
  const scale = Math.max(cw / iw, ch / ih)
  const sw = iw * scale
  const sh = ih * scale
  const sx = (cw - sw) / 2
  const sy = (ch - sh) / 2

  ctx.clearRect(0, 0, cw, ch)
  ctx.drawImage(img, sx, sy, sw, sh)
}

// ─── Preloading ───────────────────────────────────────────────────────────────
function preloadFrames() {
  // Load frame 0 instantly for immediate display
  loadFrame(0, () => renderFrame(0))

  // Then load the rest in batches
  const BATCH_SIZE = 10
  let batchStart = 1

  function loadBatch() {
    const end = Math.min(batchStart + BATCH_SIZE, totalFrames)
    let batchDone = 0
    const batchCount = end - batchStart

    if (batchCount === 0) return

    for (let i = batchStart; i < end; i++) {
      loadFrame(i, () => {
        batchDone++
        if (batchDone === batchCount) {
          batchStart = end
          if (batchStart < totalFrames) {
            requestAnimationFrame(loadBatch)
          }
        }
      })
    }
  }

  requestAnimationFrame(loadBatch)
}

function loadFrame(index: number, onLoad?: () => void) {
  if (imageCache[index]) {
    onLoad?.()
    return
  }
  const img = new Image()
  img.onload = () => {
    imageCache[index] = img
    imagesLoaded++
    onLoad?.()
  }
  img.onerror = () => {
    imageCache[index] = img // mark as attempted even on error
  }
  img.src = getFramePath(index)
  imageCache[index] = img
}

// ─── Scroll handler ───────────────────────────────────────────────────────────
function onScroll() {
  const section = heroSection.value
  if (!section) return

  const rect = section.getBoundingClientRect()
  const scrolled = -rect.top // how far we've scrolled into the section
  const totalScroll = rect.height - window.innerHeight

  if (scrolled <= 0) {
    // Before section — show initial frame and full content
    contentOpacity.value = 1
    scrollHintOpacity.value = 1
    chapterLabelOpacity.value = 0
    activeChapter.value = -1
    setFrame(0)
    return
  }

  if (scrolled >= totalScroll) {
    // Past section — show last frame
    contentOpacity.value = 0
    scrollHintOpacity.value = 0
    setFrame(totalFrames - 1)
    return
  }

  const progress = scrolled / totalScroll

  // Calculate target frame
  const targetFrame = Math.min(
    Math.floor((scrolled / SCROLL_PER_FRAME)),
    totalFrames - 1
  )

  // Fade out hero content in first 10% of scroll
  const fadeOutEnd = 0.08
  if (progress < fadeOutEnd) {
    contentOpacity.value = Math.max(0, 1 - progress / fadeOutEnd)
    scrollHintOpacity.value = Math.max(0, 1 - progress / 0.04)
  } else {
    contentOpacity.value = 0
    scrollHintOpacity.value = 0
  }

  // Chapter labels: appear in the middle of each sequence
  let frameAccum = 0
  for (let i = 0; i < SEQUENCES.length; i++) {
    const seqStart = frameAccum
    const seqEnd = frameAccum + SEQUENCES[i].count
    if (targetFrame >= seqStart && targetFrame < seqEnd) {
      const seqProgress = (targetFrame - seqStart) / SEQUENCES[i].count
      if (seqProgress > 0.2 && seqProgress < 0.85) {
        activeChapter.value = i
        // Fade in/out within the window
        const t = (seqProgress - 0.2) / 0.65
        const fade = Math.sin(t * Math.PI) // smooth bell curve
        chapterLabelOpacity.value = Math.max(0, Math.min(1, fade))
      } else {
        if (activeChapter.value === i) {
          chapterLabelOpacity.value = 0
        }
      }
      break
    }
    frameAccum = seqEnd
  }

  setFrame(targetFrame)
}

function setFrame(index: number) {
  if (index === currentFrame && imageCache[index]?.complete) return

  // Find nearest loaded frame if target isn't ready
  let frame = index
  if (!imageCache[frame] || !imageCache[frame]!.complete) {
    // Search nearby frames
    for (let delta = 1; delta < 20; delta++) {
      const prev = frame - delta
      if (prev >= 0 && imageCache[prev]?.complete) {
        frame = prev
        break
      }
    }
  }

  if (frame !== currentFrame) {
    currentFrame = frame
    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(() => renderFrame(frame))
  }
}

// ─── Canvas resize ────────────────────────────────────────────────────────────
function resizeCanvas() {
  const canvas = heroCanvas.value
  if (!canvas) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  renderFrame(currentFrame)
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────
onMounted(() => {
  const canvas = heroCanvas.value
  if (canvas) {
    ctx = canvas.getContext('2d')
    resizeCanvas()
  }

  // Set section height dynamically
  if (heroSection.value) {
    heroSection.value.style.height = `${totalFrames * SCROLL_PER_FRAME + window.innerHeight}px`
  }

  preloadFrames()

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', resizeCanvas, { passive: true })

  // Initial scroll state evaluation
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', resizeCanvas)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.hero-scroll-container {
  position: relative;
  width: 100%;
  /* height is set dynamically in JS */
}

.hero-sticky {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Top gradient: room for navbar */
.hero-overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

/* Bottom gradient: blend into page */
.hero-overlay-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 280px;
  background: linear-gradient(to top, #000 0%, transparent 100%);
  z-index: 2;
  pointer-events: none;
}

/* Side vignette */
.hero-overlay-sides {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.45) 100%
  );
  z-index: 2;
  pointer-events: none;
}

/* Hero text content */
.hero-content {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 150px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  transition: opacity 0.1s ease;
  pointer-events: none;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: opacity 0.3s ease;
}

.scroll-hint-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6));
  animation: scroll-hint-pulse 2s ease-in-out infinite;
}

@keyframes scroll-hint-pulse {
  0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

.scroll-hint-text {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

/* Chapter labels */
.chapter-label {
  position: absolute;
  bottom: 80px;
  left: 56px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  pointer-events: none;
}

.chapter-number {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
}

.chapter-title {
  font-size: 1.1rem;
  font-weight: 400;
  font-style: italic;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.02em;
}
</style>
