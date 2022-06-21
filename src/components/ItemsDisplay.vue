<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'
import ManageMenu from '../components/ManageItems.vue'

const itemsSt = itemsLocal()

</script>

<template>
    <div id="items-display-container">
        <!-- <button class="items-tabs-expand" @click="state.expandTabs = !state.expandTabs">
            <span>{{state.expandTabs ? "OPEN" : "CLOSED"}}</span>
        </button> -->
        <ul id="items-tabs-container">
            <li class="items-tab" v-for="scheme in inventoryStore.schemes" @click="state.tabbedScheme = scheme">
                <h2 :id="scheme.id" class="items-tab-text">{{ scheme.name }}</h2>
            </li>
        </ul>
        <div id="items-table-container">
            <table id="items-table">
                <thead>
                    <tr>
                        <th v-for="fieldName in state.tabbedScheme.fieldNames">{{ fieldName }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in state.tabbedScheme.items">
                        <td v-for="field in item">{{ field }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
/***** Items Display Container *****/
#items-display-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    padding: var(--display-vertical-padding) var(--display-horizontal-padding);
}

/**** Items Tabs Container ****/
#items-tabs-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: baseline;
    width: 100%;
}

.items-tab {
    width: 20%;
    margin: 0;
}

/* .items-tab:hover {
} */

/**** Items Table Container ****/
#items-table-container {
    width: var(--display-content-width);
    margin: 0;
    border: var(--table-container-border-width) solid var(--aph-border);
    border-radius: var(--table-container-border-radius);
    padding: var(--table-vertical-padding) var(--table-horizontal-padding);
}

.table-titles {
    margin: 0 var(--table-horizontal-margin);
}

#items-table {
    width: 100%;
    margin: 0 var(--table-horizontal-margin);

    border-collapse: collapse;
}

th {
    padding: var(--table-heading-vertical-padding) 0;
}

td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
}
</style>