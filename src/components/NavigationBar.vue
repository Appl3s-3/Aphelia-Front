<script setup>
</script>

<template>
    <!-- Appl3s to I_Agreed: I think <nav> is the correct tag to use, since technically there'd be a <header> in the <nav>, but that also doesn't make sense -->
        <!-- TODO: change links to vue links -->
    <header>
        <nav id="navbar">
            <a href="dashboard.vue" class="nav-button" id="nav-dashboard">
                <img src="../assets/logo.svg">
            </a>

            <a href="Notifications.vue" class="nav-button" id="nav-notifications">
                Notifications
            </a>

            <a href="Loans.vue" class="nav-button" id="nav-loans">
                Loans
            </a>

            <a href="Items.vue" class="nav-button" id="nav-items">
                Items
            </a>

            <a href="Archetypes.vue" class="nav-button" id="nav-archetypes">
                Archetypes
            </a>

            <a href="Roles.vue" class="nav-button" id="nav-roles">
                Roles
            </a>

            <a href="Users.vue" class="nav-button" id="nav-users">
                Users
            </a>

            <a href="Settings.vue" class="nav-button" id="nav-settings">
                Settings
            </a>
        </nav>
    </header>
</template>

<style scoped>
</style>https://github.com/Appl3s-3/apheleia