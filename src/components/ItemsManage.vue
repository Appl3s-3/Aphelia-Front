<script setup>
import { reactive } from 'vue'
import { useInventory } from '../store/useInventory'
import { itemsLocal } from '../store/itemsLocal'

import ManageBody from './ManageBody.vue'
import ManageOptions from './ManageOptions.vue'

const itemsSt = itemsLocal()

</script>

<template>
<div id="manage-menu-container" v-if="itemsSt.manage_state">
    <div id="manage-menu" v-if="itemsSt.manage_state">
        <div class="manage-menu-division" id="manage-menu-header">
            <h2>Manage Items</h2>
            <!-- TODO: -->
            <input type="button" name="close-manage" value="x" @click="itemsSt.hide_manage()">
        </div>
        <ManageOptions class="manage-menu-division"/>
        <ManageBody class="manage-menu-division"/>
        <div class="manage-menu-division" id="manage-menu-footer">
            <input class="manage-menu-button manage-menu-button-deny" type="button" name="reset-manage" value="Reset" @click="">
            <input class="manage-menu-button manage-menu-button-confirm" type="button" name="save-manage" value="Save" @click="">
        </div>
    </div>
</div>
</template>

<style scoped>
#manage-menu-container {
    background-color: var(--aph-greya);
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

    background-color: var(--aph-back1);
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

/**** Manage Menu Footer ****/
#manage-menu-footer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}





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
