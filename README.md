# nuxt-supabase Bridge support demo

## Build Setup

Clone `vue-supabase` and setup yarn link

```bash
git clone https://github.com/Strift/vue-supabase
cd vue-supabase
git checkout develop
yarn link
```

Clone `nuxt-supabase` and setup yarn link

```bash
git clone https://github.com/Strift/nuxt-supabase
cd nuxt-supabase
git checkout develop
yarn link
```

Clone this demo and use locally linked packages

```bash
git clone https://github.com/Strift/nuxt-supabase-bridge-example
cd nuxt-supabase-bridge-example
yarn
yarn link 'vue-supabase'
yarn link 'nuxt-supabase'
yarn dev
```

Related PR: https://github.com/supabase-community/nuxt-supabase/pull/15 