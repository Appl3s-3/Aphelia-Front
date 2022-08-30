<script setup>
import LandingTitle from '../components/LandingTitle.vue'
import LandingBanner from '../components/LandingBanner.vue'

import { useNav } from '../store/thegoddamnnavbar'
const n = useNav()

const disableNav = () => {
    n.disableNavBar()
}
setTimeout(disableNav, 1);
</script>

<template>
<div class="landing" id="landing-container">
    <div id="landing-layout">
        <div class="division whitespace"></div>
        <LandingTitle class="division"/>
        <LandingBanner class="division"/>
        <div class="division whitespace"></div>
    </div>
</div>
</template>

<style scoped>
#landing-layout {
    display: grid;
    grid-template: 100vh / 10% 50% 10% 40%;
    justify-content: center;
    align-items: center;
    bottom: 0;
}

.division {
    padding: 0 4em;
}

@media screen and (max-width: 1200px) {
    #landing-layout {
        grid-template: 100vh / 10% 70% 10% 20%;
    }

    #landing-login {
        font-size: 1.2vw;
    }
}

@media screen and (max-width: 800px) {
    #landing-layout {
        grid-template: 100vh / 0% 80% 20% 0%;
    }

    #landing-login {
        font-size: 1.5vw;
        width: 30%;
    }
}
</style>