// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      clerkSecretKey: process.env.NUXT_CLERK_SECRET_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  }
})
