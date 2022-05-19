<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'

const inventoryStore = useInventory()

let fieldToSort = []


const state = reactive({
    activeScheme: inventoryStore.schemes[0],
    manageScheme: inventoryStore.schemes[0],
    expandTabs: false,
    displayManageMenu: true
})

const findScheme = (schemeID) => {
    // Loop through inventoryStore and find the index of the scheme with schemeID = scheme.id
    let i = 0
    for (; i < inventoryStore.schemes.length; ++i) {
        if (inventoryStore.schemes[i].id == schemeID) {
            break
        }
    }
    return i
}

const setActiveScheme = (schemeID) => {
    // Set state.activeScheme using findScheme
    let index = findScheme(schemeID)
    state.activeScheme = inventoryStore.schemes[index];
}



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
                <!-- <div class="items-manage-container"> -->
                    <input type="button" name="manage-item" value="Manage Items" @click="">
                <!-- </div> -->
                <div class="items-manage-menu" v-if="displayManageMenu">
                    <div class="items-manage-menu-header">
                        <h2>Manage Items</h2>
                        <!-- TODO: -->
                        <input type="button" name="close-manage" value="x" @click="">
                    </div>
                    <div class="items-manage-menu-options">
                        <label for="show-remove">Show Remove Button</label>
                        <input type="checkbox" name="show-remove">
                        <input type="button" name="manage-menu-help" value="?" @click="">
                    </div>
                    <div class="items-manage-menu-body">
                        <div class="items-manage-archetypes-list-container">
                            <!-- TODO: Scrollable -->
                            <ul class="items-manage-archetypes-list">
                                <li v-for="scheme in inventoryStore.schemes">
                                    <h3>{{ scheme.name }}</h3>
                                    <input type="button" name="modify-archetype" value="[Cogwheel icon]" @click="">
                                </li>
                                <!-- TODO: Remove this TODO, the following is the end of the list, make it work (it adds archetypes) -->
                                <li>
                                    <input type="button" name="create-archetype" value="+" @click="">
                                </li>
                            </ul>
                        </div>
                        <div class="items-manage-items-list-container">
                            <!-- TODO: Scrollable -->
                            <ul class="items-manage-items-list">
                                <li class="items-manage-items-list-item" v-for="item in manageScheme.items">
                                <!-- TODO: Upon clicking the li, the data fields of the item become managable-->
                                    <span v-for="data in item">{{ data }}</span>
                                    <!-- TODO: Dropdown item history -->
                                    <input type="checkbox" name="display-item-history">
                                    <!-- TODO: Show the delete button if a checkbox is checked -->
                                    <input type="button" name="delete-item" value="x" v-if="true" @click="">
                                </li>
                                <li>
                                    <input type="button" name="create-item" value="+" @click="">
                                    <input type="button" name="create-items-bulk" value="+++" @click="">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="items-manage-menu-submit-container">
                        <input type="button" name="reset-manage" value="Reset" @click="">
                        <input type="button" name="save-manage" value="Save" @click="">
                    </div>
                    <!-- TODO: Open up confirm menus
                    The following are a bunch of popup menus-->
                    <div class="items-manage-confirm-menu items-manage-delete-item-menu">
                        <p>Are you sure you want to <em class="text-warning">delete</em> this item? <i>(This action cannot be undone!)</i></p>
                        <!-- TODO: Show the item here -->
                        <div class="items-manage-confirm-menu-options items-manage-delete-item-menu-options">
                            <span>Back</span>
                            <span>Delete</span>
                        </div>
                    </div>
                    <div class="items-manage-confirm-menu items-manage-delete-archetype-menu">
                        <!-- TODO: Rename Archetype -->
                        <p>Are you sure you want to <em class="text-warning">delete</em> this archetype? <em class="text-warning">Warning: This will delete all items of that type. A total of {{ 50 }} items will be deleted.</em> <i>(This action cannot be undone!)</i></p>
                        <div class="items-manage-confirm-menu-options items-manage-delete-archetype-menu-options">
                            <span>Back</span>
                            <span>I understand the consequences</span>
                        </div>
                    </div>
                    <div class="items-manage-confirm-menu items-manage-delete-archetype-second-menu">
                        <p>This will <em class="text-warning">delete</em> {{ 50 }} items from the inventory. Are you really sure? <i>(This action cannot be undone!)</i></p>
                        <div class="items-manage-confirm-menu-options items-manage-delete-archetype-second-menu-options">
                            <span>Back</span>
                            <span>Delete</span>
                        </div>
                    </div>
                    <div class="items-manage-confirm-menu items-manage-reset-menu">
                        <p>Are you sure you want to <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
                        <!-- TODO: Make this work-->
                        <label for="view-items-manage-changes">View Changes</label>
                        <input type="checkbox" name="view-items-manage-changes">
                        <div class="items-manage-confirm-menu-options items-manage-reset-menu-options">
                            <span>Back</span>
                            <span>Reset</span>
                            <span>Reset and Exit</span>
                        </div>
                    </div>
                    <div class="items-manage-confirm-menu items-manage-save-menu">
                        <p>Are you sure you want to <em class="text-highlight">save</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
                        <!-- TODO: Make this work-->
                        <label for="view-items-manage-changes">View Changes</label>
                        <input type="checkbox" name="view-items-manage-changes">
                        <div class="items-manage-confirm-menu-options items-manage-save-menu-options">
                            <span>Back</span>
                            <span>Save</span>
                            <span>Save and Exit</span>
                        </div>
                    </div>
                    <div class="items-manage-confirm-menu items-manage-exit-menu">
                        <p>You have not saved your changes. Would you like to <em class="text-highlight">save</em> or <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
                        <!-- TODO: Make this work-->
                        <label for="view-items-manage-changes">View Changes</label>
                        <input type="checkbox" name="view-items-manage-changes">
                        <div class="items-manage-confirm-menu-options items-manage-exit-menu-options">
                            <span>Back</span>
                            <span>Reset</span>
                            <span>Save</span>
                        </div>
                    </div>
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
                <ul class="items-tabs-container">
                    <li class="items-tab" v-for="scheme in inventoryStore.schemes">
                        <h2 :id="scheme.id" class="items-tab-text" @click="setActiveScheme(scheme.id)">{{ scheme.name }}</h2>
                    </li>
                </ul>
                <div class="items-table-container">
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th v-for="fieldName in state.activeScheme.fieldNames">{{ fieldName }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in state.activeScheme.items">
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
*/
.items-creation-container {
    display: flex;
    flex-flow: row nowrap;

}

/***** Filters *****/

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

/***** Tabs *****/

.items-tabs-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: baseline;
    border: 3px solid green;
}

.items-tab {
    width: 20%;
    border: 1px solid blue;
}

.items-tab:hover {
    background-color: var(--aph-light2);
}

/***** Items Display Container *****/

.items-display-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    background-color: var(--aph-light3);
    padding: var(--display-vertical-padding) var(--display-horizontal-padding);
}

.items-display-container > div {
    width: var(--display-content-width);
}


/* Table */

.items-table-container {
    margin: 0;
    border: var(--table-container-border-width) solid var(--aph-border);
    border-radius: var(--table-container-border-radius);
    padding: var(--table-vertical-padding) var(--table-horizontal-padding);
}

.table-titles {
    margin: 0 var(--table-horizontal-margin);
}

.items-table {
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