<script setup>
import BackButton from '../Buttons/Back.vue'
</script>

<template>
<div class="manage-confirm-menu manage-delete-archetype-menu" v-if="state.showDeleteArchetypeMenu">
    <!-- TODO: Rename Archetype -->
    <p>Are you sure you want to <em class="text-warning">delete</em> this archetype? <em class="text-warning">Warning: This will delete all items of that type. A total of {{ 50 }} items will be deleted.</em> <i>(This action cannot be undone!)</i></p>
    <div class="manage-confirm-menu-options">
        <BackButton @click=""/>
        <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="I understand the consequences" @click="">
    </div>
</div>
</template>

<style scoped>
</style>