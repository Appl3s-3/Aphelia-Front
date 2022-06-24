<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavigationBar from './components/NavigationBar.vue'
import TopNavigationBar from './components/TopNavigationBar.vue'
import { useSettings } from './store/useSettings'

// TODO: Hide nav bar on landing page
console.log(RouterLink)
if (RouterLink) {
}

const settingsStore = useSettings()

let showNavigationBar = true;
let useTopNav = false;
let useLeftBar = showNavigationBar && !useTopNav;
let useTopBar = showNavigationBar && useTopNav;
</script>

<template>
<div class="app-wrapper" :class="[settingsStore.isDarkTheme ? 'wrapper-dark' : 'wrapper-light', '']">
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
/* @import "./css/base.css"; */
@import "./css/clean.css";
@import "./css/prompt.css";
@import "./css/themeOfApheleia.css";

body {
    padding: 0;
    margin: 0;
}

div {
    margin: 0;
    padding: 0;
}

.app-wrapper {
    margin: 0;
    padding: 0;
}

.app {
    /* display: flex;
    flex-direction: row; */
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    color: var(--aph-text);
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