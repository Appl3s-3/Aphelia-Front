<script setup>
</script>

<template>
    <div>
        <h3>Current Loans</h3>
        <div id="dash-loans-table-wrapper">
            <table class="dash-loans-table">
            <tr>
                <th><a href="#">ID</a></th>
                <th><a href="#">name</a></th>
                <th><a href="#">info</a></th>
                <th><a href="#">due</a></th>
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
    </div>
</template>

<style scoped>
#dash-loans-table-wrapper {
    height: 85%;
    border: 4px solid var(--aph-grey);
    border-radius: 10px;
}

.dash-loans-table {
    width: 100%;
    border-collapse: collapse;
}

.dash-loans-table th {
    padding: var(--table-heading-vertical-padding) 0;
    border-bottom: 0.15em solid var(--aph-grey);
}

.dash-loans-table th:not(:last-child) {
    border-right: 0.15em solid var(--aph-grey);
}

.dash-loans-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    text-align: center;
    border-bottom: 0.1em solid var(--aph-grey);
}

.dash-loans-table td:not(:last-child) {
    border-right: 0.15em solid var(--aph-grey);
}

.dash-loans-table tr th a {
    text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    color: var(--aph-text-dark);
    transition: 0.2s;
}

.dash-loans-table tr th a:hover {
    text-decoration-color: rgba(45, 28, 77, 1);
    color: var(--aph-purple)
}
</style>