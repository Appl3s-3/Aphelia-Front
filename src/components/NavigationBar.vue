<script setup>
import { reactive } from 'vue'

const state = reactive({ expandNavBar: false })
const toggle_navbar = () => {
    state.expandNavBar = !state.expandNavBar
}
</script>

<template>
    <div id="navbar" :class="[state.expandNavBar ? 'navbar-expand' : 'navbar-compact', '']">
        <button id="nav-expand-button" class="nav-expand" @click="toggle_navbar">
            <span class="md-36 material-icons">{{ state.expandNavBar ? "chevron_left" : "chevron_right" }}</span>
        </button>
        <nav id="navbar-nav">
            <div id="nav-top">
                <div id="nav-header">
                    <router-link class="nav-button" :to="{ name: 'home' }" id="nav-apheleia-icon">
                        <img src="../../assets/logo_mono.svg" id="nav-apheleia-logo" />
                    </router-link>
                </div>
                <div id="nav-body">
                    <router-link class="nav-button" :to="{ name: 'home' }" id="nav-home">
                        <span class="md-36 material-icons nav-icon">home</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Dashboard</p>
                        </transition>
                    </router-link>
                    <router-link class="nav-button" :to="{ name: 'items' }" id="nav-items">
                        <span class="md-36 material-icons nav-icon">category</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Items</p>
                        </transition>
                    </router-link>
                    <router-link class="nav-button" :to="{ name: 'people' }" id="nav-users">
                        <span class="md-36 material-icons nav-icon">people</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Users</p>
                        </transition>
                    </router-link>
                    <router-link class="nav-button" :to="{ name: 'loans' }" id="nav-loans">
                        <span class="md-36 material-icons nav-icon">inventory_2</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Loans</p>
                        </transition>
                    </router-link>
                    <router-link class="nav-button" :to="{ name: 'notifications' }" id="nav-notifications">
                        <span class="md-36 material-icons nav-icon">notifications</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Notifications</p>
                        </transition>
                    </router-link>
                </div>
            </div>
            <div id="nav-bottom">
                <div id="nav-footer">
                    <router-link class="nav-button" :to="{ name: 'about' }" id="nav-about">
                        <span class="md-36 material-icons nav-icon">info</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">About</p>
                        </transition>
                    </router-link>
                    <router-link class="nav-button" :to="{ name: 'help' }" id="nav-help">
                        <span class="md-36 material-icons nav-icon">help</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Help</p>
                        </transition>
                    </router-link>
                    <router-link class="nav-button" :to="{ name: 'settings' }" id="nav-settings">
                        <span class="md-36 material-icons nav-icon">settings</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Settings</p>
                        </transition>
                    </router-link>
                    <!-- TODO: I_Agreed: Maybe make an "are you sure?" here? -->
                    <router-link class="nav-button" :to="{ name: 'logout' }" id="nav-logout">
                        <span class="md-36 material-icons nav-icon">logout</span>
                        <transition name="fade">
                            <p class="nav-label" v-if="state.expandNavBar">Logout</p>
                        </transition>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
#navbar {
    height: 100vh;
    background-color: var(--aph-purple);
    position: fixed;
    /* border-right: 0.2em solid white; */
    transition: width 0.5s;
    z-index: 1;
}

.navbar-expand {
    width: 170px;
    box-shadow: 0px 0px 10px;
}

.navbar-compact {
    width: 66px;
}

#nav-expand-button {
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
    color: var(--aph-light1);
}

#nav-expand-button span {
    transform: translateX(-6px);
}

/***** Nav ******/
#navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding-top: 5px;
}

/**** Navbar Top Half ****/
/* #nav-top {
} */

#nav-header {
    margin-bottom: 2em;
}

#nav-apheleia-icon {
    padding: 0px;

    width: 56px;
    height: 56px;

    border-radius: 50%;
}

#nav-apheleia-logo {
    width: 36px;
    height: 36px;
    margin: 10px;
    /* filter: saturate(0%) brightness(460%); */
}

#nav-top {
    width: 100%;
}

#nav-bottom {
    width: 100%;
}

/**** Navbar Bottom Half ****/
/* #nav-bottom {
} */
/* #nav-footer {
} */

/***** Navbar Buttons *****/
.nav-button {
    display: flex;
    align-items: center;
    width: calc(100% - 10px);
    
    height: 56px;
    margin: 5px;
    padding: 0px;
    border-radius: 5px;

    text-align: left;
    color: #efefef;
    background-color: var(--aph-purple);
    text-decoration: none;

    transition: width 1.0s;
}

.nav-button:hover {
    background-color: var(--aph-light2);
}

.nav-button:hover:active {
    background-color: var(--aph-light1);
}

.nav-icon {
    display: inline-block;
    margin-left: 10px;
}

.nav-label {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

/***** Miscellaneous *****/
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