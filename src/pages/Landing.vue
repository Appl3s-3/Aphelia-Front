<script setup>
    import LogoSVG from '../assets/logo.svg' // for some reason using this in the html prevents the whole thing from rendering
</script>

<template>
    <div id="landing">
        <div id="landing-left">
            <!-- Left side of landing page -->
            <h1>Aphelia (logo)</h1>
            <h2>Manage your s***</h2>
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
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: brown;

        display: flex;
        flex-flow: row nowrap;
        justify-content: center; /* spacing between */
        align-items: center; /* alignment */

    }
/*
    #landing-left {
        display: inline-block;
        margin-left: 20%;
        margin-top: 40vh;
        position: absolute;
        border: none;
        background-color: red;
        padding: 0px 0px 0px 0px;
        
        /*
        top: 50%;
        width: 100vw;
        height: 100vh;
        */
        /*
    }

    #landing-right {
        display: inline-block;
        margin-right: 20%;
        border: none;
        background-color: red;
        padding: 0px 0px 0px 0px;*/
        /*
        width: 100vw;
        height: 100vh;
        */
    /* } */


</style>