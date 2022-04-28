<script setup>
let customReminder = false;
</script>

<template>
    <div class="settings settings-container">
        <h2 class="apheleia">Settings</h2>
        <div class="settings-layout">
            <div>
                <ul>
                    <li>
                        <label for="enable-notifications">Enable Notifications</label>
                        <input type="checkbox" name="enable-notifications" />
                    </li>
                    <li>
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
                    <li>
                        <label for="notification-email">Send notifications to:</label>
                        <input
                            type="text"
                            name="notification-email"
                            placeholder="Email (if blank, notifications will not be sent)"
                            class="apheleia small-area text"
                        />
                    </li>
                    <li>
                        Mark email as important:
                        <input type="checkbox" name="enable-important-email" />
                    </li>
                    <li>
                        Theme
                        <input type="color" />
                        <!-- Probably a theme component otherwise this would be FAT -->
                    </li>
                    <li id="submit-settings">
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
@import "../css/list.css";
@import "../css/themeOfApheleia.css";

h2 {
    display: block;
    border: 1px solid red;
}

div {
    display: block;
    border: 1px solid red;
}

ul {
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-content: flex-start;
    height: 100%;
    border: 1px solid red;
}

li {
    margin: 1px auto;
    padding: 20px;
    width: 40%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;
    border: 1px solid red;
}

#submit-settings div {
    margin: 0px;
    padding: 0px;
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