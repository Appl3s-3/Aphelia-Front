<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'

const inventoryStore = useInventory()

let fieldToSort = []

// Loop through the schemes and append {field, direction} to fieldToSort[]
// inventoryStore.schemes.forEach(scheme => fieldToSortBy.push({
//     field: scheme.fieldNames[0],
//     direction: 0
// }))

// const sort = (s) => {
//     if (s === this.currentSort) {
//         this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
//     }
//     this.currentSort = s;
// }

// const sortedCats = () => {
//     return this.cats.sort((a, b) => {
//         let modifier = 1;
//         if (this.currentSortDir === 'desc') modifier = -1;
//         if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
//         if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
//         return 0;
//     });
// }


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

const state = reactive({ expandTabs: false })

const toggle_tabs = () => {
    state.expandTabs = !state.expandTabs
}

</script>

<template>
    <div class="items items-container">
        <!-- Appl3s: I can't find a way to make checkboxes enabled by default -->
        <div class="items-layout">
            <!-- <div class="items-jump-list-container">
                <h2>Jump to...</h2>
                <ul class="items-jump-list">
                    <li class="items-jump-list-element-container" v-for="scheme in inventoryStore.schemes">
                        <a class="items-jump-list-element" :href="'#' + scheme.id">{{ scheme.name }}</a>
                    </li>
                </ul>
            </div> -->
            <div class="items-header-container">
                <div class="items-creation-container">
                    <!-- <label for="create-item"></label> -->
                    <input type="button" name="create-item" value="CREATE ITEM">
                </div>
                <div class="items-filters-container">
                    <div class="items-filters-left">
                        ARCHETYPE
                        <label for="hello world"></label>
                        <!-- <input v-for="enumField in " type="checkbox" name="hello world"> -->
                        
                    </div>
                    <div class="items-filters-right">
                        <label for="search-items">Search items</label>
                        <input class="items-search-bar" type="text" name="search-items" placeholder="search">
                    </div>
                </div>
            </div>
            <div class="items-display-container">
                <!-- <button class="items-tabs-expand" @click="toggle_tabs">
                    <span>{{state.expandTabs ? "OPEN" : "CLOSED"}}</span>
                </button> -->
                <div class="items-tabs-container">
                    <div class="items-tab" v-for="scheme in inventoryStore.schemes">
                        <h2 :id="scheme.id" class="table-titles">{{ scheme.name }}</h2>
                    </div>
                </div>
                <div class="items-table-container" v-for="scheme in inventoryStore.schemes">
                    <h2 :id="scheme.id" class="table-titles">ID: {{ scheme.id }} Name: {{ scheme.name }}</h2>
                    <!-- Container for the list of items -->
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th v-for="fieldName in scheme.fieldNames">{{ fieldName }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in scheme.items">
                                <td v-for="field in item">{{ field }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Archetypes go here -->
            <!-- <div class="items-archetypes-container">
            </div>
            -->
        </div>
    </div>
</template>

<style scoped>
@import "../css/items.css";

/* Local Variables */
.items * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;

    --table-horizontal-margin: 0;
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

/***** Items Header Container *****/

/* .items-header-container {

}

.items-creation-container {

} */

/* Filters */

.items-filters-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

/* items-filters-left and items-filters-right (The children, which are divs, of the items-filters-container) */
.items-filters-container>div {
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


/***** Items Display Container *****/

.items-display-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    background-color: var(--aph-light1);
    padding: var(--table-vertical-padding) 1%;
}

.items-display-container > div {
    width: 80%;
    background-color: var(--aph-pink);

}

.items-tabs-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: baseline;
    border: 1px solid red;
}

.items-tab {
    width: 20%;
    border: 1px solid blue;
}

/* Table */

.items-table-container {
    margin: 0 auto;
    /* padding: var(--table-vertical-padding) 1%; */
}

.table-titles {
    color: var(--aph-dark2);
    margin: 0 var(--table-horizontal-margin);
}

.items-table {
    width: 70vw;
    /* TODO: Change the width based off the number of item fields */
    margin: 0 var(--table-horizontal-margin);

    border-collapse: collapse;
}

th {
    padding: var(--table-heading-vertical-padding) 0;
}

td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
}

/* Jump List */
/* .items-jump-list-container {
    position: fixed;
} */

/* .items-jump-list {
} */

/* .items-jump-list-element-container {
} */

/* .items-jump-list-element {
} */

</style>