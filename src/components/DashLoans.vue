<script setup>
</script>

<template>
    <div>
        <h3>Current Loans</h3>
        <table class="dash-loans-table">
            <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Info</th>
                <th>Due</th>
            </tr>
            <!--
            TODO: If the due date is within the next 3 days, make the table row yellow
            TODO: If the due date has passed, make the table row red
            -->
            <tr>
                <td>Icon</td>
                <td>1</td>
                <td>Item Name</td>
                <td>How does this fit?</td>
                <td>8/4/22</td>
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
                <td>1</td>
                <td>Item Name</td>
                <td>How does this fit?</td>
                <td>8/4/22</td>
            </tr>
            <tr>
                <td>Icon</td>
                <td>1</td>
                <td>Item Name</td>
                <td>How does this fit?</td>
                <td>8/4/22</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.dash-loans-table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--aph-back2);
}

.dash-loans-table th {
    padding: var(--table-heading-vertical-padding) 0;
    background-color: var(--aph-fore1);
}

.dash-loans-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
}
</style>