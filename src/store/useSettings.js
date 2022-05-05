import { defineStore } from 'pinia'

export const useSettings = defineStore('settingsStore', {
    state: () => {
        return {
            customReminder: false

        }
    }
})