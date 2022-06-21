<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'

import ItemsTabs from './ItemsTabs.vue'
import ItemsTable from './ItemsTable.vue'

const itemsSt = itemsLocal()

</script>

<template>
<div id="items-display">
    <!-- <button class="items-tabs-expand" @click="state.expandTabs = !state.expandTabs">
        <span>{{state.expandTabs ? "OPEN" : "CLOSED"}}</span>
    </button> -->
    <ItemsTabs/>
    <ItemsTable/>
</div>
</template>

<style scoped>
#items-display {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    padding: var(--display-vertical-padding) var(--display-horizontal-padding);
    background-color: var(--aph-back1);
}
</style>