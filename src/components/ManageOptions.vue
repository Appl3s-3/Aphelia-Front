<script setup>
</script>

<template>
<div id="manage-menu-options">
    <span id="manage-menu-options-left">
        <span>
            <label for="show-remove">Show Remove Button</label>
            <input type="checkbox" name="show-remove">
        </span>
    </span>
    <span id="manage-menu-options-right">
        <input type="button" name="manage-menu-help" value="?" @click="">
    </span>
</div>
</template>

<style scoped>
#manage-menu-options {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

#manage-menu-options-left {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}

#manage-menu-options-right {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
}
</style>