<script setup>
</script>

<template>
    <!-- TODO: change links to vue links -->
    <div id="navbar">
        <nav id="navbar-nav">
            <router-link to="home" class="nav-button" id="nav-home">
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
    }

    #logo {
        width: 50px;
        height: 50px;
    }

</style>