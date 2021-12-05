import path from 'path'
import { defineNuxtModule, addPluginTemplate, addServerMiddleware } from '@nuxt/kit'
import { SupabaseClientOptions } from '@supabase/supabase-js'
import { authHandler } from './server'

export type Options = {
  supabaseUrl: string
  supabaseKey: string
  supabaseOptions?: SupabaseClientOptions
}

export default defineNuxtModule<Options>({
  name: 'nuxt-supabase',
  configKey: 'supabase',
  setup (options, nuxt) {
    addPluginTemplate({
      src: path.resolve(__dirname, 'plugin.ts'),
      options
    })

    addServerMiddleware({
      path: '/api/auth',
      handler: authHandler(options)
    })
  }
})
