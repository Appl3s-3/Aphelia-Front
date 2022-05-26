<script setup>
</script>

<template>
    <div id="manage-confirm-menu-container" v-if="state.showConfirmMenu">
        <div class="manage-confirm-menu manage-delete-item-menu" v-if="state.showDeleteItemMenu">
            <p>Are you sure you want to <em class="text-warning">delete</em> this item? <i>(This action cannot be undone!)</i></p>
            <!-- TODO: Show the item here -->
            <div class="manage-confirm-menu-options">
                <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Delete" @click="">
            </div>
        </div>
        <div class="manage-confirm-menu manage-delete-archetype-menu" v-if="state.showDeleteArchetypeMenu">
            <!-- TODO: Rename Archetype -->
            <p>Are you sure you want to <em class="text-warning">delete</em> this archetype? <em class="text-warning">Warning: This will delete all items of that type. A total of {{ 50 }} items will be deleted.</em> <i>(This action cannot be undone!)</i></p>
            <div class="manage-confirm-menu-options">
                <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="I understand the consequences" @click="">
            </div>
        </div>
        <div class="manage-confirm-menu manage-delete-archetype-second-menu" v-if="state.showDeleteArchetypeSecondMenu">
            <p>This will <em class="text-warning">delete</em> {{ 50 }} items from the inventory. Are you really sure? <i>(This action cannot be undone!)</i></p>
            <div class="manage-confirm-menu-options">
                <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Delete" @click="">
            </div>
        </div>
        <div class="manage-confirm-menu manage-reset-menu" v-if="state.showResetMenu">
            <p>Are you sure you want to <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
            <!-- TODO: Make this work-->
            <label for="view-items-manage-changes">View Changes</label>
            <input type="checkbox" name="view-items-manage-changes">
            <div class="manage-confirm-menu-options">
                <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                <span class="manage-confirm-menu-options-exit">
                    <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset" @click="">
                    <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset and Exit" @click="">
                </span>
            </div>
        </div>
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
        <div class="manage-confirm-menu manage-exit-menu" v-if="state.showExitMenu">
            <p>You have not saved your changes. Would you like to <em class="text-highlight">save</em> or <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
            <!-- TODO: Make this work-->
            <label for="view-items-manage-changes">View Changes</label>
            <input type="checkbox" name="view-items-manage-changes">
            <div class="manage-confirm-ternary-menu-options">
                <input class="manage-menu-button manage-menu-button-grey" type="button" name="" value="Back" @click="">
                <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset" @click="">
                <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save" @click="">
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>