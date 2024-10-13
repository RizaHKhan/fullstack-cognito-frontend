import { createRouter, createWebHistory } from 'vue-router'
import { fetchAuthSession } from 'aws-amplify/auth'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        auth: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        auth: false,
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
      meta: {
        auth: false,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const session = await fetchAuthSession()

  // if there is a meta tag and auth is false then let them through. Otherwise, check if they are authenticated.
  if (to.meta.auth === false) {
    next()
  } else {
    if (session?.tokens?.idToken) {
      next()
    } else {
      next({ name: 'home' })
    }
  }
})

export default router
