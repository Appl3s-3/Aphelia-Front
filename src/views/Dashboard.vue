<script setup>
import { useInventory } from '../store/useInventory'
import { useSelf } from '../store/useSelf'

import DashboardLoans from '../components/DashboardLoans.vue'
import DashboardNotifications from '../components/DashboardNotifications.vue'
import DashboardHistory from '../components/DashboardHistory.vue'
//import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
// import { useSettings } from '../store/useSettings'

const inventoryStore = useInventory()
const selfStore = useSelf()
</script>

<template>
    <div class="dashboard dashboard-container">
        <div class="dashboard-layout">
            <h1 class="dashboard-panel" id="dashboard-title">Logged in as: {{selfStore.fullName}}</h1>
            <DashboardLoans/>
            <DashboardNotifications/>
            <DashboardHistory/>
        </div>
    </div>
</template>

<style scoped>
@import "../css/dashboard.css";

/* Local Variables */
.dashboard * {
    --tiles-outside-padding: 2.5%;
    --tiles-gap: 0.1em;
    --tiles-row-one-height: 50vh;
    --tiles-row-two-height: 39vh;
    --tiles-column-one-width: 60%;

    --tile-inside-padding: 1%;

    --notification-list-padding: 10px;
    --notification-list-vertical-margin: 6px;

    --table-heading-vertical-padding: 12px;

    --table-data-vertical-padding: 12px;
    --table-data-horizontal-padding: 6px;
}

.dashboard-layout {
    padding: var(--tiles-outside-padding);

    display: grid;
    grid-template: 6vh 50vh 33vh / 60% auto;
    gap: var(--tiles-gap);
}

.dashboard-panel {
    padding: var(--tile-inside-padding);
    border: 1px solid green;
}

#dashboard-title {
    grid-column: 1 / 3;
    grid-row: 1 / 2;

    padding: 0;

}


/* Current Loans */

/* .dashboard-loans-table-container {
} */

/* .dashboard-loans-table {
} */


/* Notifications */

#dashboard-notifications {
    grid-column: 2;
    grid-row: 2 / 4;
}

/* .dashboard-notifications-list-container {
} */

/* .dashboard-notifications-list {
} */

.dashboard-notifications-list>li {
    padding: var(--notification-list-padding);
    margin: var(--notification-list-vertical-margin) auto;
}


/* Loan History */

/* .dashboard-history {
} */


/* General */

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    padding: var(--table-heading-vertical-padding) 0;
}

td {
    padding: var(--table-data-vertical-padding) var(--table-data-horizontal-padding);
}
</style>