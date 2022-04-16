<script setup>
import { useItems } from '../store/useItems'
import { useArchetypes } from '../store/useArchetypes'

const itemStore = useItems()
const archetypeStore = useArchetypes()

window.onload = function() {
    // Request all the archetypes from the faculty
    // Request all the items for each archetype from the faculty
    // Parse the items
    // Display the items
}

let headingIndex = 0
let tempScheme = archetypeStore.tempScheme
let tempItems = itemStore.tempItems
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
        <h2>Items</h2>
        <!-- Appl3s: I can't find a way to make checkboxes enabled by default -->
        <div class="items-layout">
            <!-- Archetypes go here -->
            <!-- <div class="items-archetypes-container">
                
            </div>
            -->
            <div class="items-filters-container">
                <!-- Sorting, searching and filtering -->
                <div class="items-filters-left">
                    <!-- Select whether to whitelist or blacklist the following list -->
                    <select class="items-" name="items-whitelist">
                        <option value="whitelist">Whitelist (Show only...)</option>
                        <option value="blacklist">Blacklist (Hide only...)</option>
                    </select>
        
                    <!-- List of items to filter according to the above select -->
                    <ul class="items-filter items-type-filter-container">
                        <!-- Generate list of archetypes here -->
                        <li>
                            <label class="items-type-filter" for="items-archetype-type">Archetype Type</label>
                            <input class="items-type-filter" type="checkbox" name="items-archetype-type">
                        </li>
                        <li>
                            <label class="items-type-filter" for="items-archetype-type">Archetype Type</label>
                            <input class="items-type-filter" type="checkbox" name="items-archetype-type">
                        </li>
                        <li>
                            <label class="items-type-filter" for="items-archetype-type">Archetype Type</label>
                            <input class="items-type-filter" type="checkbox" name="items-archetype-type">
                        </li>
                    </ul>
        
                    <!-- I don't know -->
                    <!-- <select class="items-filter" name="item-field-to-sort-by"> -->
                        <!-- Generate Item fields here-->
                        <!-- <option value="temp">field</option>
                        <option value="temp">field</option>
                    </select> -->
                </div>
                <div class="items-filters-right">
                    <div>
                        <label class="items-filter" for="items-show-internal-id">Show Internal ID</label>
                        <input class="items-filter" type="checkbox" name="items-show-internal-id">
                    </div>
        
                    <!-- Searching -->
                    <input class="items-filter" type="text" name="items-search" placeholder="Search">
                </div>
            </div>
            <div class="items-table-container">
                <!-- Container for the list of items -->
                <table class="items-table">
                    <tr>
                        <th v-for="heading in tempScheme">{{ heading }}</th>
                    </tr>
                    <tr v-for="item in tempItems">
                        <td>{{ item[tempScheme[0]] }}</td>
                        <td>{{ item[tempScheme[1]] }}</td>
                        <td>{{ item[tempScheme[2]] }}</td>
                        <td>{{ item[tempScheme[3]] }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    background-color: var(--aph-dark2);
}

/* items-filters-left and items-filters-right (The children, which are divs, of the items-fileters-container) */
.items-filters-container > div {
    display: inline-flex;
    flex-flow: row nowrap;
    border: 1px solid blue;
}

.items-filters-left {
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
}

/* .items-filters-right {
} */

.items-filter {
    margin: auto 15px;
    border: 1px solid pink;
}


/* Table */

.items-table-container {
    background-color: var(--aph-dark1a);
    margin: 0 auto;
}

.items-table {
    padding: 10px;
    width: 60vw;
    margin: 0 20px;
    
    border-collapse: collapse;
}

th {
    padding: 28px 0;
    background-color: var(--aph-dark2a);

}

td {
    padding: 14px 12px;
    background-color: var(--aph-dark3a);

}
</style>