<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'

let showNavigationBar = true
// TODO: If the router is on the landing page, set the variable above to false
console.log(RouterLink)
if (RouterLink) {

}
</script>

<template>
    <div class="app-wrapper">
        <div class="app">
            <NavigationBar v-if="showNavigationBar" />
            <RouterView />
        </div>
    </div>
</template>

<style>
@import "./assets/base.css";
.app {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}
</style>