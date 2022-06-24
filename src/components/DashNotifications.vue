<script setup>
import { useSelf } from '../store/useSelf'

import NotificationsDisplay from '../components/NotificationsDisplay.vue'
import NotificationsHeader from '../components/NotificationsHeader.vue'

const selfStore = useSelf()

</script>

<template>
<div id="notifications-layout">
    <NotificationsHeader/>
    <NotificationsDisplay/>
</div>
</template>

<style scoped>
#notifications-layout {
    display: grid;
    grid: auto auto / auto;
}
</style>