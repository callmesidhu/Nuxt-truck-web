<template>
  <section id="contact" class="relative overflow-hidden">
    <!-- HLS video background -->
    <HlsVideo
      src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
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
    <div class="absolute inset-0 bg-black/50 z-[1]" />

    <!-- CTA Content -->
    <div class="relative z-10 flex flex-col items-center text-center px-6 pt-40 pb-16">
      <!-- Heading -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85] max-w-3xl mb-6"
      >
        <BlurText text="Your next website starts here." :by-word="true" :delay="100" />
      </h2>

      <!-- Subtext -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        class="text-white/60 font-body font-light text-sm md:text-base max-w-lg mb-10 leading-relaxed"
      >
        Book a free strategy call. See what AI-powered design can do for your fleet business.
        No commitment, no pressure. Just possibilities.
      </p>

      <!-- Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
        class="flex items-center gap-4 flex-wrap justify-center"
      >
        <a
          href="mailto:hello@alphatech.trucks"
          class="liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform"
        >
          Book a Call
          <ArrowUpRight :size="16" />
        </a>
        <a
          href="#pricing"
          class="bg-white text-black rounded-full px-6 py-3 text-sm font-body font-medium hover:opacity-90 hover:scale-105 transition-all"
        >
          View Pricing
        </a>
      </div>

      <!-- Footer bar -->
      <div class="mt-32 pt-8 border-t border-white/10 w-full max-w-5xl flex items-center justify-between flex-wrap gap-4">
        <p class="text-white/40 text-xs font-body">
          © 2026 AlphaTech Trucks. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-white/40 text-xs font-body hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" class="text-white/40 text-xs font-body hover:text-white/70 transition-colors">Terms</a>
          <a href="mailto:hello@alphatech.trucks" class="text-white/40 text-xs font-body hover:text-white/70 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>
