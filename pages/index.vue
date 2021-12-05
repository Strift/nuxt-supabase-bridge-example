<template>
  <div>
    <button @click="signIn">
      Sign In
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: 'lau.cazanove@gmail.com',
    password: 'example-password'
  }),
  mounted () {
    this.$supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Setting server session')
      const response = await fetch('/api/auth/set-auth-cookie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event, session })
      })
      console.log(response)
    })
  },
  methods: {
    async signUp () {
      console.log('Sign Up')
      const { user, session, error } = await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
      console.log(user)
      console.log(session)
      console.log(error)
    },
    async signIn () {
      console.log('Sign In')
      const { user, session, error } = await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password
      })
      console.log(user)
      console.log(session)
      console.log(error)
    }
  }
}
</script>
