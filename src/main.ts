import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Amplify } from 'aws-amplify'

import App from './App.vue'
import router from './router'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_8vOdgZR0y',
      userPoolClientId: '75mkgjb5dbo53s8oesdqts33t9',
      identityPoolId: 'us-east-1:c19e2558-cbad-4f7b-a144-d2b32eb2d792',
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: 'code',
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: false,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
})

console.log('amplify configured')
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
