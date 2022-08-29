<script setup>
</script>

<template>
    <div>
        <h3>Current Loans</h3>
        <table class="dash-loans-table">
            <tr>
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
                <td>1</td>
                <td>Sabre</td>
                <td>A fencing Sabre.</td>
                <td>17/6/22</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Sabre</td>
                <td>A fencing Sabre.</td>
                <td>18/6/22</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Epee</td>
                <td>A fencing Epee</td>
                <td>30/7/22</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Camera</td>
                <td>Snap!</td>
                <td>14/8/22</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.dash-loans-table {
    width: 100%;
    /*border-collapse: collapse;*/
    background-color: var(--aph-back1);
    border: 4px solid var(--aph-grey);
    border-radius: 10px;

}

.dash-loans-table th {
    padding: var(--table-heading-vertical-padding) 0;
    border-collapse: separate;
}

.dash-loans-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    color: (--aph-grey);
    text-align: center;
}
</style>