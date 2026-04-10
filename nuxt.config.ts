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
      title: 'AlphaTech Trucks — AI-Powered Fleet & Web Design',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'AlphaTech Trucks delivers premium AI-powered web design for the trucking & logistics industry. Stunning design. Blazing performance. Built by AI, refined by experts.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  css: ['~/assets/css/main.css'],
})
