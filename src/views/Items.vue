<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'
import { itemsLocal } from '../store/itemsLocal'

import ItemsHeader from '../components/ItemsHeader.vue'
import ItemsDisplay from '../components/ItemsDisplay.vue'
import ManageMenu from '../components/ItemsManage.vue'

const inventoryStore = useInventory()

const itemsSt = itemsLocal()

const state = reactive({
    tabbedScheme: inventoryStore.schemes[0],
    manageScheme: inventoryStore.schemes[0],
    expandTabs: false,
    showConfirmMenu: false,
    showDeleteItemMenu: false,
    showDeleteArchetypeMenu: false,
    showDeleteArchetypeSecondMenu: false,
    showResetMenu: false,
    showSaveMenu: false,
    showExitMenu: false,
    batch: {
        items: {
            create: [],
            modify: [],
        },
        archetypes: {
            create: [],
            modify: []
        }
    }
})

/*
const find_scheme = (schemeID) => {
    // Loop through inventoryStore and find the index of the scheme with schemeID = scheme.id
    let i = 0
    for (; i < inventoryStore.schemes.length; ++i) {
        if (inventoryStore.schemes[i].id == schemeID) {
            break
        }
    }
    return i
}

const set_active_scheme_from_ID = (schemeID) => {
    // Set state.tabbedScheme using findScheme
    let index = find_scheme(schemeID)
    state.tabbedcheme = inventoryStore.schemes[index];
}
*/

</script>

<template>
<div class="items" id="items-container">
    <div id="items-layout">
        <ItemsHeader/>
        <ItemsDisplay/>
    </div>
    <ManageMenu v-if="itemsSt.manage_state"/>
</div>
</template>

<style scoped>
.items * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;

    --display-heading-vertical-padding: 28px;
    --display-horizontal-padding: 1%;

    --display-content-width: 90%;

    --table-horizontal-margin: 0;
    --table-vertical-padding: 0;
    --table-horizontal-padding: 0;

    --table-container-border-width: 0.5em;
    --table-container-border-radius: 1em;

    --table-data-vertical-padding: 14px;
    --table-data-horizontal-padding: 12px;
}

#items-container {
    display: flex;
    justify-content: space-around;
}

#items-layout {
    display: grid;
    grid-template: auto auto / auto;
    gap: 0;

    width: 70%;
    margin: 5vh 0;
}
</style>