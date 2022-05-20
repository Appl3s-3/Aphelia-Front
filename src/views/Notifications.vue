<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()
</script>

<template>
    <div class="notifications notifications-container">
        <div class="notifications-layout">
            <div class="notifications-filters-container">
            </div>
            <div class="notifications-list-container">
                <ul>
                    <li v-for="notification in selfStore.history.notifications">{{ notification }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../css/notifications.css";

/* Local Variables */
.notifications * {
    --list-horizontal-margin: 10%;

    --list-item-bottom-margin: 0.1em;
    --list-item-padding: 1em;
}

ul {
    margin: 0 var(--list-horizontal-margin);
}

li {
    margin: auto auto var(--list-item-bottom-margin) auto;
    padding: var(--list-item-padding);
}

</style>