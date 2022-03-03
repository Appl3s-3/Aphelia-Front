<script setup>
</script>

<template>
    <div class="dashboard dashboard-container">
        <h2 class="apheleia">Dashboard</h2>
        <!--  Appl3s: Any ideas for this layout? I keep thinking of canvas, but I kinda don't want to use the canvas layout-->
        <div class="dashboard-layout">
            <div class="dashboard-loans">
                <h3>Current Loans</h3>
                <div>
                    <ul>
                        <li>
                            <p>Icon</p>
                            <p>Name</p>
                            <p>Info</p>
                            <p>Due</p>
                        </li>
                        <li>
                            <p>Icon</p>
                            <p>Name</p>
                            <p>Info</p>
                            <p>Due</p>
                        </li>
                        <li>
                            <p>Icon</p>
                            <p>Name</p>
                            <p>Info</p>
                            <p>Due</p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="dashboard-notifications">
                <h3>Notifications</h3>
                <div>
                    <ul>
                        <li>Notification</li>
                        <li>Notification</li>
                        <li>Notification</li>
                    </ul>
                </div>
            </div>
        
            <div class="dashboard-history">
                <h3>Loan History</h3>
                <div>
                    <ul>
                        <li>A past loan</li>
                        <li>A past loan</li>
                        <li>A past loan</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .dashboard-container {
} */

.dashboard-layout {
    margin: 2.5%;
    display: grid;
    grid-template: 50vh 30vh / 60% auto;
    gap: 5px;
}

.dashboard-notifications {
    grid-column: 2;
    grid-row: 1 / 3;
}

div {
    border: 1px solid red;
}

li {
    border: 1px solid red;
}
</style>