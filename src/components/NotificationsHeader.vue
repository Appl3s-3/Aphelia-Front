<script setup>
import NotificationsFilters from './NotificationsFilters.vue'
</script>

<template>
<div id="notifications-header">
    <h3 id="notification-title">notifications.</h3>
    <NotificationsFilters/>
</div>
</template>

<style scoped>
#notifications-header {
    margin: 5vh 0 0 0;
    border: 1px solid white;
}

#notification-title {
    font-family: "Montserrat";
    font-size: 28pt;
    font-weight: bold;
    color: var(--aph-purple);
}
</style>