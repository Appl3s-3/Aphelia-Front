<script setup>
import { useSelf } from '../store/useSelf'
import { useSettings } from '../store/useSettings'
import { reactive } from 'vue'

const selfStore = useSelf()
const settingsStore = useSettings()

const state = reactive({
    notificationEnabled: false,
    notificationTime: "",
    notificationEmail: "",
    notificationImportant: false,
    darkTheme: false,
 })

// save settings then redirect to dashboard
const save_settings = () => {
    settingsStore.notificationEnabled = state.notificationEnabled
    settingsStore.notificationTime = state.notificationTime
    settingsStore.notificationEmail = state.notificationEmail
    settingsStore.notificationImportant = state.notificationImportant
    settingsStore.darkTheme = state.darkTheme
}

// redirect back to dashboard
const cancel_settings = () => {
    settingsStore.notificationEnabled = state.notificationEnabled
}

</script>

<template>
    <div class="settings settings-container">
        <h2 class="apheleia">Settings {{state.notificationEnabled}}</h2>
        <div class="settings-layout">
            <div class="settings-list-container">
                <ul class="settings-list">
                    <li class="settings-list-item">
                        <label for="enable-notifications">Enable Notifications</label>
                        <input type="checkbox" name="enable-notifications" @input="event => state.notificationEnabled = event.target.checked"/>
                    </li>
                    <li class="settings-list-item">
                        <label for="reminders">Remind me for overdue items</label>
                        <select name="reminders" @input="event => state.notificationTime = event.target.value">
                            <option value="one">1 Day before</option>
                            <option value="three">3 Days before</option>
                            <option value="seven">1 Week before</option>
                            <!-- If we have time we'll parse a string (e.g 1, 3, 4,5,6,19) into a list of days before and send a notification on each day
                            <option value="">All of the above</option>-->
                            <option value="custom">Custom</option>
                        </select>
                        <div v-if="customReminder">
                            <input type="number" min="0" max="28" step="1" value="2" @input="event => state.notificationTime = event.target.value"/>
                            <p>Days before</p>
                        </div>
                    </li>
                    <li class="settings-list-item">
                        <label for="notification-email">Send notifications to:</label>
                        <input
                            type="text"
                            name="notification-email"
                            placeholder="Email (if blank, notifications will not be sent)"
                            class="apheleia small-area text"
                            @input="event => state.notificationEmail = event.target.value"
                        />
                    </li>
                    <li class="settings-list-item">
                        Mark email as important:
                        <input type="checkbox" name="enable-important-email" @input="event => state.notificationTime = event.target.checked"/>
                    </li>
                    <li class="settings-list-item">
                        Enable dark theme
                        <input type="checkbox" @input="event => state.darkTheme = event.target.checked"/>
                        <!-- Probably a theme component otherwise this would be FAT -->
                    </li>
                    <li class="settings-submit-container" id="submit-settings">
                        <button type="reset" class="apheleia reset">Reset to default</button>
                        <div>
                            <button type="button" class="apheleia cancel" @click="cancel_settings">Cancel</button>
                            <button type="button" class="apheleia save" @click="save_settings">Save</button>
                        </div>
                    </li>
                </ul>
                <!-- <router-link :to="{ name: 'help' }" class="button" id="help">Help</router-link>
                <router-link :to="{ name: 'about' }" class="button" id="about">About</router-link>-->
            </div>
        </div>
    </div>
</template>

<style scoped>

/* .settings-list-container {
} */

.settings-list {
    margin: 0 20%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-content: flex-start;
}

.settings-list-item {
    margin: auto auto 0.1em auto;
    padding: 20px;
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    background-color: var(--aph-back2);
}

.settings-submit-container {
    margin: 2em auto auto auto;
    padding: 20px;
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    border: 1px solid red;
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