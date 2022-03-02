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
    <div>
        <!-- Filter options, etc -->
        <p>This is a filter option.</p>
    </div>
    <div>
        <!-- Container for the list of items -->
        <table style="border: 1px solid red;">
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
        <ul>
            <li>This is an item.</li>
            <li v-for="item in tempItems" :key="item.ID">{{ item.text }}</li>
        </ul>
    </div>
</template>

<style scoped>
@import "../assets/list.css";
table {
    width: 70vw;
}
th,
td {
    border: 1px solid red;
    padding: 15px;
    margin: 10px, 0;
}
</style>