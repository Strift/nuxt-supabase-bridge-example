import cookie from 'cookie'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, user) {
    console.log('onAuthStateChangeMutation')
    state.user = user
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, $supabase }) {
    if (req.headers.cookie) {
      // GoTrueApi needs `req.cookies` to be set
      req.cookies = cookie.parse(req.headers.cookie)
      const { user } = await $supabase.auth.api.getUserByCookie(req)
      commit('setUser', user)
    }
  },
  onAuthStateChange (_ctx, user) {
    console.log('onAuthStateChangeAction')
  }
}
