<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'
import { itemsLocal } from '../store/itemsLocal'

const inventoryStore = useInventory()
const itemsSt = itemsLocal()

itemsSt.tabbedScheme = inventoryStore.schemes[0]

const state = reactive({
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

function check_item(item, filter) { // check if item passes search filter
    return item[0].toLowerCase().includes(filter.toLowerCase());
}
</script>

<template>
<div id="items-table-container">
    <table id="items-table">
        <thead>
            <tr>
                <th v-for="fieldName in itemsSt.tabbedScheme.fieldNames">{{ fieldName }}</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="item in itemsSt.tabbedScheme.items">
                <tr v-if="check_item(item, itemsSt.search_params)">
                    <td v-for="field in item">{{ field }}</td>
                </tr>
            </template>
        </tbody>
    </table>
</div>
</template>

<style scoped>
#items-table-container {
    width: 100%;
    margin: 0;
    padding: var(--table-vertical-padding) var(--table-horizontal-padding);
    background-color: var(--aph-back1);
}

#items-table {
    width: 100%;
    margin: 0 var(--table-horizontal-margin);

    border-collapse: collapse;
}

#items-table th {
    padding: var(--table-heading-vertical-padding) 0;
    background-color: var(--aph-back15);
    border-top: 0.25em solid var(--aph-border);
    border-bottom: 0.25em solid var(--aph-border);
    height: 3.5em;
}

#items-table th:not(:last-child) {
    border-right: 0.3em solid var(--aph-border);
}

#items-table tr:not(:last-child) {
    border-bottom: 0.25em solid var(--aph-border);
}
#items-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    background-color: var(--aph-back1);
    text-align: center;
}

#items-table td:not(:last-child) {
    border-right: 0.3em solid var(--aph-border);
}

</style>