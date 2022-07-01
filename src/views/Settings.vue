<script setup>
import { useSelf } from '../store/useSelf'
import { useSettings } from '../store/useSettings'
import { reactive } from 'vue'

import Notifications from '../components/Settings/Notifications.vue'
import Colour from '../components/Settings/Colour.vue'
import Submit from '../components/Settings/Submit.vue'

const selfStore = useSelf()
const settingsStore = useSettings()

const state = reactive({
    notificationEnabled: false,
    notificationTime: "",
    notificationEmail: "",
    notificationImportant: false,
    theme: "default",
})

// save settings then redirect to dashboard
const save_settings = () => {
    settingsStore.notificationEnabled = state.notificationEnabled;
    settingsStore.notificationTime = state.notificationTime;
    settingsStore.notificationEmail = state.notificationEmail;
    settingsStore.notificationImportant = state.notificationImportant;
    settingsStore.theme = state.theme;
}

const load_settings = () => {
    document.getElementById("enable-notifications").checked = settingsStore.notificationEnabled;
    document.getElementById("reminders").value = settingsStore.notificationTime;
    document.getElementById("notification-email").value = settingsStore.notificationEmail;
    document.getElementById("enable-important-email").checked = settingsStore.notificationImportant;
    document.getElementById("select-theme").value = settingsStore.theme;
}

// redirect back to dashboard
const cancel_settings = () => {
}

setTimeout(load_settings, 10); // let page load first
</script>

<template>
<div class="settings settings-container">
    <h2 class="apheleia">Settings {{settingsStore.darkTheme}}</h2>
    <div class="settings-layout">
        <ul id="settings-list">
            <Notifications @enabledChange="(x) => state.notificationEnabled = x"
                           @remindersChange="(x) => state.notificationTime = x"
                           @emailChange="(x) => state.notificationEmail = x"
                           @importantChange="(x) => state.notificationImportant = x"
            />
            <Colour @colourChange="(c) => state.theme = c"/>
            <Submit @saveSettings="save_settings()" @cancelSettings="cancel_settings()"/>
        </ul>
        <!-- <router-link :to="{ name: 'help' }" class="button" id="help">Help</router-link>
        <router-link :to="{ name: 'about' }" class="button" id="about">About</router-link>-->
    </div>
</div>
</template>

<style scoped>
#settings-list {
    margin: 0 20%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-content: flex-start;
}

#settings-list > li {
    margin: auto auto 0.1em auto;
    padding: 20px;
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    background-color: var(--aph-back2);
}

input {
    border: none;
}

input[type="text"] {
    width: 60%;
    text-align: right;
}

button {
    width: 120px;
    height: 40px;
}
</style>