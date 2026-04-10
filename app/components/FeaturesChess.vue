<template>
  <section id="services" class="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
    <!-- Section header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="flex flex-col items-center text-center mb-20"
    >
      <div class="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-5">
        Capabilities
      </div>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl">
        <BlurText text="Pro features. Zero complexity." :by-word="true" :delay="100" />
      </h2>
    </div>

    <!-- Row 1: content left / image right -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24"
    >
      <!-- Content -->
      <div class="flex-1 flex flex-col items-start">
        <h3 class="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] mb-5">
          Designed to convert.<br />Built to perform.
        </h3>
        <p class="text-white/60 font-body font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
          Every pixel is intentional. Our AI studies what works across thousands of top fleet
          sites — then builds yours to outperform them all. From load speed to conversion flows,
          nothing is left to chance.
        </p>
        <a
          href="#contact"
          class="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform"
        >
          Learn more
          <ArrowUpRight :size="16" />
        </a>
      </div>

      <!-- GIF -->
      <div class="flex-1 w-full max-w-lg">
        <div class="liquid-glass rounded-2xl overflow-hidden w-full aspect-video">
          <img
            src="~/assets/feature-1.gif"
            alt="AI-powered design preview"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Row 2: image left / content right -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
    >
      <!-- Content -->
      <div class="flex-1 flex flex-col items-start">
        <h3 class="text-3xl md:text-4xl font-heading italic text-white leading-[0.9] mb-5">
          It gets smarter.<br />Automatically.
        </h3>
        <p class="text-white/60 font-body font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
          Your site evolves on its own. AI monitors every click, scroll, and conversion — then
          optimizes in real time. No manual updates. Ever. Just a site that gets better every day.
        </p>
        <a
          href="#contact"
          class="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform"
        >
          See how it works
          <ArrowUpRight :size="16" />
        </a>
      </div>

      <!-- GIF -->
      <div class="flex-1 w-full max-w-lg">
        <div class="liquid-glass rounded-2xl overflow-hidden w-full aspect-video">
          <img
            src="~/assets/feature-2.gif"
            alt="Smart optimization preview"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>
