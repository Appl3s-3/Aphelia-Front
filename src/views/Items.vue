<script setup>
</script>

<template>
    <h2 class="apheleia">Items</h2>
    <div>
        <!-- Filter options, etc -->
        <p>This is a filter option.</p>
    </div>
    <div>
        <!-- Container for the list of items -->
        <ul>
            <li>This is an item.</li>
            <li v-for="item in items" :key="item.item_id">
                {{item.text}}
            </li>
        </ul>
    </div>
</template>

<style scoped>
    @import "../assets/list.css";
</style>