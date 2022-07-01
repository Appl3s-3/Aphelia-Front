<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()

</script>

<template>
<ul id="notifications-display">
    <li v-for="notification in selfStore.history.notifications">{{ notification }}</li>
</ul>
</template>

<style scoped>
#notifications-display {
    margin: 0;
}

#notifications-display > li {
    margin: auto auto 0.1em auto;
    padding: 1em;
    font-size: 24px;
    background-color: var(--aph-fore1);
}
</style>