<script setup>
import { useHistory } from '../store/useHistory'

const historyStore = useHistory()

let loans = historyStore.loans

</script>

<template>
    <div class="loans loans-container">
        <h2 class="apheleia">Loans Archive</h2>
        <div class="loans-layout">
            <div class="loans-table-container">
                <table class="loans-table">
                    <th>
                        <td>
                            Loan Name
                        </td>
                    </th>
                    <tr v-for="loan in loans">
                        <td>{{ loan }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../css/loans.css";

/* Local Variables */
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


/* Filters */

.loans-filters-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
}

/* loans-filters-left and loans-filters-right (The children, which are divs, of the loans-filters-container) */
.loans-filters-container > div {
    display: inline-flex;
    flex-flow: row nowrap;
}

.loans-filters-left {
    justify-content: space-between;
    align-items: center;
    margin: var(--left-filter-vertical-margin) 0;
}

/* .loans-filters-right {
} */

.loans-filter {
    margin: auto var(--filter-horizontal-margin);
}

/* Jump List */
.loans-jump-list-container {
    position: fixed;
}

/* .loans-jump-list {
} */

/* .loans-jump-list-element-container {
} */

/* .loans-jump-list-element {
} */

/* Table */

.loans-table-container {
    margin: 0 auto;
}

.loans-table {
    width: 70vw; /* TODO: Change the width based off the number of item fields */
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