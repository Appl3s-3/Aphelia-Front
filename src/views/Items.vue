<script setup>
import { useInventory } from '../store/useInventory'

const inventoryStore = useInventory()

window.onload = function() {
    // Request all the archetypes from the faculty
    // Request all the items for each archetype from the faculty
    // Parse the items
    // Display the items
}

let headingIndex = 0
//let tempItems = []

// for (let i = 0; i < 20; ++i) {
//     genItem = {
//         "internalID": i,
//         "ID": i + 1,
//         "tag": "#" + (i + 1),
//         "status": Math.round(Math.random() * 20)
//     }

//     tempItems.push(genItem)
// }

</script>

<template>
    <div class="items items-container">
        <!-- Appl3s: I can't find a way to make checkboxes enabled by default -->
        <div class="items-layout">
            <!-- Archetypes go here -->
            <!-- <div class="items-archetypes-container">
                
            </div>
        -->
            <div class="items-jump-list-container">
                <h2>Jump to...</h2>
                <ul class="items-jump-list">
                    <li class="items-jump-list-element-container" v-for="scheme in inventoryStore.schemes">
                        <a class="items-jump-list-element" :href="'#' + scheme.id">{{ scheme.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="items-table-container" v-for="scheme in inventoryStore.schemes">
                <h2 :id="scheme.id" class="table-titles">ID: {{ scheme.id }} Name: {{ scheme.name }}</h2>
                <!-- Container for the list of items -->
                <table class="items-table">
                    <tr>
                        <th v-for="fieldName in scheme.fieldNames">{{ fieldName }}</th>
                    </tr>
                    <tr v-for="item in scheme.items">
                        <td v-for="field in item">{{ field }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../css/items.css";

/* Local Variables */
.items * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;

    --table-horizontal-margin: 20px;
    --table-vertical-padding: 20px;

    --table-heading-vertical-padding: 28px;

    --table-data-vertical-padding: 14px;
    --table-data-horizontal-padding: 12px;
}

/* TODO: make the table take up the remaining space */
.items-layout {
    --filter-table-gap-size: 0;

    display: grid;
    grid-template: auto auto / auto;
    gap: var(--filter-table-gap-size);
}


/* Filters */

.items-filters-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

/* items-filters-left and items-filters-right (The children, which are divs, of the items-filters-container) */
.items-filters-container > div {
    display: inline-flex;
    flex-flow: row nowrap;
}

.items-filters-left {
    justify-content: space-between;
    align-items: center;
    margin: var(--left-filter-vertical-margin) 0;
}

/* .items-filters-right {
} */

.items-filter {
    margin: auto var(--filter-horizontal-margin);
}

/* Jump List */
.items-jump-list-container {
    position: fixed;
}

/* .items-jump-list {
} */

/* .items-jump-list-element-container {
} */

/* .items-jump-list-element {
} */

/* Table */

.items-table-container {
    margin: 0 auto;
    padding: var(--table-vertical-padding) 0;
}

.table-titles {
    color: var(--aph-dark2);
    margin: 0 var(--table-horizontal-margin);
}

.items-table {
    width: 70vw; /* TODO: Change the width based off the number of item fields */
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