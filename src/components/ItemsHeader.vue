<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'
import { useInventory } from '../store/useInventory'
import { createPdf } from '../scripts/pdf2.js'

import ItemsFilters from './ItemsFilters.vue'
import ItemsPdfPreview from './ItemsPdfPreview.vue'

const itemsSt = itemsLocal()
const inventoryStore = useInventory()

</script>

<template>
<div id="items-header">
    <div id="items-top-row">
        <h1 style="color: var(--aph-purple); font-size: 40px;">
            items.
        </h1>
        <div id="toggle-buttons-container">
            <input id="filters-toggle-button" type="button" name="toggle-filters" @click="itemsSt.toggle_filters()" value="Display Filters">
            <input id="export-list" type="button" name="export-list" @click="createPdf('Temp', inventoryStore.schemes)" value="Export as List">
            <input id="manage-menu-open-button" type="button" name="manage-item" value="Manage Items" @click="itemsSt.show_manage()">
        </div>
    </div>
    <ItemsFilters v-if="itemsSt.filter_state" @search="(x) => itemsSt.searchParams = x"/>
</div>
</template>

<style scoped>
</style>