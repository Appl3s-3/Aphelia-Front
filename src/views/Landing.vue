<script setup>
    import LogoSVG from '../assets/logo.svg'
</script>

<template>
    <main>
        <div id="landing-left">
            <!-- Left side of landing page -->
            <h1>Aphelia (logo)</h1>
            <h2>Manage your s***</h2>
        </div>
        <!-- TODO: Affinix put a nice dividing line here -->
        <div id="landing-right">
            <!-- Right side of landing page (login) -->
            <form>
                <input type="text" placeholder="Username"><br>
                <input type="password" placeholder="Password"><br>
                <!-- We don't have a sign up, but if we did it would probably go here as small text --><br>
                <input type="submit" value="Login">
            </form>
        </div>
        <!-- TODO: Button in the bottom right to toggle light/dark mode -->
    </main>
</template>

<style scoped>
    @import "../assets/input.css";

    main {
        margin: 0px 0px 0px 0px;
        border: none;
        padding: 0px 0px 0px 0px;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: brown;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

    }

    div {
        background-color: red;
        border: 3px solid aliceblue;
    }
</style>