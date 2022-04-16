import { defineStore } from 'pinia'

export const useArchetypes = defineStore('archetypeStore', {
    state: () => {
        return {
            tempScheme: [
                "internalID",
                "ID",
                "tag",
                "status"
            ]
        }
    }
})
            