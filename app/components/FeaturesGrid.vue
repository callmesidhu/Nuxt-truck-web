<template>
  <section id="work" class="py-24 px-6 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex flex-col items-center text-center mb-16"
      >
        <div class="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-5">
          Why Us
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-xl">
          <BlurText text="Why New Era is different." :by-word="true" :delay="100" />
        </h2>
      </div>

      <!-- 4-col grid -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="(feature, i) in features"
          :key="i"
          class="liquid-glass rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
        >
          <div class="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <component :is="feature.icon" :size="18" class="text-white" />
          </div>
          <div>
            <h3 class="text-white font-body font-medium text-sm mb-2">{{ feature.title }}</h3>
            <p class="text-white/60 font-body font-light text-xs leading-relaxed">{{ feature.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Settings, Truck, Shield } from 'lucide-vue-next'

const features = [
  {
    icon: Truck,
    title: 'Saudi-Built Excellence',
    body: 'Engineered and assembled in the Kingdom, our vehicles meet the highest international standards of quality and performance.',
  },
  {
    icon: Settings,
    title: 'Full Customisation',
    body: 'Every vehicle tailored to your specification — from powertrain options to interior finishes and fleet branding.',
  },
  {
    icon: Zap,
    title: 'Fleet Solutions',
    body: 'Dedicated fleet programs for government, logistics, and enterprise — with volume pricing and priority service.',
  },
  {
    icon: Shield,
    title: 'Desert-Grade Durability',
    body: 'Purpose-built for extreme heat, sand, and long-haul desert journeys. Reliability you can count on, anywhere.',
  },
]
</script>
