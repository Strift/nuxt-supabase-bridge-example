import { createClient } from '@supabase/supabase-js'
import type { SupabaseClientOptions } from '@supabase/supabase-js'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const supabaseUrl = '<%= options.supabaseUrl %>'
  const supabaseKey = '<%= options.supabaseKey %>'
  const supabaseOptions =
    '<%= options.supabaseOptions %>' as SupabaseClientOptions

  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions)

  nuxtApp.vueApp.provide('supabase', supabase)
  nuxtApp.provide('supabase', supabase)
})
