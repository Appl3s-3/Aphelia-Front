<script setup>
</script>

<template>
<div>
    <h3>Loan History</h3>
    <div id="dash-history-table-wrapper">
        <table class="dash-history-table">
        <tr id="dash-history-table-header">
            <th><a href="#">ID</a></th>
            <th><a href="#">name</a></th>
            <th><a href="#">info</a></th>
            <th><a href="#">returned</a></th>
        </tr>
        <tr>
            <td>1</td>
            <td>Red Brambleback</td>
            <td>It's red and it growls.</td>
            <td>8/4/22</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Blue Sentinel</td>
            <td>It's blue and it stands.</td>
            <td>16/5/22</td>
        </tr>
    </table>
    </div>
</div>
</template>

<style scoped>
#dash-history-table-wrapper {
    height: 100%;
    border: 4px solid var(--aph-grey);
    border-radius: 10px;
}

.dash-history-table {
    width: 100%;
    border-collapse: collapse;
}

.dash-history-table th {
    padding: var(--table-heading-vertical-padding) 0;
    border-bottom: 0.15em solid var(--aph-grey);
}

.dash-history-table th:not(:last-child) {
    border-right: 0.15em solid var(--aph-grey);
}

.dash-history-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    text-align: center;
    border-bottom: 0.1em solid var(--aph-grey);
}

.dash-history-table td:not(:last-child) {
    border-right: 0.15em solid var(--aph-grey);
}

#dash-history-table-header {
    height:20px;
}

.dash-history-table tr th a {
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    color: var(--aph-text-dark);
    transition: 0.2s;
}

.dash-history-table tr th a:hover {
    text-decoration-color: rgba(45, 28, 77, 1);
    color: var(--aph-purple)
}
</style>