<script setup>
    import LogoSVG from '../assets/logo.svg'
</script>

<template>
    <div class="landing-flex-item">
        <!-- Left side of landing page -->
        <h1 class="apheleia">Aphelia (logo)</h1>
        <h2 class="apheleia">Management Made Simple</h2>
    </div>
    <!-- TODO: Affinix put a nice dividing line here -->
    <svg width="20px" height="100vh">
        <line x1="10" y1="25%" x2="10" y2="75%" />
    </svg>
    <div class="landing-flex-item">
        <!-- Right side of landing page (login) -->
        <form>
            <input type="text" placeholder="Username" class="apheleia small-area text"><br>
            <input type="password" placeholder="Password" class="apheleia small-area text"><br>
            <!-- We don't have a sign up, but if we did it would probably go here as small text --><br>
            <input type="submit" value="Login" class="apheleia small-area text">
        </form>
    </div>
    <!-- TODO: Button in the bottom right to toggle light/dark mode -->
</template>

<style scoped>
    @import "../assets/input.css";
    @import "../assets/themeOfApheleia.css";
    /* @import "../assets/debug.css"; */

    main {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
    }

    line {
        stroke: grey;
        stroke-width: 2px;
        stroke-linecap: round;
    }

    input[type=text] {
        border: none;
        border-bottom: 1.5px solid #f1cbee;
        font: 32px Arial, serif;
    }
    
    input[type=text]:focus {
        border: none;
        outline: none;
        border-bottom: 1.5px solid #a146ad;
    }

    input[type=password] {
        border: none;
        border-bottom: 1.5px solid #f1cbee;
        font: 32px Arial, serif;
    }
    input[type=password]:focus {
        border: none;
        outline: none;
        border-bottom: 1.5px solid #a146ad;
    }

    .landing-flex-item {
        margin: auto 5% auto 5%;
    }

    
</style>