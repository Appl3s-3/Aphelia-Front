import { defineStore } from 'pinia'

export const useSettings = defineStore('settingsStore', {
    state: () => {
        return {
            notificationEnabled: false,
            notificationTime: 0, // number of days before
            notificationEmail: "",
            notificationImportant: false,
            darkTheme: false,
        }
    }
})