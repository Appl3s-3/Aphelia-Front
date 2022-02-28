<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="app-wrapper">
        <div class="app">
            <RouterView />
        </div>
    </div>
</template>

<style>
    @import "./assets/base.css";
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .container {
        max-width: 1440px;
        margin: 0 auto;
    }
</style>
