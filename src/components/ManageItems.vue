<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'
import { itemsLocal } from '../store/itemsLocal'

const itemsSt = itemsLocal()

</script>

<template>
    <div id="manage-menu-container" v-if="itemsSt.manage_state()">
        <div id="manage-menu" v-if="itemsSt.manage_state()">
            <div class="manage-menu-division" id="manage-menu-header">
                <h2>Manage Items</h2>
                <!-- TODO: -->
                <input type="button" name="close-manage" value="x" @click="itemsSt.hide_manage()">
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
</template>

<style scoped>
@import "../css/itemsManage.css";

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

#manage-menu-container {
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}

#manage-menu {
    display: grid;
    grid: var(--header-height) var(--options-height) var(--body-height) var(--footer-height) / auto;
    z-index: 100;
    position: fixed;
    width: var(--menu-width);
    height: var(--menu-height);
    left: var(--menu-left);
    top: var(--menu-top);
}

.manage-menu-division {
    border: 1px solid aqua;
}

/**** Manage Menu Header ****/
#manage-menu-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

/**** Manage Menu Options ****/
#manage-menu-options {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

#manage-menu-options-left {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

#manage-menu-options-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

/**** Manage Menu Body ****/
#manage-menu-body {
    display: grid;
    grid: auto / var(--body-archetype-width) var(--body-items-width);
    margin: var(--body-vertical-margin) var(--body-horizontal-margin);
}

/*** Manage Archetypes ***/
#manage-archetypes-list-container {
    border: var(--archetypes-list-border-width) solid var(--aph-border);
    border-radius: var(--archetypes-list-border-radius);
    overflow: auto;
}

/* .manage-archetypes-list {
} */

.manage-archetypes-list-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: 0;
    border: 1px solid var(--aph-border);
}

/* .manage-archetypes-archetype-name {
} */

.manage-archetypes-modify-archetype-button {
    display: inline;
}

#manage-archetypes-create-archetype-button-container {
    margin: 0;
    width: 100%;
}

#manage-archetypes-create-archetype-button {
    width: 100%;
}

/*** Items Manage Items ***/
#manage-items-table-container {
    border: 1px solid var(--aph-border);
    overflow: auto;
}

/* #manage-items-table {

} */

.manage-items-item-data {
    margin: 0;
    padding: 0;
}

/* .manage-items-item-history {

}

.manage-items-delete-item-button {

} */

/**** Manage Menu Footer ****/
#manage-menu-footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

/***** Manage Menu Buttons */
.manage-menu-button {
    height: 100%;
    width: 30%;
}

/* .manage-menu-button-confirm {
}

.manage-menu-button-deny {
}

.manage-menu-button-grey {
} */

/***** Manage Sub Menus *****/
.manage-confirm-menu-container {
    z-index: 101;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
}

.manage-confirm-menu {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    z-index: 102;
    position: fixed;
    width: 50vw;
    height: 40vh;
    left: 25vw;
    top: 30vh;
}

/* Options at the bottom of the confirm menus */
.manage-confirm-menu-options {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
}

/* Options at the bottom right of the confirm menus (eg Save / Save and Exit) */
/* .manage-confirm-menu-options-exit {
} */

/* Back / Reset / Save */
.manage-confirm-ternary-menu-options {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
}
</style>
