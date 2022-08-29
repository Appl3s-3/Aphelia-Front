<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()

</script>

<template>
<div id="dash-notifications-list">
    <h3>Notifications</h3>
    <table class="dash-notifications-table">
        <tr>
            <th></th>
        </tr>
        <tr>
            <td></td>
        </tr>
    </table>
</div>
</template>

<style scoped>
.dash-notifications-table {
    width: 100%;
    height: 90%;
    /*border-collapse: collapse;*/
    background-color: var(--aph-back1);
    border: 4px solid var(--aph-grey);
    border-radius: 10px;

}

.dash-notifications-table th {
    padding: var(--table-heading-vertical-padding) 0;
    border-collapse: separate;
}

.dash-notifications-table td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    color: (--aph-grey);
    text-align: center;
}
</style>