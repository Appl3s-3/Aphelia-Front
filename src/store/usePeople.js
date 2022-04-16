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
                { user_id: ++user_id, text: 'This is a user with user_id = ' + user_id },
                { user_id: ++user_id, text: 'This is a user with user_id = ' + user_id },
                { user_id: ++user_id, text: 'This is a user with user_id = ' + user_id }
            ]
        }
    }
})