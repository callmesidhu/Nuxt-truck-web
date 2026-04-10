<template>
  <!-- Standard fixed navbar – New Era Automotive -->
  <header class="navbar-root" :class="{ 'navbar-scrolled': scrolled }">
    <!-- Red accent line top -->
    <div class="navbar-red-line" />

    <nav class="navbar-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar-logo">
        <div class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="4" fill="#E31E24"/>
            <path d="M6 20L10 8H13L16 16L19 8H22L18 20H15L12 12L9 20H6Z" fill="white"/>
          </svg>
        </div>
        <div class="logo-text">
          <span class="logo-name">NEW ERA</span>
          <span class="logo-sub">AUTOMOTIVE · KSA</span>
        </div>
      </NuxtLink>

      <!-- Desktop nav links -->
      <nav class="navbar-links hidden md:flex">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="nav-link"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a href="tel:+966800NEWAERA" class="nav-phone">
          <Phone :size="14" />
          <span>800-NEW-ERA</span>
        </a>
        <a href="#contact" class="nav-cta">
          Request a Quote
          <ArrowUpRight :size="14" />
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="mobile-menu-btn md:hidden"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
      >
        <span class="hamburger-bar" :class="{ 'bar-top-open': mobileOpen }" />
        <span class="hamburger-bar bar-mid" :class="{ 'bar-mid-open': mobileOpen }" />
        <span class="hamburger-bar" :class="{ 'bar-bot-open': mobileOpen }" />
      </button>
    </nav>

    <!-- Mobile drawer -->
    <Transition name="drawer">
      <div v-if="mobileOpen" class="mobile-drawer md:hidden">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="mobile-link"
          @click="mobileOpen = false"
        >
          {{ link.label }}
          <ChevronRight :size="14" class="text-[#E31E24]" />
        </a>
        <div class="mobile-divider" />
        <a href="tel:+966800NEWAERA" class="mobile-link mobile-link-phone">
          <Phone :size="14" /> 800-NEW-ERA
        </a>
        <a
          href="#contact"
          class="mobile-cta"
          @click="mobileOpen = false"
        >
          Request a Quote
          <ArrowUpRight :size="14" />
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, Phone, ChevronRight } from 'lucide-vue-next'

const mobileOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'Models',    href: '#services' },
  { label: 'Fleet',     href: '#work' },
  { label: 'About',     href: '#process' },
  { label: 'Our Stats', href: '#pricing' },
]
</script>

<style scoped>
/* ── Root ── */
.navbar-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(11, 11, 11, 0.5);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.navbar-scrolled {
  background: rgba(11, 11, 11, 0.5);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
}

/* Red top accent */
.navbar-red-line {
  height: 3px;
  background: linear-gradient(90deg, #E31E24 0%, #FF3B3F 50%, #E31E24 100%);
}

/* ── Inner layout ── */
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 64px;
  gap: 2rem;
}

/* ── Logo ── */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-icon {
  display: flex;
  align-items: center;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.logo-name {
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  color: #fff;
}
.logo-sub {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  color: #BFBFBF;
  margin-top: 2px;
}

/* ── Desktop nav links ── */
.navbar-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}
.nav-link {
  font-family: 'Barlow', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  padding: 0.5rem 0.85rem;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #E31E24;
  border-radius: 2px;
  transition: width 0.25s ease;
}
.nav-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
}
.nav-link:hover::after {
  width: 60%;
}

/* ── Phone ── */
.nav-phone {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Barlow', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #BFBFBF;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.nav-phone:hover { color: #fff; }

/* ── CTA Button ── */
.nav-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.55rem 1.1rem;
  background: #E31E24;
  color: #fff;
  font-family: 'Barlow', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s ease, transform 0.15s ease;
  white-space: nowrap;
}
.nav-cta:hover {
  background: #FF3B3F;
  transform: translateY(-1px);
}

/* ── Mobile hamburger ── */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
}
.hamburger-bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}
.bar-top-open  { transform: translateY(7px) rotate(45deg); }
.bar-mid-open  { opacity: 0; transform: scaleX(0); }
.bar-bot-open  { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile drawer ── */
.mobile-drawer {
  background: #0B0B0B;
  border-top: 1px solid rgba(227, 30, 36, 0.3);
  padding: 0.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
}
.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0;
  font-family: 'Barlow', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.2s;
}
.mobile-link:hover { color: #fff; }
.mobile-link-phone {
  gap: 8px;
  justify-content: flex-start;
  color: #BFBFBF;
  font-size: 0.8rem;
}
.mobile-divider {
  height: 1px;
  background: rgba(227, 30, 36, 0.25);
  margin: 0.75rem 0;
}
.mobile-cta {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 0.75rem;
  background: #E31E24;
  color: #fff;
  font-family: 'Barlow', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s;
}
.mobile-cta:hover { background: #FF3B3F; }

/* ── Drawer animation ── */
.drawer-enter-active, .drawer-leave-active {
  transition: max-height 0.3s ease, opacity 0.25s ease;
  overflow: hidden;
  max-height: 500px;
}
.drawer-enter-from, .drawer-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
