<script setup>
import PeopleFilters from '../components/PeopleFilters.vue'
import PeopleDisplay from '../components/PeopleDisplay.vue'

</script>

<template>
<div class="people people-container">
    <div class="people-layout">
        <!--
        This whole page only displays if the client has permission to modify roles and user roles
        Above a list of users will be a list of filter options to filter/sort out the users
        Additionally each user will have a ... or hamburger button that appears if the current client has permission to modify user roles
        Each role will be listed on the right hand side of the page
        Ecah role will have a ... or hamburger button which allows the client to modify the role
        Each role will have a checkbox which filters out users in a whitelist
        -->
        <PeopleFilters/>
        <PeopleDisplay/>
        <!-- For now hide the roles -->
        <!-- <div class="people-role-list-container"> -->
            <!-- Roles are displayed on the left, by default it should be displayed but I think allowing people to minimise it would be good. I'm not sure how we'll fit roles/users on a mobile device. Roles might go above users or something, or we could have buttons (always visible) at the top of the screen that lets the person switch between Roles/Users lists. -->
            <!-- <h1>Roles</h1>
            <ul class="people-role-list">
                <li>This is a role.</li>
                <li v-for="role in roles" :key="role.role_id">{{ role.text }}</li>
            </ul>
        </div> -->
    </div>
</div>
</template>

<style scoped>
.people * {
    --outside-vertical-padding: 2.5%;
    --outside-hotizontal-padding: 2.5%;

    --table-width: 100%;
}

.people-layout {
    padding: var(--outside-vertical-padding) var(--outside-hotizontal-padding);
}

/* Roles */
.people-role-list-container {
    grid-column: 1;
    grid-row: 1 / 3;
    background-color: var(--aph-back1);
}
</style>