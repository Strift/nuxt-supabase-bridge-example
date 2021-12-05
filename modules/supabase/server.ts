import express from 'express'
import { createClient } from '@supabase/supabase-js'
import { Options } from '.'

export const authHandler = (options: Options) => {
  const app = express()
  const { supabaseUrl, supabaseKey, supabaseOptions } = options

  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions)

  app.use(express.json())
  app.use('/set-auth-cookie', (req, res) => {
    supabase.auth.api.setAuthCookie(req, res)
    return 'auth cookie set'
  })

  return app
}
