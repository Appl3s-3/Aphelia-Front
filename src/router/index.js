import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Landing from '../views/Landing.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/home',
            name: 'home',
            component: Dashboard
        }
    ]
})

export default router