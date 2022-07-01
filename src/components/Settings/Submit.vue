<script setup>
</script>

<template>
<li id="submit-settings">
    <button type="reset" class="apheleia reset">Reset to default</button>
    <div>
        <button type="button" class="apheleia cancel" @click="$emit('cancelSettings')">Cancel</button>
        <button type="button" class="apheleia save" @click="$emit('saveSettings')">Save</button>
    </div>
</li>
</template>

<style scoped>
#submit-settings {
    margin: 2em auto auto auto;
    padding: 20px;
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    border: 1px solid red;
    background-color: var(--aph-back2);
}
</style>