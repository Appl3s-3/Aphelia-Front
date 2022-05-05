<script setup>
import { useSelf } from '../store/useSelf'

const selfStore = useSelf()

</script>

<template>
    <div class="settings settings-container">
        <h2 class="apheleia">Settings</h2>
        <div class="settings-layout">
            <div class="settings-list-container">
                <ul class="settings-list">
                    <li class="settings-list-item">
                        <label for="enable-notifications">Enable Notifications</label>
                        <input type="checkbox" name="enable-notifications" />
                    </li>
                    <li class="settings-list-item">
                        <label for="reminders">Remind me for overdue items</label>
                        <select name="reminders">
                            <option value="one">1 Day before</option>
                            <option value="three">3 Days before</option>
                            <option value="seven">1 Week before</option>
                            <!-- If we have time we'll parse a string (e.g 1, 3, 4,5,6,19) into a list of days before and send a notification on each day
                            <option value="">All of the above</option>-->
                            <option value="custom">Custom</option>
                        </select>
                        <div v-if="customReminder">
                            <input type="number" min="0" max="28" step="1" value="2" />
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
                        />
                    </li>
                    <li class="settings-list-item">
                        Mark email as important:
                        <input type="checkbox" name="enable-important-email" />
                    </li>
                    <li class="settings-list-item">
                        Theme
                        <input type="color" />
                        <!-- Probably a theme component otherwise this would be FAT -->
                    </li>
                    <li class="settings-submit-container" id="submit-settings">
                        <button type="reset" class="apheleia reset">Reset to default</button>
                        <div>
                            <button type="button" class="apheleia cancel">Cancel</button>
                            <button type="button" class="apheleia save">Save</button>
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

    background-color: var(--aph-dark2);
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
    background-color: var(--aph-dark2);
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