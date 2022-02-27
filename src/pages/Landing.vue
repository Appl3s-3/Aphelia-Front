<script setup>
    import LogoSVG from '../assets/logo.svg' // for some reason using this in the html prevents the whole thing from rendering
</script>

<template>
    <div>
        <div>
            <!-- Left side of landing page -->
            <h1>Aphelia (logo)</h1>
            <h2>Manage your s***</h2>
        </div>
        <!-- Affinix put a nice dividing line here -->
        <div>
            <!-- Right side of landing page (login) -->
            <form>
                <input type="text" placeholder="Username"><br>
                <input type="password" placeholder="Password"><br>
                <!-- We don't have a sign up, but if we did it would probably go here as small text --><br>
                <input type="submit" value="Login">
            </form>
        </div>
    </div>
</template>

<style scoped>
    @import "../css/input.css";
</style>