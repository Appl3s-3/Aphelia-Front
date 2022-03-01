<!-- This file is an SFC (Single File Component) which contains HTML, CSS and JavaScript -->
<!-- Recurring Terms:
        Vue:
            Elements-   HTML in <template> with Vue code
            Components- Other Vue files
-->

<!-- Note that a Vue <script setup> is different from <script> -->
<script setup>
// Import other Vue Components using 'import'
import HelloWorld from './components/HelloWorld.vue'
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
<!-- scoped means that the CSS will not affect other files, there is no reason not to use it since we can import CSS anyway -->
<style scoped>
@import 'filepath.css';
</style>


<!-- Below is the entire summary without the comments -->
<!--
<script setup>
</script>

<template>
</template>

<style scoped>
</style>
-->