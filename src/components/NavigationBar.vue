<script>
export default {
    data() {
        return {
            expandNavBar: true
        }
    },
    methods: {
        toggleNavBar() {
            this.expandNavBar = !this.expandNavBar;
        }
    }
}
</script>

<template>
    <!-- I don't think we need the div around the <nav>, since it's already a container -->
    <div id="navbar" :class="[expandNavBar ? 'navbar-expand' : 'navbar-compact', '']">
        <button id="nav-expand" class="nav-expand" @click="toggleNavBar">
            expand
        </button>
        <nav id="navbar-nav">
            <router-link :to="{ name: 'home' }" class="nav-button nav-logo" id="nav-home-icon">
                <img src="../assets/logo.svg" id="logo" />
            </router-link>

            <!-- Appl3s: Added this because it's not completely obvious that the logo is the dashboard-->
            <!-- Appl3s: You can probably omit the <p> -->
            <router-link :to="{ name: 'home' }" class="nav-button" id="nav-home">
                <span class="md-36 material-icons nav-icon">home</span>
                <p class="nav-label" v-if="expandNavBar">
                    Dashboard
                </p>
            </router-link>

            <router-link :to="{ name: 'items' }" class="nav-button" id="nav-items">
                <span class="md-36 material-icons nav-icon">category</span>
                <p class="nav-label" v-if="expandNavBar">
                    Items
                </p>
            </router-link>

            <router-link :to="{ name: 'users' }" class="nav-button" id="nav-users">
                <span class="md-36 material-icons nav-icon">people</span>
                <p class="nav-label" v-if="expandNavBar">
                    Users
                </p>
            </router-link>

            <router-link :to="{ name: 'loans' }" class="nav-button" id="nav-loans">
                <span class="md-36 material-icons nav-icon">inventory_2</span>
                <p class="nav-label" v-if="expandNavBar">
                    Loans
                </p>
            </router-link>

            <router-link :to="{ name: 'notifications' }" class="nav-button" id="nav-notifications">
                <span class="md-36 material-icons nav-icon">notifications</span>
                <p class="nav-label" v-if="expandNavBar">
                    Notifications
                </p>
            </router-link>

            <!-- Appl3s: I doubt the common user would understand what an archetype is, so a 'Item Type/Preset' in 'Items' will probably work better -->
            <!-- <router-link :to="{ name: 'archetypes' }" class="nav-button" id="nav-archetypes">Archetypes</router-link> -->

            <router-link :to="{ name: 'about' }" class="nav-button" id="nav-about">
                <span class="md-36 material-icons nav-icon">info</span>
                <p class="nav-label" v-if="expandNavBar">
                    About
                </p>
            </router-link>
            <router-link :to="{ name: 'help' }" class="nav-button" id="nav-help">
                <span class="md-36 material-icons nav-icon">help</span>
                <p class="nav-label" v-if="expandNavBar">
                    Help
                </p>
            </router-link>
            <router-link :to="{ name: 'settings' }" class="nav-button" id="nav-settings">
                <span class="md-36 material-icons nav-icon">settings</span>
                <p class="nav-label" v-if="expandNavBar">
                    Settings
                </p>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
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
    background-color: #703172;
    text-decoration: none;

    transition: 0.2s;
}

.nav-button:hover {
    background-color: #532b5e;
}

.nav-button:hover:active {
    background-color: #3a1a3b;
}

.nav-logo {
    width: 56px;
    height: 56px;

    border-radius: 50%;
}

.nav-icon {
    display: inline-block;
}

.nav-label {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.navbar-expand {
    width: 190px;
}

.navbar-compact{
    width: 66px;
}

#navbar {
    height: 100vh;
    background-color: #a74daa;
    position: fixed;
    z-index: 1;
}

#navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
</style>