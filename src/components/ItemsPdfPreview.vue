<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'
import { useInventory } from '../store/useInventory'
import { createPdf } from '../scripts/pdf.js'

import ItemsFilters from './ItemsFilters.vue'

const itemsSt = itemsLocal()
const inventoryStore = useInventory()

</script>

<template>
<div id="items-pdf">
    <iframe id="pdf" style="width: 100%; height: 100%;"></iframe>
</div>
</template>

<style scoped>
</style>