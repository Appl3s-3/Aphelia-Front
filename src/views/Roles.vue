<script setup>
// note that this is a script, not a script setup
    let user_id = 0
    let role_id = 0

    roles: [
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id},
        {role_id: ++role_id, text: 'This is a user with role_id = ' + role_id}
    ]

    users: [
        {user_id: user_id++, text: 'This is a user with user_id = ' + user_id},
        {user_id: ++user_id, text: 'This is a user with user_id = ' + user_id},
        {user_id: ++user_id, text: 'This is a user with user_id = ' + user_id}
    ]
</script>

<template>
    <h1>Users and Roles</h1>
    <div>
        <!-- Filter options, etc -->
        <p>This is a filter option.</p>
    </div>
    <div>
        <!-- Container for both the users and roles divs -->
        <div>
            <!-- Roles are displayed on the left, by default it should be displayed but I think allowing people to minimise it would be good. I'm not sure how we'll fit roles/users on a mobile device. Roles might go above users or something, or we could have buttons (always visible) at the top of the screen that lets the person switch between Roles/Users lists. -->
            <h1>Roles</h1>
            <ul>
                <li>This is a role.</li>
                <li v-for="role in roles" :key="role.role_id">
                    {{role.text}}
                </li>
            </ul>
        </div>
        <div>
            <!-- List of users, might merge this with items and add some parameters -->
            <h1>Users</h1>
            <ul>
                <li v-for="user in users" :key="user.user_id">
                    {{user.text}}
                    <!-- <button @click="removeTodo(todo)">X</button> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    @import "../assets/list.css";
</style>