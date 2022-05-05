import { createRouter, createWebHistory } from 'vue-router'

import Landing from '../views/Landing.vue'

import Dashboard from '../views/Dashboard.vue'
import Items from '../views/Items.vue'
import People from '../views/People.vue'

import Loans from '../views/Loans.vue'
import Notifications from '../views/Notifications.vue'

import Settings from '../views/Settings.vue'
import Help from '../views/Help.vue'
import About from '../views/About.vue'

import Scan from '../views/Scan.vue'

import { handle_code } from '../scripts/auth'

const routes = [
    { path: '/',              name: 'landing',       component: Landing       },

    { path: '/home',          name: 'home',          component: Dashboard     },
    { path: '/items',         name: 'items',         component: Items         },
    { path: '/people',        name: 'people',        component: People        },

    { path: '/loans',         name: 'loans',         component: Loans         },
    { path: '/notifications', name: 'notifications', component: Notifications },

    { path: '/settings',      name: 'settings',      component: Settings      },
    { path: '/help',          name: 'help',          component: Help          },
    { path: '/about',         name: 'about',         component: About         },

    { path: '/scan',          name: 'scan',          component: Scan          },
    // handles code then redirects back to landing page (bit of a hack)
    { path: '/callback/:code?/:state?',          redirect: to => {handle_code(to); return {path: "/", query: {}}}},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router



































// Appl3s was here (version 2)