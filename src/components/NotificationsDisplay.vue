<script setup>
</script>

<template>
<ul id="dash-notifications-list">
    <li v-for="notification in selfStore.history.notifications">{{ notification }}</li>
</ul>
</template>

<style scoped>

/* #dash-notifications-list {
} */

#dash-notifications-list > li {
    padding: var(--notification-list-padding);
    margin: var(--notification-list-vertical-margin) auto;
    background-color: var(--aph-dark3a);
}
</style>