<script setup>
</script>

<template>
<h1>Users</h1>
<div class="people-filters-container">
    <div id="filters-left">
        <input class="filter" id="search-bar" type="text" name="search-people" placeholder="Search Name" @input="event => $emit('search', event.target.value)">
    </div>
    <div id="filters-right">
        <input class="filter" id="manage-roles" type="button" name="manage-roles" value="Manage Roles">
        <input class="filter" id="invite-users" type="button" name="invite-users" value="Invite Users">
    </div>
</div>
</template>

<style scoped>
.people-filters-container {
    /* Literally ripped from Items.vue */
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: var(--aph-back1);
}

#manage-roles {
    margin: 5px;
    padding: 5px;
    background-color: var(--aph-purple);
    color: var(--aph-text-light);
    border: 8px solid var(--aph-purple);
    border-radius: 5px;
}

#invite-users {
    margin: 5px;
    padding: 5px;
    background-color: var(--aph-purple);
    color: var(--aph-text-light);
    border: 8px solid var(--aph-purple);
    border-radius: 5px;
}

#items-filters {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: baseline;
}

#filters-left {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: var(--left-filter-vertical-margin) 0;
}

#filters-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

.filter {
    margin: auto var(--filter-horizontal-margin);
}

#search-bar {
    text-align: right;
}

</style>