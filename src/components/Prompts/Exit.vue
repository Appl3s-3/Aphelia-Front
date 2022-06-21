<script setup>
import BackButton from '../components/Buttons/Back.vue'

</script>

<template>
    <div class="manage-confirm-menu manage-exit-menu" v-if="state.showExitMenu">
        <p>You have not saved your changes. Would you like to <em class="text-highlight">save</em> or <em class="text-warning">reset</em> all modifications to the inventory? <i>(This action cannot be undone!)</i></p>
        <!-- TODO: Make this work-->
        <label for="view-items-manage-changes">View Changes</label>
        <input type="checkbox" name="view-items-manage-changes">
        <div class="manage-confirm-ternary-menu-options">
            <BackButton/>
            <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Reset" @click="">
            <input class="manage-menu-button manage-menu-button-confirm" type="button" name="" value="Save" @click="">
        </div>
    </div>
</template>

<style scoped>
</style>