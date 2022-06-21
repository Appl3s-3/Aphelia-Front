<script setup>
import BackButton from '../Buttons/Back.vue'
</script>

<template>
<div class="manage-confirm-menu manage-delete-archetype-second-menu" v-if="state.showDeleteArchetypeSecondMenu">
    <p>This will <em class="text-warning">delete</em> {{ 50 }} items from the inventory. Are you really sure? <i>(This action cannot be undone!)</i></p>
    <div class="manage-confirm-menu-options">
        <BackButton @click=""/>
        <input class="manage-menu-button manage-menu-button-deny" type="button" name="" value="Delete" @click="">
    </div>
</div>
</template>

<style scoped>
</style>