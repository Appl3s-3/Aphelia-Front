<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'

import ItemsFilters from './ItemsFilters.vue'

const itemsSt = itemsLocal()

</script>

<template>
<div id="items-header">
    <div id="items-top-row">
        <h1 style="color: var(--aph-purple-light); font-size: 40px;">
            items.
        </h1>
        <div id="toggle-buttons-container">
            <input id="filters-toggle-button" type="button" name="toggle-filters" @click="itemsSt.toggle_filters()" value="Display Filters">
            <input id="manage-menu-open-button" type="button" name="manage-item" value="Manage Items" @click="itemsSt.show_manage()">
        </div>
    </div>
    <ItemsFilters v-if="itemsSt.filter_state" @search="(x) => itemsSt.searchParams = x"/>
</div>
</template>

<style scoped>
.items * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;
}

#items-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#items-header {
    display: flex;
    grid: auto / 80% 20%;
    flex-direction: column;
}

#toggle-buttons-container {
    display: flex;
    align-items: centre;
}

#filters-toggle-button {
}

#manage-menu-open-button {
    background-color: var(--aph-purple);
    color: var(--aph-text-light);
    border: 3px solid var(--aph-border);
}
</style>