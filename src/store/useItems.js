import { defineStore } from 'pinia'

export const useItems = defineStore('itemStore', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            tempItems: [
                {
                    "internalID": 0,
                    "ID": 1,
                    "tag": "#1",
                    "status": 1
                },
                {
                    "internalID": 1,
                    "ID": 2,
                    "tag": "#2",
                    "status": 0
                },
                {
                    "internalID": 2,
                    "ID": 3,
                    "tag": "#3",
                    "status": 2
                },
                {
                    "internalID": 3,
                    "ID": 4,
                    "tag": "#4",
                    status: 0
                },
                {
                    "internalID": 3,
                    "ID": 4,
                    "tag": "#4",
                    status: 0
                },
                {
                    "internalID": 3,
                    "ID": 4,
                    "tag": "#4",
                    status: 0
                }
            ]
        }
    }
    
    /*
    getters: {
        doubleCount: (state) => state.counter * 2,
    },

    actions: {
        increment() {
            this.counter++
        },
        randomizeCounter() {
            this.counter = Math.round(100 * Math.random())
        },
    }*/
})