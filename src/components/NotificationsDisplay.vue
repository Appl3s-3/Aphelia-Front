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
    border: 4px solid var(--aph-grey);
    border-radius: 10px;
}

#notifications-display > li {
    margin: auto auto 0.1em auto;
    padding: 1em;
    font-size: 24px;
    border-bottom: 1px solid var(--aph-grey);
}
</style>