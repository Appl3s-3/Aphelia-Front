<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()

</script>

<template>
<div id="dash-notifications-list">
    <h3>Notifications</h3>
    <div id="dash-notifications-table-wrapper">
        <table class="dash-notifications-table">
        <tr>
            <td>This is a test notification 1.</td>
            <td class="dash-notifications-date">02/02/2022</td>
        </tr>
        <tr>
            <td>This is a test notification 1.</td>
            <td class="dash-notifications-date">02/02/2022</td>
        </tr>
        <tr>
            <td>This is a test notification 1.</td>
            <td class="dash-notifications-date">02/02/2022</td>
        </tr>
        <tr>
            <td>This is a test notification 1.</td>
            <td class="dash-notifications-date">02/02/2022</td>
        </tr>
    </table>
    </div>
</div>
</template>

<style scoped>
#dash-notifications-table-wrapper {
    border: 4px solid var(--aph-grey);
    border-radius: 10px;
    height: 100%;
}

.dash-notifications-table {
    width: 100%;
    /*border-collapse: collapse;*/
    background-color: var(--aph-back1);
    table-layout: fixed;
}

.dash-notifications-table tr {
    height: 20px;
}

.dash-notifications-table th {
    padding: var(--table-heading-vertical-padding) 0;
    border-collapse: separate;
}

.dash-notifications-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    padding-left: 30px;
}

.dash-notifications-date {
    width: 10%;
    font-size: 8pt;
    color: var(--aph-text-grey);
}
</style>