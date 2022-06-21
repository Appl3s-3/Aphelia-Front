<script setup>
import { useInventory } from '../store/useInventory'

const inventoryStore = useInventory()
</script>

<template>
<ul id="tabs-list">
    <li v-for="scheme in inventoryStore.schemes" @click="state.tabbedScheme = scheme">
        <h2 class="tab-text" :id="scheme.id">{{ scheme.name }}</h2>
    </li>
</ul>
</template>

<style scoped>
#tabs-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: baseline;
    width: 100%;
}

#tabs-list > li {
    width: 20%;
    margin: 0;
}

#tabs-list > li :hover {
    background-color: var(--aph-back2);
}
</style>