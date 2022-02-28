<script setup>
</script>

<template>
    <!-- Appl3s to I_Agreed: I think <nav> is the correct tag to use, since technically there'd be a <header> in the <nav>, but that also doesn't make sense -->
        <!-- TODO: change links to vue links -->
    <div id="navbar">
        <nav id="navbar-nav">
            <router-link to="home" class="nav-button" id="nav-home">
                <img src="../assets/logo.svg" id="logo">
            </router-link>

            <router-link to="Notifications" class="nav-button" id="nav-notifications">
                Notifications
            </router-link>

            <router-link to="Loans" class="nav-button" id="nav-loans">
                Loans
            </router-link>

            <router-link to="Items" class="nav-button" id="nav-items">
                Items
            </router-link>

            <router-link to="Archetypes" class="nav-button" id="nav-archetypes">
                Archetypes
            </router-link>

            <router-link to="Roles" class="nav-button" id="nav-roles">
                Roles
            </router-link>

            <router-link to="Users" class="nav-button" id="nav-users">
                Users
            </router-link>

            <router-link to="Settings" class="nav-button" id="nav-settings">
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

</style>https://github.com/Appl3s-3/apheleia