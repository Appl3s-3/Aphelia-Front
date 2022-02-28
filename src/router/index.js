import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Dashboard from '../views/Dashboard.vue'
import Items from '../views/Items.vue'
import Roles from '../views/Roles.vue'
import Loans from '../views/Loans.vue'
import Notifications from '../views/Notifications.vue'
import Settings from '../views/Settings.vue'

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
        },
        {
            path: '/items',
            name: 'items',
            component: Items
        },
        {
            path: '/roles',
            name: 'roles',
            component: Roles
        },
        {
            path: '/loans',
            name: 'loans',
            component: Loans
        },
        {
            path: '/notifications',
            name: 'notifications',
            component: Notifications
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        }
    ]
})

export default router