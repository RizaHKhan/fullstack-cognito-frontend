<script setup lang="ts">
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { signOut } from 'aws-amplify/auth'

const router = useRouter()

const logout = async () => {
  console.log('Logging out')
  await signOut()
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-3">
    <header>
      <div class="flex flex-col justify-start h-full">
        <nav class="flex flex-row gap-2 justify-end text-gray-500">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
          <RouterLink to="/signup">SignUp</RouterLink>
          <button @click="logout">Log out</button>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped></style>
