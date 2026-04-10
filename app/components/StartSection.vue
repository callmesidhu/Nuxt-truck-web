<template>
  <!-- Start / How It Works section -->
  <section id="process" class="relative overflow-hidden" style="min-height: 600px">
    <!-- HLS video background -->
    <HlsVideo
      src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
      class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
    />

    <!-- top fade -->
    <div
      class="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
      style="height: 200px; background: linear-gradient(to bottom, black, transparent)"
    />
    <!-- bottom fade -->
    <div
      class="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
      style="height: 200px; background: linear-gradient(to top, black, transparent)"
    />

    <!-- overlay -->
    <div class="absolute inset-0 bg-black/40 z-[1]" />

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center text-center justify-center px-6 py-32"
      style="min-height: 600px"
    >
      <!-- Badge -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="liquid-glass rounded-full px-3.5 py-1.5 text-xs font-medium text-white font-body mb-6"
      >
        How It Works
      </div>

      <!-- Heading -->
      <h2
        class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl mb-6"
      >
        <BlurText
          text="You dream it. We ship it."
          :by-word="true"
          :delay="120"
          :start-delay="100"
        />
      </h2>

      <!-- Subtext -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
        class="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-10 leading-relaxed"
      >
        Share your fleet brand vision. Our AI handles the rest — wireframes, design, code, launch.
        All in days, not quarters.
      </p>

      <!-- CTA -->
      <a
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
        href="#contact"
        class="liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform"
      >
        Get Started
        <ArrowUpRight :size="16" />
      </a>

      <!-- Process steps -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 800, duration: 700 } }"
        class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl"
      >
        <div
          v-for="step in steps"
          :key="step.num"
          class="liquid-glass rounded-2xl p-6 text-left"
        >
          <div class="text-3xl font-heading italic text-white/30 mb-2">{{ step.num }}</div>
          <div class="text-white font-body font-medium text-sm mb-1">{{ step.title }}</div>
          <div class="text-white/50 font-body font-light text-xs leading-relaxed">
            {{ step.body }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    title: 'Brief Your Vision',
    body: 'Tell us about your fleet, brand, and goals. Our AI absorbs every detail instantly.',
  },
  {
    num: '02',
    title: 'AI Designs & Builds',
    body: 'Wireframes, design, copy, and code — generated and refined at machine speed.',
  },
  {
    num: '03',
    title: 'Launch & Grow',
    body: 'Go live in days. Your site auto-optimises as data flows in. Zero manual updates.',
  },
]
</script>
