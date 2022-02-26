<!-- This file is an SFC (Single File Component) which contains HTML, CSS and JavaScript -->
<!-- Recurring Terms:
        Vue:
            Elements-   HTML in <template> with Vue code
            Components- Other Vue files
-->

<!-- Vue related script is stored in here (<script>)-->
<script setup>
    // Import other Vue Components using 'import'
    import HelloWorld from './components/HelloWorld.vue'

    // See https://www.geeksforgeeks.org/what-is-export-default-in-javascript/ for more
    // 'export' in JavaScript allows other files to read variables/functions that are defined
    //     i.e export {name1, name2, nameN};  // A JS object with name1, name2, nameN (braces can be removed to export them individually)
    // These can be 'import'ed by other files
    // 'export default' exports a single object (hence, the reason for braces) and can be renamed upon importing 
    //     i.e export default {};
    //         import VueSFC from './filepath.vue'
    export default {
        // WARNING: If these exist with nothing in them you WILL get errors.
        // Variables (data) that Vue can access in the template (and maybe style)
        data() {
            return {
                // The variables go here, its basically JSON
            }
        },

        // Run code after mount
        mounted() {
            
        },

        // Vue Components
        components: {
            // Putting components here allows them to be used in <template>
            // e.g <ChildComp />
        },

        // Something about reactive elements
        // Methods that return Computed Properties
        computed: {

        },

        // Methods to watch elements
        watch: {

        },

        // Used in child components, basically parameters
        props: {

        },

        // Used in child components, basically return
        emits: ['response'],
        created() {
            this.$emit('response', 'hello from child')
        },

        // Methods that can be called from Vue Elements
        // Typically used for event listeners
        methods: {
            myMethod() {
            },
            myEventListener() {
            }
        }
    }
</script>

<!-- The HTML rendering -->
<template>
    <!-- Directive list:
            v-bind:[id/class]           :[id/class]
            v-on:[EVENT]                @[EVENT]
            v-model="FOO"
            v-if="FOO"
            v-else
            v-for="FOO in BAR"

            https://vuejs.org/api/built-in-special-attributes.html
    -->

    <!-- Attribute Binding (v-bind):
            Use the 'v-bind:[id/class]' directive
            Shorthand :id or :class
    -->
    <h1 v-bind:id="titleClass">Make me red</h1>
    <h1       :id="titleClass">Make me red</h1>
    <h1 v-bind:class="titleClass">Make me red</h1>
    <h1       :class="titleClass">Make me red</h1>
    
    <!-- Event Listener (v-on):
            Listen to DOM events with 'v-on:[EVENT]'
            Shorthand @[EVENT]
    -->
    <button v-on:click="increment">{{ count }}</button>
    <button     @click="increment">{{ count }}</button>

    <!-- Form Bindings (v-model):
            'v-model' syncs the value of an element with a variable
    -->
    <input v-model="text" placeholder="Type here">

    <!-- Conditional Rendering:
            'v-if' runs if the variable is true
            'v-else' runs in any other case
    -->
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <!-- List Rendering:
            'v-for' is a fancy for loop, similar to python/rust: for (something) in (a collection)
            ':key' is a built in special attribute, see link above
    -->
    <li v-for="todo in todos" :key="todo.id"></li>

    <!-- Template Refs: -->

    <!-- Slots (Child Components): -->

</template>

<!-- The CSS, this whole thing gets moved into <head> when the program is run -->
<style>
</style>


<!-- Below is the entire summary without the comments -->
<!--
<script setup>
    export default {
        data() {
            return {
            }
        },

        mounted() {
        },

        components: {
        },

        computed: {
        },

        watch: {
        },

        props: {
        },

        emits: ['response'],
        created() {
            this.$emit('response', 'hello from child')
        },

        methods: {
            myMethod() {
            },
            myEventListener() {
            }
        }
    }
</script>

<template>
</template>

<style>
</style>
-->