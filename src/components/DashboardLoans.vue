<script setup>
</script>

<template>
    <div class="dashboard-panel" id="dashboard-loans">
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
</template>

<style scoped>
</style>