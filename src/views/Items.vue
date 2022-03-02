<script setup>
let headingIndex = 0
let tempScheme = [
    "internalID",
    "ID",
    "tag",
    "status"
]

let tempItems = [
    {
        "internalID": 0,
        "ID": 1,
        "tag": "#1",
        "status": 1 // broken
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
        "status": 2 // needs to be checked
    },
    {
        "internalID": 3,
        "ID": 4,
        "tag": "#4",
        status: 0
    }
]
</script>

<template>
    <h2 class="apheleia">Items</h2>
    <!-- Appl3s: I can't find a way to make checkboxes enabled by default -->
    <div class="items items-container items-layout">
        <div class="items-filters-container">
            <!-- Sorting, searching and filtering -->
            <div class="items-filters-left">
                <!-- Select whether to whitelist or blacklist the following list -->
                <select class="items-" name="items-whitelist">
                    <option value="whitelist">Whitelist (Show only...)</option>
                    <option value="blacklist">Blacklist (Hide only...)</option>
                </select>
    
                <!-- List of items to filter according to the above select -->
                <ul class="items-filter items-type-filter-container">
                    <!-- Generate list of archetypes here -->
                    <li>
                        <label class="items-type-filter" for="items-archetype-type">Archetype Type</label>
                        <input class="items-type-filter" type="checkbox" name="items-archetype-type">
                    </li>
                    <li>
                        <label class="items-type-filter" for="items-archetype-type">Archetype Type</label>
                        <input class="items-type-filter" type="checkbox" name="items-archetype-type">
                    </li>
                    <li>
                        <label class="items-type-filter" for="items-archetype-type">Archetype Type</label>
                        <input class="items-type-filter" type="checkbox" name="items-archetype-type">
                    </li>
                </ul>
    
                <!-- I don't know -->
                <!-- <select class="items-filter" name="item-field-to-sort-by"> -->
                    <!-- Generate Item fields here-->
                    <!-- <option value="temp">field</option>
                    <option value="temp">field</option>
                </select> -->
            </div>
            <div class="items-filters-right">
                <div>
                    <label class="items-filter" for="items-show-internal-id">Show Internal ID</label>
                    <input class="items-filter" type="checkbox" name="items-show-internal-id">
                </div>
    
                <!-- Searching -->
                <input class="items-filter" type="text" name="items-search" placeholder="Search">
            </div>
        </div>
        <div class="items-table-container">
            <!-- Container for the list of items -->
            <table class="items-table">
                <tr>
                    <th v-for="heading in tempScheme">{{ heading }}</th>
                </tr>
                <tr v-for="item in tempItems">
                    <td>{{ item[tempScheme[0]] }}</td>
                    <td>{{ item[tempScheme[1]] }}</td>
                    <td>{{ item[tempScheme[2]] }}</td>
                    <td>{{ item[tempScheme[3]] }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
@import "../assets/list.css";
div {
    border: 1px solid red;
}
/* .items-filters-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center; 
}*/

.items-filters-left {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 50%;
}

.items-filters-right {
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: right;
    justify-items: right;
    justify-self: right;
    align-items: center; /* Vertical alignment */
    /* Help this won't align to the right*/
}

.items-filter {
    margin: auto 15px;
}

.items-table {
    width: 70vw;
    border: 1px solid red;
}

th, td {
    border: 1px solid red;
    padding: 15px;
    margin: 10px, 0;
}
</style>