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
        <BlurText text="The road starts here." :by-word="true" :delay="100" />
      </h2>

      <!-- Subtext -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 600 } }"
        class="text-white/60 font-body font-light text-sm md:text-base max-w-lg mb-10 leading-relaxed"
      >
        Speak with a New Era specialist today. Configure your fleet, request a quote,
        or visit one of our showrooms across the Kingdom.
      </p>

      <!-- Buttons -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 500, duration: 600 } }"
        class="flex items-center gap-4 flex-wrap justify-center"
      >
        <a
          href="mailto:contact@newera.com.sa"
          class="btn-red rounded-full px-6 py-3 text-sm font-body font-medium text-white flex items-center gap-2"
        >
          Request a Quote
          <ArrowUpRight :size="16" />
        </a>
        <a
          href="#services"
          class="liquid-glass-strong text-white rounded-full px-6 py-3 text-sm font-body font-medium hover:scale-105 transition-all flex items-center gap-2"
        >
          View Models
        </a>
      </div>

      <!-- Footer bar -->
      <div class="mt-32 pt-8 border-t border-white/10 w-full max-w-5xl flex items-center justify-between flex-wrap gap-4">
        <p class="text-white/40 text-xs font-body">
          © 2026 New Era Automotive, Saudi Arabia. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-white/40 text-xs font-body hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" class="text-white/40 text-xs font-body hover:text-white/70 transition-colors">Terms</a>
          <a href="mailto:contact@newera.com.sa" class="text-white/40 text-xs font-body hover:text-white/70 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
</script>
