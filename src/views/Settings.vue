<script setup>
</script>

<template>
    <!-- Group of all settings -->
    <h2 class="apheleia">Settings</h2>
    <!-- Settings are below here -->
    <ul>
        <li>Enable Notifications</li>
        <li>Send notifications to:
            <input type="text" placeholder="Email (if blank, notifications will not be sent)" class="apheleia small-area text"><br>
        </li>
        <li>Theme<!-- Probably a theme component otherwise this would be FAT --></li>

        <li>
            <button>Reset to default</button>
            <button>Cancel</button>
            <button>Save</button>
        </li>
        <li>
            <a>Help</a>
            <a>About</a>
        </li>
    </ul>
</template>

<style scoped>
    @import '../assets/list.css';
    @import '../assets/themeOfApheleia.css';

    ul {
        padding: 0;
    }
</style>