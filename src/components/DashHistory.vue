<script setup>
</script>

<template>
<div>
    <h3>Loan History</h3>
    <table class="dash-history-table">
        <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Info</th>
            <th>Returned</th>
        </tr>
        <tr>
            <td>Icon</td>
            <td>1</td>
            <td>Item Name</td>
            <td>How does this fit?</td>
            <td>8/4/22</td>
        </tr>
        <tr>
            <td>Icon</td>
            <td>2</td>
            <td>Item Name</td>
            <td>How does this fit?</td>
            <td>8/4/22</td>
        </tr>
    </table>
</div>
</template>

<style scoped>
.dash-history-table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--aph-back2);
}

.dash-history-table th {
    padding: var(--table-heading-vertical-padding) 0;
    background-color: var(--aph-fore1);
}

.dash-history-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
}
</style>