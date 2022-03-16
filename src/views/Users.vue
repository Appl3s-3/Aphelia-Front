<script setup>
window.onload = function() {
    // Request all the users from the faculty
    // Request all the roles from the faculty
    // Display the users
    // Display the roles
}

let user_id = 0
let role_id = 0

roles: [
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
    { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id }
]

users: [
    { user_id: user_id++, text: 'This is a user with user_id = ' + user_id },
    { user_id: ++user_id, text: 'This is a user with user_id = ' + user_id },
    { user_id: ++user_id, text: 'This is a user with user_id = ' + user_id }
]
</script>

<template>
    <div class="users users-container">
        <h1>Users and Roles</h1>
        <div class="users-layout">
            <!--
            This whole page only displays if the client has permission to modify roles and user roles
            Above a list of users will be a list of filter options to filter/sort out the users
            Additionally each user will have a ... or hamburger button that appears if the current client has permission to modify user roles
            Each role will be listed on the right hand side of the page
            Ecah role will have a ... or hamburger button which allows the client to modify the role
            Each role will have a checkbox which filters out users in a whitelist
            -->
            <div class="users-filters-container">
                <!-- Filter options, etc -->
                <p>This is a filter option.</p>
            </div>
            <div class="users-role-list-container">
                <!-- Roles are displayed on the left, by default it should be displayed but I think allowing people to minimise it would be good. I'm not sure how we'll fit roles/users on a mobile device. Roles might go above users or something, or we could have buttons (always visible) at the top of the screen that lets the person switch between Roles/Users lists. -->
                <h1>Roles</h1>
                <ul>
                    <li>This is a role.</li>
                    <li v-for="role in roles" :key="role.role_id">{{ role.text }}</li>
                </ul>
            </div>
            <div class="users-user-list-container">
                <!-- List of users, might merge this with items and add some parameters -->
                <h1>Users</h1>
                <ul>
                    <li v-for="user in users" :key="user.user_id">
                        {{ user.text }}
                        <!-- <button @click="removeTodo(todo)">X</button> -->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../assets/list.css";

.users-layout {
    margin: 2.5%;
    display: grid;
    grid: 70% 30% / 200px 200px;
    gap: 5px;
}

.users-filters-container {
    grid-column: 1;
}

.users-role-list-container {
    grid-column: 1;
    grid-row: 1 / 3;
}

.users-user-list-container {
    grid-column: 1;
}


</style>