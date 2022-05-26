<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'
import ManageMenu from '../components/ManageItems.vue'

const inventoryStore = useInventory()

const state = reactive({
    tabbedScheme: inventoryStore.schemes[0],
    manageScheme: inventoryStore.schemes[0],
    expandFilters: false,
    expandTabs: false,
    showManageMenu: false,
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
    <div class="items items-container">
        <div class="items-layout">
            <div id="items-header-container">
                <div class="items-filters-toggle-container">
                    <label for="expand-filters">{{ state.expandFilters == true ? "Hide Filters" : "Show Filters" }}</label>
                    <input type="checkbox" name="expand-filters" @click="state.expandFilters = !state.expandFilters">
                    <div class="items-filters-container" v-if="state.expandFilters">
                        <div class="items-filters-left">
                            <span>
                                Loaned in the past n days (insert slider here)
                            </span>
                            <span>
                                (insert other filters here)
                            </span>
                        </div>
                        <div class="items-filters-right">
                            <input class="items-filter items-search-bar" type="text" name="search-items" placeholder="Search Name">
                        </div>
                    </div>
                </div>
                <div id="items-manage-container">
                    <input id="items-manage-menu-button" type="button" name="manage-item" value="Manage Items" @click="state.showManageMenu = !state.showManageMenu">
                </div>
            </div>
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

            <!-- Archetypes go here -->
            <!-- <div class="items-archetypes-container">
            </div>
            -->
        </div>
    </div>
</template>

<style scoped>
@import "../css/items.css";

/***** Items Header Container *****/
@import "../css/itemsHeader.css";

/***** Manage Menu *****/
@import "../css/itemsManage.css";

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

#manage-menu {
    --menu-width: 90vw;
    --menu-height: 90vh;
    --menu-left: 5vw;
    --menu-top: 5vh;

    --header-height: 5%;
    --options-height: 6%;
    --body-height: 84%;
    --footer-height: 5%;
}

#manage-menu * {
    --body-vertical-margin: 1em;
    --body-horizontal-margin: 0;

    --body-archetype-width: 40%;
    --body-items-width: 60%;
    
    --archetypes-list-border-width: 0.1em;
    --archetypes-list-border-radius: 1em;
}

.items-layout {
    --filter-table-gap-size: 0;

    display: grid;
    grid-template: auto auto / auto;
    gap: var(--filter-table-gap-size);
}


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