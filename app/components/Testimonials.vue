<template>
  <section class="py-24 px-6 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex flex-col items-center text-center mb-16"
      >
        <div class="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-5">
          What They Say
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-xl">
          <BlurText text="Don't take our word for it." :by-word="true" :delay="100" />
        </h2>
      </div>

      <!-- 3-col grid -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="liquid-glass rounded-2xl p-8 flex flex-col gap-6 hover:scale-[1.01] transition-transform duration-300"
        >
          <!-- Quote marks -->
          <span class="text-white/20 font-heading text-5xl leading-none select-none">"</span>
          <p class="text-white/80 font-body font-light text-sm italic leading-relaxed flex-1">
            {{ t.quote }}
          </p>
          <div>
            <p class="text-white font-body font-medium text-sm">{{ t.name }}</p>
            <p class="text-white/50 font-body font-light text-xs mt-0.5">{{ t.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote:
      'A complete rebuild in five days. The result outperformed everything we\'d spent months building before.',
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
  },
  {
    quote:
      'Conversions up 4x. That\'s not a typo. The design just works differently when it\'s built on real data.',
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
  },
  {
    quote:
      'They didn\'t just design our site. They defined our brand. World-class doesn\'t begin to cover it.',
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
  },
]
</script>
