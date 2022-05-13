<script setup>
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

</script>

<template>
    <div class="items items-container">
        <!-- Appl3s: I can't find a way to make checkboxes enabled by default -->
        <div class="items-layout">
            <div class="items-jump-list-container">
                <h2>Jump to...</h2>
                <ul class="items-jump-list">
                    <li class="items-jump-list-element-container" v-for="scheme in inventoryStore.schemes">
                        <a class="items-jump-list-element" :href="'#' + scheme.id">{{ scheme.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="items-filters-container">
                <div class="items-filters-left">
                    ARCHETYPE
                    <label for="hello world">hi</label>
                    <input v-for="enumField in " type="checkbox" name="hello world">
                    
                </div>
                <div class="items-filters-right">
                    FIELD TO SEARCH
                    SEARCH
                </div>
            </div>
            <div class="items-display-container">
                <div class="items-tabs-container">
                    <div class="items-tab" v-for="scheme in inventoryStore.schemes">
                        <h2 :id="scheme.id" class="table-titles">ID: {{ scheme.id }} Name: {{ scheme.name }}</h2>
                    </div>
                </div>
            </div>
            <!-- <div class="items-table-container" v-for="scheme in inventoryStore.schemes">
                <h2 :id="scheme.id" class="table-titles">ID: {{ scheme.id }} Name: {{ scheme.name }}</h2> -->
                <!-- Container for the list of items -->
                <!-- <table class="items-table">
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
            </div> -->

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

.items-display-container {
    background-color: var(--aph-light2);
    height: 100px;
    position: absolute;
    top: 500px;
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
</style>