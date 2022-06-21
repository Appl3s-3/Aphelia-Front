<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'

import ItemsFilters from './ItemsFilters.vue'

const itemsSt = itemsLocal()

</script>

<template>
<div id="items-header">
    <div id="toggle-buttons-container">
        <input id="filters-toggle-button" type="button" name="toggle-filters" @click="itemsSt.toggle_filters()">
        <input id="manage-menu-open-button" type="button" name="manage-item" value="Manage Items" @click="itemsSt.show_manage()">
    </div>
    <ItemsFilters v-if="itemsSt.filter_state"/>
</div>
</template>

<style scoped>
.items * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;
}

#items-header {
    display: grid;
    grid: auto / 80% 20%;
}

#toggle-buttons-container {
}

#filters-toggle-button {
}

#manage-menu-open-button {
    background-color: var(--aph-purple);
    color: var(--aph-text-light);
    border: 3px solid var(--aph-border);
}
</style>