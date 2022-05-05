import { defineStore } from 'pinia'

export const useSelf = defineStore('selfStore', {
    state: () => {
        return {
            role: {
                id: 0,
                name: "Student",
                permissions: {
                    loanable_archetypes: [
                        0, 2, 3
                    ]
                }
            },
            items: [
                {
                    
                },
                {
                    
                }
            ],
            settings: {
                email: "my_email@gmail.com",
                mark_as_important: true,
                notification_frequency: 3,
                page_theme: 1,
                receive_announcements: true,
                receive_updates: true,
                receive_reminders: true,
                receive_emails: true,
                receive_echoes: true
            },
            history: {
                loans: [
                    "MEEEEEE",
                    "REEEEEE",
                    "SEEEEEE"
                ],
                notifications: [
                    {
                        information: {
                            item: {
                                archetype_id: 5,
                                item_id: 6,
                                item_name: "Huggy Wuggy"
                            },
                            dates: {
                                current: "1st Jan",
                                due: "31st Dec"
                            }
                        },
                        type: "Return reminder"
                    },
                    {
                        information: {
                            item: "None"
                        },
                        type: "Update"
                    },
                    "(Archetype) (Item Name) #(Item ID) is due today! (Date Due)",
                    "(Archetype) (Item Name) #(Item ID) is due in 1 day. (Date Due)",
                    "(Archetype) (Item Name) #(Item ID) is due in 2 days. (Date Due)",
                    "(Archetype) (Item Name) #(Item ID) is due in 3 days. (Date Due)",
                    "(Archetype) (Item Name) #(Item ID) is due soon! (Date Due)",
                    "You returned (Archetype) (Item Name) #(Item ID). (Date)",
                    "You borrowed (Archetype) (Item Name) #(Item ID). (Date)",
                    "The due date for (Archetype) (Item Name) #(Item ID) has been changed to an earlier date. (Date Due)",
                    "The due date for (Archetype) (Item Name) #(Item ID) has been changed to a later date. (Date Due)",
                    "Announcement.",
                    "Did you know? The developers have misspelt Apheleia as 'Aphelia' about 99% of the time! (Including just now!)"
                ]
            }
        }
    }
})