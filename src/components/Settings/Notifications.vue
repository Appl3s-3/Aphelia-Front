<script setup>
</script>

<template>
<li>
    <label for="enable-notifications">Enable Notifications</label>
    <input type="checkbox" id="enable-notifications" @input="event => $emit('enabledChange', event.target.checked)"/>
</li>
<li>
    <label for="reminders">Remind me for overdue items</label>
    <select id="reminders" @input="event => $emit('remindersChange', event.target.value)">
        <option value="one">1 Day before</option>
        <option value="three">3 Days before</option>
        <option value="seven">1 Week before</option>
        <!-- If we have time we'll parse a string (e.g 1, 3, 4,5,6,19) into a list of days before and send a notification on each day
        <option value="">All of the above</option>-->
    </select>
</li>
<li>
    <label for="notification-email">Send notifications to:</label>
    <input
        type="text"
        id="notification-email"
        placeholder="Email (if blank, notifications will not be sent)"
        class="apheleia small-area text"
        @input="event => $emit('emailChange', event.target.value)"
    />
</li>
<li>
    Mark email as important:
    <input type="checkbox" id="enable-important-email" @input="event => $emit('importantChange', event.target.checked)"/>
</li>
</template>

<style scoped>
</style>