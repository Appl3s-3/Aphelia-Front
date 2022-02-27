<script setup>
    import LogoSVG from '../assets/logo.svg' // for some reason using this in the html prevents the whole thing from rendering
</script>

<template>
    <div id="landing">
        <div id="landing-left">
            <!-- Left side of landing page -->
            <h1 style="display: inline">Aphelia (logo)</h1>
            <h2 style="display: inline">Manage your s***</h2>
        </div>
        <!-- Affinix put a nice dividing line here -->
        <div id="landing-right">
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
    #landing {
        margin: 0px 0px 0px 0px;
        border: none;
        padding: 0px 0px 0px 0px;
        width: 100%;
        height: 100%;
    }
</style>