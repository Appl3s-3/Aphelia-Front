<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavigationBar from './components/NavigationBar.vue'
import TopNavigationBar from './components/TopNavigationBar.vue'

// TODO: Hide nav bar on landing page
console.log(RouterLink)
if (RouterLink) {
}

let showNavigationBar = true
let useTopNav = false
let useLeftBar = showNavigationBar && !useTopNav
let useTopBar = showNavigationBar && useTopNav
</script>

<template>
    <div class="app-wrapper">
        <div class="app">
            <NavigationBar v-if="useLeftBar" />
            <TopNavigationBar v-if="useTopBar" />
            <main :class="{ shift: useLeftBar, topshift: useTopBar }">
                <RouterView />
            </main>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;1,400&display=swap');
@import "./css/base.css";
@import "./css/clean.css";
@import "./css/themeOfApheleia.css";

.text-warning {
    color: var(--aph-text-warning);
}

.text-highlight {
    color: var(--aph-text-highlight);
}

.app {
    /* display: flex;
    flex-direction: row; */
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    color: var(--aph-text3);
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}

.shift {
    padding-left: 66px;
}

.topshift {
    margin-top: 50px;
}
</style>