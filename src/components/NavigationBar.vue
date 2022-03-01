<script setup>
</script>

<template>
    <!-- I don't think we need the div around the <nav>, since it's already a container -->
    <div id="navbar">
        <nav id="navbar-nav">
            <router-link :to="{ name: 'home'  }" class="nav-button nav-logo" id="nav-home-icon">
                <img src="../assets/logo.svg" id="logo">
            </router-link>

            <!-- Appl3s: Added this because it's not completely obvious that the logo is the dashboard-->
            <router-link :to="{ name: 'home'  }" class="nav-button" id="nav-home">Dashboard</router-link>
            <router-link :to="{ name: 'items' }" class="nav-button" id="nav-items">Items</router-link>
            <router-link :to="{ name: 'users' }" class="nav-button" id="nav-users">Users</router-link>
            <router-link :to="{ name: 'roles' }" class="nav-button" id="nav-roles">Roles</router-link>
            
            <router-link :to="{ name: 'loans' }" class="nav-button" id="nav-loans">Loans</router-link>
            <router-link :to="{ name: 'notifications' }" class="nav-button" id="nav-notifications">Notifications</router-link>

            <!-- Appl3s: I doubt the common user would understand what an archetype is, so a 'Item Type/Preset' in 'Items' will probably work better -->
            <!-- <router-link :to="{ name: 'archetypes' }" class="nav-button" id="nav-archetypes">Archetypes</router-link> -->
            <router-link :to="{ name: 'about' }" class="nav-button" id="nav-about">About</router-link>
            <router-link :to="{ name: 'help' }" class="nav-button" id="nav-help">Help</router-link>
            <router-link :to="{ name: 'settings' }" class="nav-button" id="nav-settings">Settings</router-link>
        </nav>
    </div>
</template>

<style scoped>
    .nav-button {
        display: block;
        margin: 10px;
        border-radius: 5px;

        text-align: center;
        color: #2c3e50;
        background-color: #a52a2a;

        transition: 0.2s;
    }

    .nav-button:hover {
        background-color: #921e1e;
    }

    .nav-button:hover:active {
        background-color: #801515;
    }

    .nav-logo {
        width: 70px;
        height: 70px;
        margin-left: 25px;
        margin-right: 25px;

        border-radius: 50%;
    }

    #navbar {
        width: 120px;
        background-color: #e96f6f;
    }

    #logo {
        margin: 10px;
        width: 50px;
        height: 50px;
    }
</style>