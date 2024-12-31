import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import Preset from '../preset'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue, {
  theme: {
    preset: Preset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})

router.beforeEach((_to, _from, next) => {
  if ('startViewTransition' in document) {
    document.startViewTransition(next)
  }
  else {
    next()
  }
})

app.use(router)
app.use(ToastService)
app.use(ConfirmationService)
app.mount('#app')
