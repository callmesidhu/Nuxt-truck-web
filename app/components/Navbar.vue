<template>
  <!-- Fixed floating navbar -->
  <header class="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
    <nav
      class="liquid-glass rounded-full py-3 px-5 flex items-center justify-between max-w-6xl mx-auto"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5 flex-shrink-0">
        <img
          src="/logo-icon.png"
          alt="AlphaTech Trucks logo"
          class="h-9 w-9 object-contain"
          onerror="this.style.display='none'"
        />
        <span class="font-heading italic text-white text-lg leading-none">
          AlphaTech<br /><span class="text-white/60 text-sm not-italic font-body font-light">Trucks</span>
        </span>
      </NuxtLink>

      <!-- Center nav links (desktop) -->
      <div
        class="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1"
      >
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="px-3 py-2 text-sm font-medium text-white/90 font-body rounded-full transition-colors hover:bg-white/10"
        >
          {{ link.label }}
        </a>
        <!-- Get Started pill -->
        <a
          href="#contact"
          class="flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-body font-medium transition-opacity hover:opacity-90"
        >
          Get Started
          <ArrowUpRight :size="14" />
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-white/80 hover:text-white transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <Menu v-if="!mobileOpen" :size="22" />
        <X v-else :size="22" />
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <Transition name="fade-slide">
      <div
        v-if="mobileOpen"
        class="md:hidden mt-2 liquid-glass rounded-2xl px-4 py-4 max-w-6xl mx-auto flex flex-col gap-1"
      >
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="px-3 py-2.5 text-sm font-body text-white/90 hover:bg-white/10 rounded-full transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          class="mt-2 flex items-center justify-center gap-1 bg-white text-black rounded-full px-4 py-2 text-sm font-body font-medium"
          @click="mobileOpen = false"
        >
          Get Started
          <ArrowUpRight :size="14" />
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'

const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
