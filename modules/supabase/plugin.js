import { createClient } from '@supabase/supabase-js'

export default function supabasePlugin ({ app, $config }, inject) {
  const { supabaseUrl, supabaseKey } = $config
  const supabase = createClient(supabaseUrl, supabaseKey)
  inject('supabase', supabase)
}
