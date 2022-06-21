<script setup>
</script>

<template>
    <div class="dashboard-panel" id="dashboard-notifications">
        <h3>Notifications</h3>
        <div class="dashboard-notifications-list-container">
            <ul class="dashboard-notifications-list">
                <li v-for="notification in selfStore.history.notifications">{{ notification }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>