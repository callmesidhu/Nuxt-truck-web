// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
  ],
  googleFonts: {
    families: {
      'Instrument Serif': { ital: [0, 1] },
      'Barlow': [300, 400, 500, 600],
    },
    display: 'swap',
    download: false,
  },
  app: {
    head: {
      title: 'New Era — Premium Automotive Excellence from Saudi Arabia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'New Era is Saudi Arabia\'s premier automotive company — delivering power, precision, and unmatched performance. Engineered for those who refuse to settle.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
})
