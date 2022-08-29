<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()

</script>

<template>
<div class="loans loans-container">
    <div class="loans-layout">
        <div class="loans-table-container">
            <h3 id="loans-title">loans.</h3>
            <input id="loans-search" type="text" placeholder="Search..">
            <table class="loans-table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Borrow Date</th>
                    <th>Due Date</th>
                    <th>Return Date</th>
                    <th>Info</th>
                </tr>
                <tr v-for="loan in selfStore.history.loans">
                    <td>1234</td>
                    <td>{{ loan }}</td>
                    <td>Type 1</td>
                    <td>22/02/22</td>
                    <td>22/12/22</td>
                    <td>02/12/22</td>
                    <td>Info about the loan.</td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<style scoped>
.loans * {
    --left-filter-vertical-margin: 12px;
    --filter-horizontal-margin: 15px;

    --table-horizontal-margin: 20px;

    --table-heading-vertical-padding: 28px;

    --table-data-vertical-padding: 14px;
    --table-data-horizontal-padding: 12px;
}

/* TODO: make the table take up the remaining space */
.loans-layout {
    --filter-table-gap-size: 0;

    display: grid;
    grid-template: auto auto / auto;
    gap: var(--filter-table-gap-size);
}

#loans-title {
    font-family: "Montserrat";
    font-size: 28pt;
    font-weight: bold;
    color: var(--aph-purple);
    padding-left: 25px;
    margin-bottom: 10px;
}

#loans-search {
    padding-right: 30px;
    margin-left: 25px;
    margin-bottom: 15px;
    font-size: 16px;
}


/* Filters */

/* .loans-filters-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: var(--aph-back2);
} */

/* loans-filters-left and loans-filters-right (The children, which are divs, of the loans-filters-container) */
/* .loans-filters-container > div {
    display: inline-flex;
    flex-flow: row nowrap;
} */

/* .loans-filters-left {
    justify-content: space-between;
    align-items: center;
    margin: var(--left-filter-vertical-margin) 0;
} */

/* .loans-filters-right {
} */

/* .loans-filter {
    margin: auto var(--filter-horizontal-margin);
} */

/* Jump List */
/* .loans-jump-list-container {
    position: fixed;
    background-color: var(--aph-back2);
} */

/* .loans-jump-list {
} */

/* .loans-jump-list-element-container {
} */

/* .loans-jump-list-element {
} */

/* Table */

.loans-table-container {
    margin: 0 auto;
    background-color: var(--aph-back1);
}

.loans-table {
    width: 70vw; /* TODO: Change the width based off the number of item fields */
    margin: 0 var(--table-horizontal-margin);

    border: solid var(--aph-grey) 3px;
    border-radius: 5px;
}

th {
    padding: var(--table-heading-vertical-padding) 0;
    
}

td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);

}

li {
    margin: 20px 50px;
    border: solid red 1px;
}
</style>