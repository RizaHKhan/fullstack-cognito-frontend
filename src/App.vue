<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-3">
    <div class="flex flex-col justify-start h-full">
      <nav class="flex flex-row gap-2 justify-end text-gray-500">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
      <RouterView />
    </div>

    <header></header>
  </div>
</template>

<style scoped></style>
