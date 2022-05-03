import { defineStore } from 'pinia'

export const usePeople = defineStore('peopleStore', {
    state: () => {
        let user_id = 0
        let role_id = 0
        
        return {
            tempRoles: [
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id },
                { role_id: ++role_id, text: 'This is a user with role_id = ' + role_id }
            ],

            tempUsers: [
                {
                    internal_id: 0,
                    school_id: 1,
                    name: "Cat",
                    info: "This animal does eeeepeee"
                },
                {
                    internal_id: 1,
                    school_id: 2,
                    name: "Dog",
                    info: "This animal does fossil"
                },
                {
                    internal_id: 2,
                    school_id: 3,
                    name: "Rabbit",
                    info: "This animal does fossil"
                },
                {
                    internal_id: 3,
                    school_id: 4,
                    name: "Mouse",
                    info: "This animal does sabba"
                }
            ]
        }
    }
})