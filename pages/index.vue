<template>
  <div>
    <input v-model="email" type="email">
    <input v-model="password" type="password">
    <button @click="signUp">
      Sign Up
    </button>
    <button @click="signIn">
      Sign In
    </button>
    <button @click="signOut">
      Sign Out
    </button>
    <div>Composition API</div>
    <CompositionApiExample />
    <div>Options API</div>
    <OptionsApiExample />
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: 'example-password'
  }),
  mounted () {
    this.email = this.$config.defaultEmail
  },
  methods: {
    async signUp () {
      console.log('Sign Up')
      await this.$supabase.auth.signUp({
        email: this.email,
        password: this.password
      })
    },
    async signIn () {
      console.log('Sign In')
      await this.$supabase.auth.signIn({
        email: this.email,
        password: this.password
      })
    },
    async signOut () {
      console.log('Sign Out')
      await this.$supabase.auth.signOut()
    }
  }
}
</script>
