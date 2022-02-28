<script setup>
</script>

<template>
    <!-- TODO: change links to vue links -->
    <div id="navbar">
        <nav id="navbar-nav">
            <router-link to="home" class="nav-button nav-logo" id="nav-home">
                <img src="../assets/logo.svg" id="logo">
            </router-link>

            <router-link to="notifications" class="nav-button" id="nav-notifications">
                Notifications
            </router-link>

            <router-link to="loans" class="nav-button" id="nav-loans">
                Loans
            </router-link>

            <router-link to="items" class="nav-button" id="nav-items">
                Items
            </router-link>

            <router-link to="archetypes" class="nav-button" id="nav-archetypes">
                Archetypes
            </router-link>

            <router-link to="roles" class="nav-button" id="nav-roles">
                Roles
            </router-link>

            <router-link to="users" class="nav-button" id="nav-users">
                Users
            </router-link>

            <router-link to="settings" class="nav-button" id="nav-settings">
                Settings
            </router-link>
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

    .nav-button:active {
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