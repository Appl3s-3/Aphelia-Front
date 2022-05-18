<script setup>
import { useInventory } from '../store/useInventory'
import { useSelf } from '../store/useSelf'
//import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
// import { useSettings } from '../store/useSettings'

const inventoryStore = useInventory()
const selfStore = useSelf()

// async function createPdf() {
//     // Create a new PDFDocument
//     const pdfDoc = await PDFDocument.create()

//     // Embed the Times Roman font
//     const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

//     // Add a blank page to the document
//     const page = pdfDoc.addPage()

//     // Get the width and height of the page
//     const { width, height } = page.getSize()

//     // Draw a string of text toward the top of the page
//     const fontSize = 30
//     page.drawText('Creating PDFs in JavaScript is awesome!', {
//         x: 50,
//         y: height - 4 * fontSize,
//         size: fontSize,
//         font: timesRomanFont,
//         color: rgb(0, 0.53, 0.71),
//     })

//     // Serialize the PDFDocument to bytes (a Uint8Array)
//     const pdfBytes = await pdfDoc.save()
    
//     // Trigger the browser to download the PDF document
//     download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
// }
</script>

<template>
    <div class="dashboard dashboard-container">
        <!-- I_Agreed: The below line was writ in order to access the obtainment of the details of the user, it is not intended to be permanent.-->
        <h1>Logged in as: {{selfStore.fullName}}</h1>
        <!--  Appl3s: Any ideas for this layout? I keep thinking of canvas, but I kinda don't want to use the canvas layout-->
        <div class="dashboard-layout">
            <div class="dashboard-loans">
                <input type="button" @click="createPdf()" value="Click me to create a PDF">
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
                        <li v-for="notification in selfStore.history.notifications">{{ notification }}</li>
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
    grid-template: var(--tiles-row-one-height) var(--tiles-row-two-height) / var(--tiles-column-one-width) auto;
    gap: var(--tiles-gap);
}

/* All divs in the layout grid */
.dashboard-layout>div {
    padding: var(--tile-inside-padding);
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