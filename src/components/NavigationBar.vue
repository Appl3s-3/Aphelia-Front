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
            <router-link :to="{ name: 'home'  }" class="nav-button" id="nav-home">
                <span class="md-36 material-icons nav-icon">home</span>
                Dashboard
            </router-link>

            <router-link :to="{ name: 'items' }" class="nav-button" id="nav-items">
                <span class="md-36 material-icons nav-icon">category</span>
                Items
            </router-link>

            <router-link :to="{ name: 'users' }" class="nav-button" id="nav-users">
                <span class="md-36 material-icons nav-icon">people</span>
                Users
            </router-link>

            <router-link :to="{ name: 'loans' }" class="nav-button" id="nav-loans">
                <span class="md-36 material-icons nav-icon">inventory_2</span>
                Loans
            </router-link>

            <router-link :to="{ name: 'notifications' }" class="nav-button" id="nav-notifications">
                <span class="md-36 material-icons nav-icon">notifications</span>
                Notifications
            </router-link>

            <!-- Appl3s: I doubt the common user would understand what an archetype is, so a 'Item Type/Preset' in 'Items' will probably work better -->
            <!-- <router-link :to="{ name: 'archetypes' }" class="nav-button" id="nav-archetypes">Archetypes</router-link> -->
            <router-link :to="{ name: 'about' }" class="nav-button" id="nav-about">
                <span class="md-36 material-icons nav-icon">info</span>
                About
            </router-link>
            <router-link :to="{ name: 'help' }" class="nav-button" id="nav-help">
                <span class="md-36 material-icons nav-icon">help</span>
                Help
            </router-link>
            <router-link :to="{ name: 'settings' }" class="nav-button" id="nav-settings">
                <span class="md-36 material-icons nav-icon">settings</span>
                Settings
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

    .nav-button {
        display: block;
        margin: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 5px;

        text-align: center;
        color: #2c3e50;
        background-color: #a52a2a;
        text-decoration: none;

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

    .nav-icon {
        display: block;
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

    #nav-home-icon {
        padding: 0px;
    }
</style>