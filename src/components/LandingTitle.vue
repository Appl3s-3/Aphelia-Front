<script setup>
import { login } from "../scripts/auth.js"

const student_login_click = () => {
    login()
}
</script>

<template>
<div id="landing-text">
    <div id="img-container">
        <img id="logo" src="../../assets/logo.svg" alt="">
        <div id="landing-title-container">
            <img class="title-outline" src="../../assets/landing-title-outline.svg" alt="">  
            <img class="title-outline" src="../../assets/landing-title-outline.svg" alt="">  
            <img class="title-solid" src="../../assets/landing-title-solid.svg" alt="Apheleia">  
        </div>
        <!-- <img id="landing-title" class="landing-img" src="../../assets/landing-logo.svg" alt="Apheleia"> -->
    </div>
    <input id="login-button" type="button" name="landing-login" value="Login" @click="student_login_click">
</div>
</template>

<style scoped>
#landing-text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
}

#img-container {
    width: 80%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;

    padding-top: 20%;
}

/* #logo {
} */

#landing-title-container {
    display: flex;
    flex-flow: column nowrap;
    width: 77%;
    height: 100%;
}

.title-outline {
    width: 100%;
    padding-bottom: 0px;
    transition: 0.2s;
}

.title-outline:hover {
    padding-bottom: 10px;
    transition: 0.2s;
}

#landing-logo {
    width: 18%;
}

#login-button {
    width: 20%;
    height: 4em;
    border: 0.25em solid var(--aph-purple);
    border-radius: 0.4em;
    background-color: transparent;
    font-family: "Montserrat";
    font-size: 0.7vw;

    margin-top: 1em;
    transition: 0.1s
}

#login-button:hover {
    background-color: var(--aph-purple);
    border-radius: 1.2em;
    color: white;
    transition: 0.2s;
}
</style>