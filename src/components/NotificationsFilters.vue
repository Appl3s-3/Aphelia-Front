<script setup>
</script>

<template>
<ul id="notifications-filters">
    <li @click="notifSt.toggle_announcements()">
        Announcements<!-- <input type="button" name="notifications-announcements" value=""> -->
    </li>
    <li @click="notifSt.toggle_reminders()">
        Reminders
        <!-- <input type="button" name="notifications-announcements" value=""> -->
    </li>
    <li @click="notifSt.toggle_changes()">
        Changes
        <!-- <input type="button" name="notifications-announcements" value=""> -->
    </li>
</ul>
</template>

<style scoped>
#notifications-filters {
    display: flex;
    flex-flow: row nowrap;
    justify-content: baseline;
    margin: 0;
    padding-bottom: 10px;
    cursor: grab;
}

#notifications-filters > li {
    display: inline;
    border: 1px solid white;
    padding: 10px;
    background-color: var(--aph-purple-light);
    color: white;
    border-radius: 5px;

    margin-right: 5px; 
}

</style>