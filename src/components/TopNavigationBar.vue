<script setup>

let left_routes = [
    { name: "home", display_text: "Dashboard" },
    { name: "items", display_text: "Items" },
    { name: "people", display_text: "People" },
    { name: "loans", display_text: "Loans" },
    { name: "notifications", display_text: "Notifications" }
]

let right_routes = [
    { name: "about", display_text: "About" },
    { name: "help", display_text: "Help" },
    { name: "settings", display_text: "Settings" },
    { name: "landing", display_text: "Logout" }
]
</script>

<template>
    <div class="navbar navbar-container">
        <nav class="navbar-nav navbar-nav-list-container">
            <ul class="navbar-nav-list-left">
                <li class="navbar-nav-redirect-container">
                    <router-link :to="{ name: 'home' }" class="navbar-nav-redirect nav-logo">
                    <img src="../../assets/logo.svg" id="logo" />
                    </router-link>
                </li>
                <li class="navbar-nav-redirect-container" v-for="route in left_routes">
                    <router-link :to="route" class="navbar-nav-redirect">
                        {{ route.display_text }}
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav-list-right">
                <li class="navbar-nav-redirect-container" v-for="route in right_routes">
                    <router-link :to="route" class="navbar-nav-redirect">
                        {{ route.display_text }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: var(--aph-dark2);
    border-bottom: 0.1em solid var(--aph-light3);
}
.navbar-nav {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
}

.navbar-nav-list-container > ul {
    display: inline-flex;
    flex-flow: row nowrap;
}

.navbar-nav-redirect-container {
    display: inline;
    margin: 0 0.1em;
    background-color: var(--aph-dark3);
}

.navbar-nav-redirect {
    display: block;
    margin: 0;
    padding: 0.3em 0.8em;
    font-size: 18px;
    font: Spectral 18px;
}

</style>