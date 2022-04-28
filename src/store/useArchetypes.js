import { defineStore } from 'pinia'

export const useArchetypes = defineStore('archetypeStore', {
    state: () => {
        return {
            schemes: [
                {
                    id: 0,
                    name: "Archetype Name",
                    fieldTypes: [
                        0,
                        1,
                        2
                    ],
                    fieldNames: [
                        "field1",
                        "field2",
                        "field3"
                    ]
                },
                {
                    id: 1,
                    name: "Archetype Name 2",
                    fieldTypes: [
                        0,
                        1,
                        2,
                        3
                    ],
                    fieldNames: [
                        "field1",
                        "field2",
                        "field3",
                        "field4"
                    ]
                }
            ],

            tempScheme: [
                "internalID",
                "ID",
                "tag",
                "status"
            ]
        }
    }
})
            