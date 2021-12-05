import express from 'express'
import bodyParser from 'body-parser'
import { createClient } from '@supabase/supabase-js'

export const authHandler = (options) => {
  const app = express()
  const { supabaseUrl, supabaseKey, supabaseOptions } = options

  const supabase = createClient(supabaseUrl, supabaseKey, supabaseOptions)

  app.use(express.json())
  app.use('/set-auth-cookie', (req, res) => {
    console.log('Body', req.body)
    supabase.auth.api.setAuthCookie(req, res)
    return 'auth cookie set'
  })

  return app
}
