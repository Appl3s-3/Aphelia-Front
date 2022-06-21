<script setup>
</script>

<template>
    <div class="manage-confirm-menu manage-save-menu" v-if="state.showSaveMenu">
        <p>Are you sure you want to <em class="text-highlight">save</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
        <!-- TODO: Make this work-->
        <label for="view-items-manage-changes">View Changes</label>
        <input type="checkbox" name="view-items-manage-changes">
        <div class="manage-confirm-menu-options">
            <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
            <span class="manage-confirm-menu-options-exit">
                <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save" @click="">
                <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save and Exit" @click="">
            </span>
        </div>
    </div>
</template>

<style scoped>
</style>