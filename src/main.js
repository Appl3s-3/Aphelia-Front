import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import { authSetup } from './scripts/auth'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

window.addEventListener("load", auth_setup)







































































































// Appl3s was here (version 3)