<script setup>
import { usePeople } from '../store/usePeople'

const peopleStore = usePeople()

let tempUsers = peopleStore.tempUsers

window.onload = function() {
    // Request all the users from the faculty
    // Request all the roles from the faculty
    // Display the users
    // Display the roles
}

</script>

<template>
    <div class="people people-container">
        <h1>Users and Roles</h1>
        <div class="people-layout">
            <!--
            This whole page only displays if the client has permission to modify roles and user roles
            Above a list of users will be a list of filter options to filter/sort out the users
            Additionally each user will have a ... or hamburger button that appears if the current client has permission to modify user roles
            Each role will be listed on the right hand side of the page
            Ecah role will have a ... or hamburger button which allows the client to modify the role
            Each role will have a checkbox which filters out users in a whitelist
            -->
            <div>
                <div class="people-filters-container">
                    <!-- Filter options, etc -->
                    <p>This is a filter option.</p>
                </div>
                <div class="people-user-table-container">
                    <!-- List of users, might merge this with items and add some parameters -->
                    <h1>Users</h1>
                    <table class="people-user-table">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Class</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Me myself and I</td>
                            <td>Class of 2022</td>
                        </tr>
                        <li v-for="user in tempUsers" :key="user.user_id">
                            {{ user.text }}
                            <!-- <button @click="removeTodo(todo)">X</button> -->
                        </li>
                    </table>
                </div>
            </div>
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
.people-layout {
    margin: 2.5%;
}


/* Users */

.people-filters-container {
    /* Literally ripped from Items.vue */
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: var(--aph-dark2);
}

.people-user-table-container {
    background-color: var(--aph-dark1a);
}

.people-user-table {
    width: 100%;
}

/* Roles */

.people-role-list-container {
    grid-column: 1;
    grid-row: 1 / 3;
    background-color: var(--aph-dark1a);
}

</style>