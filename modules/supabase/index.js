import path from 'path'
import { authHandler } from './server'

export default function (moduleOptions) {
  const options = Object.assign({}, this.options.supabase, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js')
  })

  this.addServerMiddleware({
    path: '/api/auth',
    handler: authHandler(options)
  })

  this.nuxt.hook('app:mounted', () => {
    console.log('App mounted')
  })
}
