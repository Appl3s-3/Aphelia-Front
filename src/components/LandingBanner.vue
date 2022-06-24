<template>
<div id="landing-banner">
    <div id="banner"></div>
</div>
</template>

<style scoped>
#landing-banner {
    display: flex;
    justify-content: space-around;
    height: 100%;
    width: 90%;
}

#banner {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to top, var(--aph-purple-light) 10%, var(--aph-pink) 120%);

    transition: 0.5s;
}

#banner:hover {
    width: 100%;
    transition: 1.0s;
}
</style>