import { defineStore } from 'pinia'

export const useSettings = defineStore('settingsStore', {
    state: () => {
        return {
            notificationEnabled: false,
            notificationTime: 0, // number of days before
            notificationEmail: "",
            notificationImportant: false,
            theme: "default",
        }
    }, 
    getters: {
        // returns if the page should display in dark mode
        isDarkTheme: (state) => {
            console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
            console.log(state.theme);
            if (state.theme == "default") {
                return window.matchMedia("(prefers-color-scheme: dark)").matches;
            } else {
                return (state.theme == "dark");
            }
        }
    }
})