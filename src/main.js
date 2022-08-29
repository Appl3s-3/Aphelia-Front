import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import { auth_setup } from './scripts/auth'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

window.addEventListener("load", () => {console.log("Loaded"); auth_setup()})







































































































// Appl3s was here (version 3)