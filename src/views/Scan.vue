<script setup>
let notLoaned = true
</script>

<template>
    <div class="scan scan-container">
        <h2>Scan</h2>
        <div class="scan-layout">
            <div class="scan-item-container">
                <img src="" alt="Item Image">
                <ul class="scan-item-data-container">
                    <!-- Generate Item data here-->
                    <li>Item Data</li>
                    <li>Item Data</li>
                    <li>Item Data</li>
                </ul>
            </div>
            <div class="scan-item-actions-container">
                <input class="scan-item-action" type="submit" name="loan-item" value="Loan" v-if="notLoaned">
            </div>
        </div>
    </div>
</template>

<style scoped>
.scan-item-container {
    display: flex;
    flex-flow: row nowrap;
    
    justify-content: center;
    align-items: center;

    border: 1px solid rosybrown;
}

.scan-item-actions-container {
    display: flex;
    flex-flow: row nowrap;
    
    justify-content: center;
    align-items: center;

    border: 1px solid rosybrown;
}

img {
    border: 1px solid greenyellow;
}

ul {
    display: inline-flex;
    flex-flow: row nowrap;

    border: 1px solid red;
    padding: 0;
    margin: 10px;
}

li {
    margin: auto 10px;
    border: 1px solid pink;
}


.scan-item-action {
    background-color: grey;
}
.scan-item-action:hover {
    background-color: lightskyblue;
}
</style>