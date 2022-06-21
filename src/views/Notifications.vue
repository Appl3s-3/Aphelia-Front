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
.notifications * {
    --list-horizontal-margin: 10%;

    --list-item-bottom-margin: 0.1em;
    --list-item-padding: 1em;

    --list-font-size: 24px;
}

ul {
    margin: 0 var(--list-horizontal-margin);
    background-color: var(--aph-fore1);
}

li {
    margin: auto auto var(--list-item-bottom-margin) auto;
    padding: var(--list-item-padding);
    font-size: var(--list-font-size);
    background-color: var(--aph-back2);
}
</style>