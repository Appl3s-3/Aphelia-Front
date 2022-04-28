<script setup>
import { useItems } from '../store/useItems'
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
// import { useSettings } from '../store/useSettings'

const itemStore = useItems()

async function createPdf() {
  const pdfDoc = await PDFDocument.create()
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

  const page = pdfDoc.addPage()
  const { width, height } = page.getSize()
  const fontSize = 30
  page.drawText('Creating PDFs in JavaScript is awesome!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  })

  const pdfBytes = await pdfDoc.save()
}

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
@import "../css/dashboard.css";

/* Local Variables */
.dashboard * {
    --tiles-outside-margin: 2.5%;
    --tiles-gap: 5px;
    --tiles-column-one-width: 50vh;
    --tiles-column-two-width: 30vh;
    --tiles-row-one-height: 60%;

    --tile-inside-padding: 1%;

    --notification-list-padding: 10px;
    --notification-list-horizontal-margin: 6px;

    --table-heading-horizontal-padding: 8px;

    --table-data-horizontal-padding: 6px;
    --table-data-vertical-padding: 12px;
}

.dashboard-layout {
    margin: var(--tiles-outside-margin);

    display: grid;
    grid-template: var(--tiles-column-one-width) var(--tiles-column-two-width) / var(--tiles-row-one-height) auto;
    gap: var(--tiles-gap);
}

/* All divs in the layout grid */
.dashboard-layout > div {
    padding: var(--tiles-inside-padding);
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

/* .dashboard-notifications-list-container {
} */

/* .dashboard-notifications-list {
} */

.dashboard-notifications-list > li {
    padding: var(--notification-list-padding);
    margin: var(--notification-list-horizontal-margin) auto;
}


/* Loan History */

/* .dashboard-history {
} */


/* General */

table {
    /* TODO: change back to 100% (testing if its centered) */
    width: 90%;
    border-collapse: collapse;
}

th {
    padding: var(--table-heading-horizontal-padding) 0;
}

td {
    padding: var(--table-data-horizontal-padding) var(--table-data-vertical-padding);
}
</style>