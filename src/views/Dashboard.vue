<script setup>
window.onload = function() {
    // LATER: read The Stuff from cache (notifs, etc) make them red to show that they aren't updated
    
    // The Stuff (n): Refers to a large amount of data.

    // Request The Stuff
    // Parse The Stuff
    // Display The Stuff
}
</script>

<template>
    <div class="dashboard dashboard-container">
        <h2>Dashboard</h2>
        <!--  Appl3s: Any ideas for this layout? I keep thinking of canvas, but I kinda don't want to use the canvas layout-->
        <div class="dashboard-layout">
            <div class="dashboard-loans">
                <h3>Current Loans</h3>
                <div class="dashboard-loans-table-container">
                    <table class="dashboard-loans-table">
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
            </div>
            
            <div class="dashboard-notifications">
                <h3>Notifications</h3>
                <div class="dashboard-notifications-list-container">
                    <ul class="dashboard-notifications-list">
                        <li>(Archetype) (Item Name) is due soon! (Date Due)</li>
                        <li>Your request to extend the loan of (Item Name) was accepted.</li>
                        <li>Did you know? The developers have misspelt Apheleia as 'Aphelia' about 99% of the time! (Including just now!)</li>
                    </ul>
                </div>
            </div>
        
            <div class="dashboard-history">
                <h3>Loan History</h3>
                <div>
                    <table class="dashboard-history-table">
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.dashboard-layout {
    margin: 2.5%;

    display: grid;
    grid-template: 50vh 30vh / 60% auto;
    gap: 5px;
}

/* All divs in the layout grid */
.dashboard-layout > div {
    background-color: var(--aph-dark1a);
    padding: 1%;
}


/* Current Loans */

/* .dashboard-loans-table-container {
} */

/* .dashboard-loans-table {
} */


/* Notifications */

.dashboard-notifications {
    grid-column: 2;
    grid-row: 1 / 3;
}
/*
.dashboard-notifications-list-container {

}

.dashboard-notifications-list {

}*/

.dashboard-notifications-list > li {
    background-color: var(--aph-dark3a);
    padding: 10px;
    margin: 6px auto;
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
    padding: 8px 0;
    background-color: var(--aph-dark2a);
}

td {
    padding: 6px 12px;
    background-color: var(--aph-dark3a);
}

div {
    font: 18px Spectral;
}
/* div {
    border: 1px solid purple;
}
*/

</style>