import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Amplify } from 'aws-amplify'

import App from './App.vue'
import router from './router'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_zL7inxEtR',
      userPoolClientId: 'srh0kfc2srcntj8eb1fb347lp',
      identityPoolId: 'us-east-1:59ba4416-898d-4a96-a8ea-5e27f3225f68',
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
