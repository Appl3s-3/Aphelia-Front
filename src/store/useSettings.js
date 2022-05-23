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
            if (state.theme == "default") {
                return window.matchMedia("(prefers-color-scheme: dark)")
            } else {
                return (state.theme == "dark");
            }
        }
    }
})