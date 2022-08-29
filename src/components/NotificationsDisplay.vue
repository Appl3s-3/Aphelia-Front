<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()

</script>

<template>
<div id="notifications-wrapper">
    <table id="notifications-display">
    <tr v-for="notification in selfStore.history.notifications">
        <td>{{ notification }}</td>
        <td class="notifications-date">02/02/2022</td>
    </tr>
</table>
</div>
</template>

<style scoped>
#notifications-wrapper {
    border: 3px solid var(--aph-grey);
    border-radius: 10px;
    height: 100%;
    overflow: hidden;
}

#notifications-display {
    width: 100%;
    background-color: var(--aph-back1);
    table-layout: fixed;
    border-collapse: collapse;
    border: 0px;
}

#notifications-display tr {
    height: 50px;
}

#notifications-display tr:not(:last-child) {
    border-bottom: 0.1em solid var(--aph-grey);
}

#notifications-display td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
    padding-left: 30px;
}

#notifications-display li:not(:last-child) {
    border-bottom: 1px solid var(--aph-grey);
}

.notifications-date {
    width: 6%;
    font-size: 8pt;
    color: var(--aph-text-grey);
}
</style>