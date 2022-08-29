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
            <div id="loans-table-border-container">
                <table class="loans-table">
                <tr>
                    <th><a href="#">ID</a></th>
                    <th><a href="#">Name</a></th>
                    <th><a href="#">Type</a></th>
                    <th><a href="#">Borrow Date</a></th>
                    <th><a href="#">Due Date</a></th>
                    <th><a href="#">Return Date</a></th>
                    <th><a href="#">Info</a></th>
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
    margin-bottom: 10px;
}

#loans-search {
    padding-right: 200px;
    margin-bottom: 15px;
    font-size: 16px;
    font-family: Montserrat;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    border: 2px solid var(--aph-grey);
    background-color: rgba(200, 200, 200, 0.2);
}

/* Table */

.loans-table-container {
    margin: 0 auto;
    background-color: var(--aph-back1);
}

#loans-table-border-container {
    border: 4px solid var(--aph-grey);
    border-radius: 10px;
}

.loans-table {
    width: 70vw;
    border-collapse: collapse;
}

.loans-table tr th a {
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    color: var(--aph-text-dark);
    transition: 0.2s;
}

.loans-table tr th a:hover {
    text-decoration-color: rgba(45, 28, 77, 1);
    color: var(--aph-purple)
}

.loans-table th {
    padding: var(--table-heading-vertical-padding) 0;
    border-bottom: 0.15em solid var(--aph-grey);
}

.loans-table th:not(:last-child) {
    border-right: 0.15em solid var(--aph-grey);
}

.loans-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    border-bottom: 0.1em solid var(--aph-grey);
}

.loans-table td:not(:last-child) {
    border-right: 0.15em solid var(--aph-grey);
}
</style>