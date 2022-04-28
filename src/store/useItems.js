import { defineStore } from 'pinia'

export const useItems = defineStore('itemStore', {
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
                    ],
                    items: [
                        {
                            archetypeID: 0,
                            fields: [
                                "field value 1",
                                "field value 2",
                                "field value 3"
                            ]
                        },
                        {
                            archetypeID: 1,
                            fields: [
                                "field value 1",
                                "field value 2",
                                "field value 3",
                                "field value 4"
                            ]
                        }
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
            