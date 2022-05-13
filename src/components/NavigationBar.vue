<script setup>
import { reactive } from 'vue'

const state = reactive({ expandNavBar: false })
const toggle_navbar = () => {
    state.expandNavBar = !state.expandNavBar
}
</script>

<template>
    <div id="navbar" :class="[state.expandNavBar ? 'navbar-expand' : 'navbar-compact', '']">
        <button id="nav-expand" class="nav-expand" @click="toggle_navbar">
            <span class="md-36 material-icons">{{state.expandNavBar ? "chevron_left" : "chevron_right"}}</span>
        </button>
        <nav id="navbar-nav">
            <div class="nav-container">
                <router-link :to="{ name: 'home' }" class="nav-button nav-logo" id="nav-home-icon">
                    <img src="../../assets/logo.svg" id="logo" />
                </router-link>

                <!-- Appl3s: Added this because it's not completely obvious that the logo is the dashboard-->
                <!-- Appl3s: You can probably omit the <p> -->
                <router-link :to="{ name: 'home' }" class="nav-button" id="nav-home">
                    <span class="md-36 material-icons nav-icon">home</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Dashboard</p>
                    </transition>
                </router-link>

                <router-link :to="{ name: 'items' }" class="nav-button" id="nav-items">
                    <span class="md-36 material-icons nav-icon">category</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Items</p>
                    </transition>
                </router-link>

                <router-link :to="{ name: 'people' }" class="nav-button" id="nav-users">
                    <span class="md-36 material-icons nav-icon">people</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Users</p>
                    </transition>
                </router-link>

                <router-link :to="{ name: 'loans' }" class="nav-button" id="nav-loans">
                    <span class="md-36 material-icons nav-icon">inventory_2</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Loans</p>
                    </transition>
                </router-link>

                <router-link
                    :to="{ name: 'notifications' }"
                    class="nav-button"
                    id="nav-notifications"
                >
                    <span class="md-36 material-icons nav-icon">notifications</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Notifications</p>
                    </transition>
                </router-link>

                <!-- Appl3s: I doubt the common user would understand what an archetype is, so a 'Item Type/Preset' in 'Items' will probably work better -->
                <!-- <router-link :to="{ name: 'archetypes' }" class="nav-button" id="nav-archetypes">Archetypes</router-link> -->
            </div>
            <div class="nav-container">
                <router-link :to="{ name: 'about' }" class="nav-button" id="nav-about">
                    <span class="md-36 material-icons nav-icon">info</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">About</p>
                    </transition>
                </router-link>
                <router-link :to="{ name: 'help' }" class="nav-button" id="nav-help">
                    <span class="md-36 material-icons nav-icon">help</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Help</p>
                    </transition>
                </router-link>
                <router-link :to="{ name: 'settings' }" class="nav-button" id="nav-settings">
                    <span class="md-36 material-icons nav-icon">settings</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Settings</p>
                    </transition>
                </router-link>
                <router-link :to="{ name: 'landing' }" class="nav-button" id="nav-logout">
                    <span class="md-36 material-icons nav-icon">logout</span>
                    <transition name="fade">
                        <p class="nav-label" v-if="state.expandNavBar">Logout</p>
                    </transition>
                </router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.nav-button {
    display: flex;
    align-items: center;
    width: calc(100% - 10px);
    height: 56px;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;

    text-align: left;
    color: #efefef;
    background-color: var(--aph-dark2);
    text-decoration: none;

    transition: 1.0s;
}

.nav-button:hover {
    background-color: var(--aph-light3);
}

.nav-button:hover:active {
    background-color: var(--aph-dark3);
}

.nav-logo {
    width: 56px;
    height: 56px;

    border-radius: 50%;
}

.nav-icon {
    display: inline-block;
}

.nav-container {
    width: 100%;
}

.nav-label {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.nav-expand {
    position: absolute;
    width: 30px;
    height: 60px;
    left: 100%;
    padding: 12px 0 12px 0;
    text-align: left;
    border: none;
    top: calc(50% - 10px);
    border-radius: 0 30px 30px 0;
    background-color: inherit;
    cursor: pointer;
    color: var(--aph-dark2);
}

.nav-expand span {
    transform: translateX(-6px);
}

.navbar-expand {
    width: 170px;
    box-shadow: 0px 0px 10px;
}

.navbar-compact {
    width: 66px;
}

#navbar {
    height: 100vh;
    background-color: var(--aph-dark2);
    position: fixed;
    transition: width 0.5s;
    z-index: 1;
}

#navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding-top: 5px;
}

#logo {
    width: 36px;
    height: 36px;
    margin: 10px;
    filter: saturate(0%) brightness(460%);
}

#nav-home-icon {
    padding: 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.material-icons.md-18 {
    font-size: 18px;
}
.material-icons.md-24 {
    font-size: 24px;
}
.material-icons.md-36 {
    font-size: 36px;
}
.material-icons.md-48 {
    font-size: 48px;
}
</style>