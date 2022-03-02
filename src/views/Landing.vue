<script setup>
import LogoSVG from '../assets/logo.svg'
</script>

<template>
    <div class="landing-container">
        <div class="landing-layout">
            <div class="landing-component landing-left">
                <!-- Left side of landing page -->
                <!-- <LogoSVG /> -->
                <h1 class="apheleia">Aphelia</h1>
                <h2 class="apheleia">Management Made Simple</h2>
            </div>
        
            <svg class="landing-component landing-divider" width="20px" height="100vh">
                <line x1="10" y1="25%" x2="10" y2="75%" />
            </svg>
        
            <div class="landing-component landing-right">
                <!-- Right side of landing page (login) -->
                <form>
                    <input type="text" placeholder="Username" class="apheleia small-area text" />
                    <br />
                    <input type="password" placeholder="Password" class="apheleia small-area text" />
                    <br />
                    <!-- We don't have a sign up, but if we did it would probably go here as small text -->
                    <br />
                    <input type="submit" value="Login" class="apheleia small-area text" />
                </form>
            </div>
        </div>
        <!-- TODO: Button in the bottom right to toggle light/dark mode -->
        <button type="button" name="toggle-lightness"></button>
    </div>
</template>

<style scoped>
@import "../assets/input.css";
@import "../assets/themeOfApheleia.css";

.landing-layout {
    display: grid;
    grid-template: auto / 41% auto auto;
    justify-content: center;
    align-items: center;
}

.landing-component {
    margin: auto 5%;
}

line.landing-divider {
    stroke: grey;
    stroke-width: 2px;
    stroke-linecap: round;
}

input[type="text"] {
    border: none;
    outline: none;
    border-bottom: 1.5px solid #f1cbee;
    font: 32px Arial, serif;
}

input[type="text"]:focus {
    border-bottom: 1.5px solid #a146ad;
}

input[type="password"] {
    border: none;
    outline: none;
    border-bottom: 1.5px solid #f1cbee;
    font: 32px Arial, serif;
}

input[type="password"]:focus {
    border-bottom: 1.5px solid #a146ad;
}
</style>