import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})
  const authenticated = computed(() => Object.keys(user.value).length > 0)

  return { user, authenticated }
})
