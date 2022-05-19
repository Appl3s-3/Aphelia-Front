<script setup>
import {login} from "../scripts/auth.js";
window.onload = function() {
    // Check if the client is already logged in
    // If they are, redirect to /home
}

const CLIENT_ID = "apheleia"; // what's this? I don't know, ask Kai Bo

const login_click = () => {
    let username = document.getElementsByName("username")[0].value
    let password = document.getElementsByName("password")[0].value

    let loginSuccess = false
    // loginSuccess = API(username, password)

    if (loginSuccess == true) {
        
        return true
    }
    // Otherwise display an error and return false
    return false
}

const student_login_click = () => {
    // do some request magic
        // sent the client to login
        // get their student id
        // cache their student id
    // go to dashboard

    login();

    /*
    var dailyTimetableElement

    async function onUserData() {
        var resource = await GetResourceFromCache("dailytimetable")

        if (!dailyTimetableElement) {
            dailyTimetableElement = document.createElement("daily-timetable")
            document.getElementsByTagName("main")[0].appendChild(dailyTimetableElement)
        }

        dailyTimetableElement.setAttribute("data", resource);
    }
*/
}
</script>

<template>
    <div class="landing landing-container">
        <div class="landing-layout">
            <div class="landing-division landing-whitespace"></div>
            <div class="landing-division landing-text">
                <div class="landing-img-container">
                    <img id="landing-logo" src="../../assets/logo.svg" alt="">
                    <!-- <div id="landing-title-container">
                        <img class="landing-title" src="../../assets/landing-title-outline.svg" alt="">  
                        <img class="landing-title" src="../../assets/landing-title-outline.svg" alt="">  
                        <img class="landing-title" src="../../assets/landing-title-solid.svg" alt="Apheleia">  
                    </div> -->
                    <img id="landing-title" class="landing-img" src="../../assets/landing-logo.svg" alt="Apheleia">
                </div>
                <input id="landing-login" type="button" name="landing-login" value="Login">
            </div>
            <div class="landing-division landing-banner"></div>
            <div class="landing-division landing-whitespace"></div>
        </div>
        <!-- TODO: Button in the bottom right to toggle light/dark mode -->
        <button type="button" name="toggle-lightness"></button>
    </div>
</template>

<style scoped>
.landing-layout {
    display: grid;
    grid-template: 100vh / 10% 50% 12% 18%;
    justify-content: center;
    align-items: center;
    bottom: 0;
}

.landing-division {
    padding: 0 2em;
}

.landing-text {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
}

.landing-img-container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
    justify-content: space-between;
}

.landing-img {
    width: 80%;
}

#landing-logo {
    width: 20%;
}

#landing-login {
    width: 10em;
    height: 4em;
    border: 0.2em solid var(--aph-border);
    border-radius: 1em;
}

.landing-banner {
    background-image: linear-gradient(to top, var(--aph-purple) 10%, var(--aph-pink) 120%);
    height: 100%;
    width: 90%;
    margin: 0 auto;

    transition: 0.5s;
}

.landing-banner:hover {
    width: 100%;
    transition: 1.0s;

}



/* line.landing-divider {
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
} */
</style>