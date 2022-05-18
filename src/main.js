import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { createPinia } from 'pinia'
import {authSetup} from 'auth.'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')

window.addEventListener("load", authSetup);







































































































// Appl3s was here (version 3)