<template>
  <section id="pricing" class="relative overflow-hidden" style="min-height: 500px">
    <!-- HLS video background (desaturated) -->
    <HlsVideo
      src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
      class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      style="filter: saturate(0)"
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

    <!-- Content -->
    <div class="relative z-10 flex items-center justify-center px-6 py-32" style="min-height: 500px">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="liquid-glass rounded-3xl p-12 md:p-16 w-full max-w-5xl"
      >
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center text-center"
          >
            <span class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-2">
              {{ stat.value }}
            </span>
            <span class="text-white/60 font-body font-light text-sm">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '10,000+', label: 'Vehicles Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '25+', label: 'Years of Excellence' },
  { value: '13', label: 'Saudi Regions Covered' },
]
</script>
