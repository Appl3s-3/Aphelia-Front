<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'

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
            <div id="manage-menu-container" v-if="state.showManageMenu">
                <div id="manage-menu" v-if="state.showManageMenu">
                    <div class="manage-menu-division" id="manage-menu-header">
                        <h2>Manage Items</h2>
                        <!-- TODO: -->
                        <input type="button" name="close-manage" value="x" @click="state.showManageMenu = false">
                    </div>
                    <div class="manage-menu-division" id="manage-menu-options">
                        <span id="manage-menu-options-left">
                            <span>
                                <label for="show-remove">Show Remove Button</label>
                                <input type="checkbox" name="show-remove">
                            </span>
                        </span>
                        <span id="manage-menu-options-right">
                            <input type="button" name="manage-menu-help" value="?" @click="">
                        </span>
                    </div>
                    <div class="manage-menu-division" id="manage-menu-body">
                        <div id="manage-archetypes-list-container">
                            <!-- TODO: Scrollable -->
                            <ul id="manage-archetypes-list">
                                <li class="manage-archetypes-list-item" v-for="scheme in inventoryStore.schemes" @click="state.manageScheme = scheme">
                                    <!-- TODO: CSS highlight when a LI is selected-->
                                    <span class="manage-archetypes-archetype-name">{{ scheme.name }}</span>
                                    <input class="manage-archetypes-modify-archetype-button" type="button" name="modify-archetype" value="[Cogwheel icon]" @click="">
                                </li>
                                <!-- TODO: Remove this TODO, the following is the end of the list, make it work (it adds archetypes) -->
                                <li id="manage-archetypes-create-archetype-button-container">
                                    <input id="manage-archetypes-create-archetype-button" type="button" name="create-archetype" value="+" @click="">
                                </li>
                            </ul>
                        </div>
                        <div id="manage-items-table-container">
                            <!-- TODO: Scrollable -->
                            <table id="manage-items-table">
                                <thead>
                                    <tr>
                                        <th v-for="fieldName in state.manageScheme.fieldNames">{{ fieldName }}</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in state.manageScheme.items">
                                        <td class="manage-items-item-data" v-for="field in item">{{ field }}</td>
                                        <td>
                                            <!-- TODO: Dropdown item history -->
                                            <input class="manage-items-item-history" type="checkbox" name="display-item-history">
                                            <!-- TODO: Show the delete button if a checkbox is checked -->
                                            <input class="manage-items-delete-item-button" type="button" name="delete-item" value="x" v-if="true" @click="">
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <input type="button" name="create-item" value="+" @click="">
                                        <input type="button" name="create-items-bulk" value="+++" @click="">
                                    </tr>
                                </tfoot>
                            </table>
                            <!-- <ul class="manage-items-list">
                                <li class="manage-items-list-item" v-for="item in state.manageScheme.items"> -->
                                <!-- TODO: Upon clicking the li, the data fields of the item become managable-->
                                    <!-- <span class="manage-items-item-data" v-for="data in item">{{ data }}</span> -->
                                    <!-- TODO: Dropdown item history -->
                                    <!-- <input class="manage-items-item-history" type="checkbox" name="display-item-history"> -->
                                    <!-- TODO: Show the delete button if a checkbox is checked -->
                                    <!-- <input class="manage-items-delete-item-button" type="button" name="delete-item" value="x" v-if="true" @click=""> -->
                                <!-- </li>
                                <li>
                                    <input type="button" name="create-item" value="+" @click="">
                                    <input type="button" name="create-items-bulk" value="+++" @click="">
                                </li>
                            </ul> -->
                        </div>
                    </div>
                    <div class="manage-menu-division" id="manage-menu-footer">
                        <input class="manage-menu-button manage-menu-button-deny" type="button" name="reset-manage" value="Reset" @click="">
                        <input class="manage-menu-button manage-menu-button-confirm" type="button" name="save-manage" value="Save" @click="">
                    </div>
                </div>
            </div>
            <div id="manage-confirm-menu-container" v-if="state.showConfirmMenu">
                <div class="manage-confirm-menu manage-delete-item-menu" v-if="state.showDeleteItemMenu">
                    <p>Are you sure you want to <em class="text-warning">delete</em> this item? <i>(This action cannot be undone!)</i></p>
                    <!-- TODO: Show the item here -->
                    <div class="manage-confirm-menu-options">
                        <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                        <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Delete" @click="">
                    </div>
                </div>
                <div class="manage-confirm-menu manage-delete-archetype-menu" v-if="state.showDeleteArchetypeMenu">
                    <!-- TODO: Rename Archetype -->
                    <p>Are you sure you want to <em class="text-warning">delete</em> this archetype? <em class="text-warning">Warning: This will delete all items of that type. A total of {{ 50 }} items will be deleted.</em> <i>(This action cannot be undone!)</i></p>
                    <div class="manage-confirm-menu-options">
                        <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                        <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="I understand the consequences" @click="">
                    </div>
                </div>
                <div class="manage-confirm-menu manage-delete-archetype-second-menu" v-if="state.showDeleteArchetypeSecondMenu">
                    <p>This will <em class="text-warning">delete</em> {{ 50 }} items from the inventory. Are you really sure? <i>(This action cannot be undone!)</i></p>
                    <div class="manage-confirm-menu-options">
                        <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                        <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Delete" @click="">
                    </div>
                </div>
                <div class="manage-confirm-menu manage-reset-menu" v-if="state.showResetMenu">
                    <p>Are you sure you want to <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
                    <!-- TODO: Make this work-->
                    <label for="view-items-manage-changes">View Changes</label>
                    <input type="checkbox" name="view-items-manage-changes">
                    <div class="manage-confirm-menu-options">
                        <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                        <span class="manage-confirm-menu-options-exit">
                            <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset" @click="">
                            <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset and Exit" @click="">
                        </span>
                    </div>
                </div>
                <div class="manage-confirm-menu manage-save-menu" v-if="state.showSaveMenu">
                    <p>Are you sure you want to <em class="text-highlight">save</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
                    <!-- TODO: Make this work-->
                    <label for="view-items-manage-changes">View Changes</label>
                    <input type="checkbox" name="view-items-manage-changes">
                    <div class="manage-confirm-menu-options">
                        <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                        <span class="manage-confirm-menu-options-exit">
                            <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save" @click="">
                            <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save and Exit" @click="">
                        </span>
                    </div>
                </div>
                <div class="manage-confirm-menu manage-exit-menu" v-if="state.showExitMenu">
                    <p>You have not saved your changes. Would you like to <em class="text-highlight">save</em> or <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
                    <!-- TODO: Make this work-->
                    <label for="view-items-manage-changes">View Changes</label>
                    <input type="checkbox" name="view-items-manage-changes">
                    <div class="manage-confirm-ternary-menu-options">
                        <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                        <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset" @click="">
                        <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save" @click="">
                    </div>
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
                <div class="items-table-container">
                    <table class="items-table">
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

/***** Items Header Container *****/
@import "../css/itemsHeader.css";

/***** Manage Menu *****/
@import "../css/itemsManage.css";

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
</style>