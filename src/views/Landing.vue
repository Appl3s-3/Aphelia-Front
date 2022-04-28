<script setup>
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
/*
    location.href =
        "https://student.sbhs.net.au/api/authorize?response_type=code" +
        "&scope=all-ro" +
        "&state=abc" +
        `&client_id=${CLIENT_ID}` +
        `&redirect_uri=${location.origin}/callback`

    
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
            <div class="landing-component landing-left">
                <!-- Left side of landing page -->
                <img src="../../assets/logo.svg" alt="Logo">
                <h1 class="apheleia">Aphelia</h1>
                <h2 class="apheleia">Management Made Simple</h2>
            </div>
        
            <svg class="landing-component landing-divider" width="20px" height="100vh">
                <line x1="10" y1="25%" x2="10" y2="75%" />
            </svg>
        
            <div class="landing-component landing-right">
                <!-- Right side of landing page (login) -->
                <input @click="student_login_click" type="submit" value="Student Portal Login" class="apheleia small-area text" />
                <!-- TODO: Decide whether or not to have a signup
                <form>
                    <input type="text" name="username" placeholder="Username" class="apheleia small-area text" />
                    <br />
                    <input type="password" name="password" placeholder="Password" class="apheleia small-area text" />
                    <br />
                    <br />
                    <input @click="login_click" type="submit" value="Login" class="apheleia small-area text" />
                </form>
                -->
            </div>
        </div>
        <!-- TODO: Button in the bottom right to toggle light/dark mode -->
        <button type="button" name="toggle-lightness"></button>
    </div>
</template>

<style scoped>
@import "../css/input.css";
@import "../css/themeOfApheleia.css";

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