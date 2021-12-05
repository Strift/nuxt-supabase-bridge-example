import cookie from 'cookie'

export const state = () => ({

})

export const actions = {
  nuxtServerInit (ctx, { req, $supabase }) {
    if (req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie)
      console.log(cookies)
    }
  }
}
