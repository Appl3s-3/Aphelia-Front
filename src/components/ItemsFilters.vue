<script setup>
</script>

<template>
<div id="items-filters">
        <!--
    <div id="filters-left">
        <span>
            Loaned in the past n days (insert slider here)
        </span>
        <span>
            (insert other filters here)
        </span>
    </div>
        -->
    <div id="filters-right">
        <input class="filter" id="search-bar" type="text" name="search-items" placeholder="Search Name" @input="event => $emit('search', event.target.value)">
    </div>
</div>
</template>

<style scoped>
#items-filters {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
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
    border: 1px solid pink;
}

#search-bar {
    text-align: left;
    width: 300px;
}
</style>