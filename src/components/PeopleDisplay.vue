<script setup>
import { usePeople } from '../store/usePeople'

const peopleStore = usePeople()
</script>

<template>
<div class="people-user-table-container">
    <!-- List of users, might merge this with items and add some parameters -->
    <h1>Users</h1>
    <table class="people-user-table">
        <tr>
            <th>Internal ID</th>
            <th>School ID</th>
            <th>Name</th>
            <th>Info</th>
        </tr>
        <tr v-for="user in peopleStore.tempUsers" :key="user.internal_id">
            <td>{{ user.internal_id }}</td>
            <td>{{ user.school_id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.info }}</td>
        </tr>
    </table>
</div>
</template>

<style scoped>
/* .people-user-table-container {
} */

.people-user-table {
    width: var(--table-width);
    background-color: var(--aph-back1);
}

</style>