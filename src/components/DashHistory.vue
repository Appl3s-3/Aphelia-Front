<script setup>
</script>

<template>
<div>
    <h3>Loan History</h3>
    <table class="dash-history-table">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Info</th>
            <th>Returned</th>
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
</template>

<style scoped>
.dash-history-table {
    width: 100%;
    height: 75%;
    /*border-collapse: collapse;*/
    background-color: var(--aph-back1);
    border: 4px solid var(--aph-grey);
    border-radius: 10px;
}

.dash-history-table th {
    padding: var(--table-heading-vertical-padding) 0;
}

.dash-history-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    color: (--aph-grey);
    text-align: center;
}
</style>