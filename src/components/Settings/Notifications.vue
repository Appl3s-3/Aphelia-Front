<script setup>
</script>

<template>
<li>
    <label for="enable-notifications">Enable Notifications</label>
    <input type="checkbox" id="enable-notifications" @input="event => state.notificationEnabled = event.target.checked"/>
</li>
<li>
    <label for="reminders">Remind me for overdue items</label>
    <select id="reminders" @input="event => state.notificationTime = event.target.value">
        <option value="one">1 Day before</option>
        <option value="three">3 Days before</option>
        <option value="seven">1 Week before</option>
        <!-- If we have time we'll parse a string (e.g 1, 3, 4,5,6,19) into a list of days before and send a notification on each day
        <option value="">All of the above</option>-->
        <option value="custom">Custom</option>
    </select>
    <div v-if="customReminder">
        <input type="number" min="0" max="28" step="1" value="2" @input="event => state.notificationTime = event.target.value"/>
        <p>Days before</p>
    </div>
</li>
<li>
    <label for="notification-email">Send notifications to:</label>
    <input
        type="text"
        id="notification-email"
        placeholder="Email (if blank, notifications will not be sent)"
        class="apheleia small-area text"
        @input="event => state.notificationEmail = event.target.value"
    />
</li>
<li>
    Mark email as important:
    <input type="checkbox" id="enable-important-email" @input="event => state.notificationTime = event.target.checked"/>
</li>
</template>

<style scoped>
</style>