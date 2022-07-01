<script setup>
import { useInventory } from '../store/useInventory'
import { useSelf } from '../store/useSelf'

import DashLoans from '../components/DashLoans.vue'
import DashNotifications from '../components/DashNotifications.vue'
import DashHistory from '../components/DashHistory.vue'
//import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
// import { useSettings } from '../store/useSettings'

const inventoryStore = useInventory()
const selfStore = useSelf()
</script>

<template>
<div class="dashboard dashboard-container">
    <input type="button" @click="createPdf()" value="Click me to create a PDF">
    <div class="dashboard-layout">
        <h1 class="dashboard-panel" id="dashboard-title">Logged in as: {{selfStore.fullName}}</h1>
        <DashLoans         class="dashboard-panel"/>
        <DashNotifications class="dashboard-panel" id="dashboard-notifications"/>
        <DashHistory       class="dashboard-panel"/>
    </div>
</div>
</template>

<style scoped>
.dashboard * {
    --notification-list-padding: 10px;
    --notification-list-vertical-margin: 6px;

    --table-heading-vertical-padding: 12px;

    --table-data-vertical-padding: 12px;
    --table-data-horizontal-padding: 6px;
}

.dashboard-layout {
    padding: 2.5%;

    display: grid;
    grid-template: 6vh 50vh 33vh / 60% auto;
    gap: 0.1em;
}

.dashboard-panel {
    padding: 1%;
    border: 1px solid green;
    background-color: var(--aph-back1);
}

#dashboard-title {
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    padding: 0;
}

#dashboard-notifications {
    grid-column: 2;
    grid-row: 2 / 4;
}
</style>