<script setup>
import { useInventory } from '../store/useInventory'
import { itemsLocal } from '../store/itemsLocal'

const inventoryStore = useInventory()
const itemsSt = itemsLocal()
</script>

<template>
<ul id="items-tabs">
    <li v-for="scheme in inventoryStore.schemes" @click="itemsSt.set_tabbed(scheme)" :class="[itemsSt.tabbedSchemeName == scheme.name ? 'selected-tab' : 'unselected-tab', '']">
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
    cursor: pointer;
    height: 3.5em;
    padding: 0;
    margin: 0;
}

#items-tabs > li {
    height: 100%;
    width: 20%;
    margin: 0;
    text-align: center;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    justify-content: center;
    border-right: 0.25em solid var(--aph-border);
    border-bottom: 0.25em solid var(--aph-border);
}

#items-tabs > li th:not(:last-child) {
    border-right: 0.3em solid var(--aph-border);
}
   

h2 {
    margin: 0;
}

#items-tabs :hover {
    background-color: var(--aph-back15);
}

.selected-tab {
    border-bottom: 0 solid var(--aph-back1);
}

</style>