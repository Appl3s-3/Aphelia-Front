<script setup>
import { useInventory } from '../store/useInventory'

const inventoryStore = useInventory()
</script>

<template>
<ul id="items-tabs">
    <li v-for="scheme in inventoryStore.schemes" @click="state.tabbedScheme = scheme">
        <h2 class="tab-text" :id="scheme.id">{{ scheme.name }}</h2>
    </li>
</ul>
</template>

<style scoped>
#items-tabs {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: baseline;
    width: 100%;
}

#items-tabs > li {
    width: 20%;
    margin: 0;
}

#items-tabs > li :hover {
    background-color: var(--aph-back2);
}
</style>