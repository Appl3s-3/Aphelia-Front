<script setup>
</script>

<template>
<div id="manage-menu-body">
    <ul id="archetypes-list">
        <!-- TODO: Scrollable -->
        <li v-for="scheme in inventoryStore.schemes" @click="state.manageScheme = scheme">
            <!-- TODO: CSS highlight when a LI is selected-->
            <span class="archetype-name">{{ scheme.name }}</span>
            <input class="modify-archetype-button" type="button" name="modify-archetype" value="[Cogwheel icon]" v-if="true /* if hovered */" @click="">
        </li>
        <!-- TODO: Remove this TODO, the following is the end of the list, make it work (it adds archetypes) -->
        <li id="create-archetype-button-container">
            <input id="create-archetype-button" type="button" name="create-archetype" value="+" @click="">
        </li>
    </ul>
    <!-- TODO: Consider making this a list so that there can be a drop down for item history -->
    <table id="items-table">
        <!-- TODO: Scrollable -->
        <thead>
            <tr>
                <th v-for="fieldName in state.manageScheme.fieldNames">{{ fieldName }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in state.manageScheme.items">
                <td class="item-data" v-for="field in item">{{ field }}</td>
                <td>
                    <!-- TODO: Dropdown item history -->
                    <input class="item-history" type="checkbox" name="display-item-history">
                    <!-- TODO: Show the delete button if a checkbox is checked -->
                    <input class="delete-item-button" type="button" name="delete-item" value="x" v-if="true" @click="">
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
</template>

<style scoped>
#manage-menu-body {
    display: grid;
    grid: auto / var(--body-archetype-width) var(--body-items-width);
    margin: var(--body-vertical-margin) var(--body-horizontal-margin);
}

/*** Manage Archetypes ***/
.archetypes-list {
    border: var(--archetypes-list-border-width) solid var(--aph-border);
    border-radius: var(--archetypes-list-border-radius);
    overflow: auto;
}

.archetypes-list > li {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: 0;
    border: 1px solid var(--aph-border);
}

/* .archetype-name {
} */

.modify-archetype-button {
    display: inline;
}

#create-archetype-button-container {
    margin: 0;
    width: 100%;
}

#create-archetype-button {
    width: 100%;
}

/*** Items Manage Items ***/
#manage-items-table {
    border: 1px solid var(--aph-border);
    overflow: auto;
}

.item-data {
    margin: 0;
    padding: 0;
}

/* .item-history {
}

.delete-item-button {
} */
</style>