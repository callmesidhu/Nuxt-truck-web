<template>
  <!-- Hero Section -->
  <section
    id="home"
    class="relative overflow-visible"
    style="height: 1000px"
  >
    <!-- CloudFront MP4 background video -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute left-0 w-full h-auto object-contain z-0 pointer-events-none"
      style="top: 20%"
    >
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Subtle dark overlay -->
    <div class="absolute inset-0 bg-black/30 z-[1]" />

    <!-- Bottom gradient fade to black -->
    <div
      class="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
      style="height: 300px; background: linear-gradient(to bottom, transparent, black)"
    />

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center text-center px-6"
      style="padding-top: 150px"
    >
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

      <!-- Heading (BlurText component) -->
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

      <!-- Partners bar -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1400, duration: 700 } }"
        class="mt-auto pt-20 pb-8 flex flex-col items-center gap-4"
      >
        <span
          class="liquid-glass rounded-full px-3.5 py-1.5 text-xs font-body text-white/60"
        >
          Trusted by the teams behind
        </span>
        <div class="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
          <span
            v-for="brand in partners"
            :key="brand"
            class="text-2xl md:text-3xl font-heading italic text-white/80"
          >
            {{ brand }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight, Play } from 'lucide-vue-next'

const partners = ['Kenworth', 'Peterbilt', 'Freightliner', 'Volvo', 'Mack']
</script>
