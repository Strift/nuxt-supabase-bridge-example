import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // bridge: false,

  components: true,

  publicRuntimeConfig: {
    defaultEmail: process.env.EMAIL_ADDRESS,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/ngrok',
    ['nuxt-supabase']
    // ['~/modules/supabase']
  ],

  supabase: {
    supabaseKey: process.env.SUPABASE_KEY,
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseOptions: {},
    auth: {
      onAuthStateChangeMutation: 'setUser'
      // onAuthStateChangeAction: 'onAuthStateChange'
    }
  }
})
