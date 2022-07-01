<script setup>
import { useSelf } from '../store/useSelf'

import NotificationsHeader from '../components/NotificationsHeader.vue'
import NotificationsDisplay from '../components/NotificationsDisplay.vue'

const selfStore = useSelf()
</script>

<template>
<div class="notifications notifications-container">
    <div id="notifications-layout">
        <NotificationsHeader class="o"/>
        <NotificationsDisplay class="o"/>
    </div>
</div>
</template>

<style scoped>
.o {
    border: 1px solid red;
}


.notifications * {
    --list-font-size: 24px;
}

#notifications-layout {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

#notifications-layout * {
    width: 80%;
}
</style>