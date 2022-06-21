<script setup>
import { reactive } from 'vue'
import { itemsLocal } from '../store/itemsLocal'

const itemsSt = itemsLocal()

</script>

<template>
    <div id="items-header-container">
        <div class="items-filters-toggle-container">
            <label for="expand-filters">{{ itemsSt.filter_state() == true ? "Hide Filters" : "Show Filters" }}</label>
            <input type="checkbox" name="expand-filters" @click="itemsSt.toggle_filters()">
            <div class="items-filters-container" v-if="itemsSt.filter_state()">
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
            <input id="items-manage-menu-button" type="button" name="manage-item" value="Manage Items" @click="itemsSt.show_manage()">
        </div>
    </div>
</template>

<style scoped>
.items * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;
}

#items-header-container {
    display: grid;
    grid: auto / 80% 20%;
}

/**** Items Filters ****/
/* .items-filters-toggle-container {
} */

.items-filters-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: baseline;
}

.items-filters-left {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: var(--left-filter-vertical-margin) 0;
}

.items-filters-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

.items-filter {
    margin: auto var(--filter-horizontal-margin);
}

.items-search-bar {
    text-align: right;
}

/**** Items Manage Menu Container *****/
#items-manage-container {
    display: flex;
    flex-flow: row nowrap;
}

/* #items-manage-menu-button {
} */
</style>