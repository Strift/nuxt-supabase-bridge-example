<template>
  <div>
    {{ user }}
  </div>
</template>

<script setup>
/* eslint-disable */
import { onMounted } from '#imports'
import { useSupabase, useSupabaseAuth } from 'nuxt-supabase/composables'
import { useNuxtApp } from '#imports'
  import { computed } from '#imports'

onMounted(() => {
  console.log('Mounted')
})

const supabase = useSupabase()

const auth = useSupabaseAuth()

const user = computed(() => auth.user())

</script>
