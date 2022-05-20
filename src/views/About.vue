<script setup>
</script>

<template>
    <div class="about about-container">
        <h2>About</h2>
        <div class="about-layout">
            <!-- Developers/contributors/??? -->
            <div class="about-developers-container">
                <h3>Developers</h3>
                <ul class="about-developers-list">
                </ul>
            </div>
            <div class="about-apheleia-container">
                <h2>apheleia</h2>
                <p>aphelia LOGO</p>
                <p>
                    Apheleia (stylized apheleia) is an inventory management system for lending and
                    returning items. The project began by four Software Design and Development students
                    in 2022 and is maintained by the same group.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-layout {
    grid: auto auto / auto;
    margin: 0 20%;
}

.about-layout > div {
    background-color: var(--aph-back1);
    margin: 1em 0;
}
</style>
