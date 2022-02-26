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
    <header>
        <img src="../assets/logo.svg">

        <a href="settings.vue">
            Settings
        </a>
    </header>
</template>

<style>
</style>