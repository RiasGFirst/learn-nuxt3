// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "nuxt-lucide-icons"],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' },
      ],
    },
  },
  lucide: {
    namePrefix: 'Icon'
  },
  runtimeConfig: {
    test: process.env.TEST
  }
})