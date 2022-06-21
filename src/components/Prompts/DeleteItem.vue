<script setup>
</script>

<template>
    <div class="manage-confirm-menu manage-delete-item-menu" v-if="state.showDeleteItemMenu">
        <p>Are you sure you want to <em class="text-warning">delete</em> this item? <i>(This action cannot be undone!)</i></p>
        <!-- TODO: Show the item here -->
        <div class="manage-confirm-menu-options">
            <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
            <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Delete" @click="">
        </div>
    </div>
</template>

<style scoped>
</style>