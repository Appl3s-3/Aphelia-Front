<script setup>
</script>

<template>
<li>
    Colour Theme:
    <select id="select-theme" @input="event => $emit('colourChange', event.target.value)">
        <option value="default">Browser Default</option>
        <option value="dark">dark</option>
        <option value="light">light</option>
    </select>
    <!-- Probably a theme component otherwise this would be FAT -->
</li>
</template>

<style scoped>
</style>