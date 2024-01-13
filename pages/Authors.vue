<template>
    <ScreenBorder style="background: url('/images/whiteNoise.jpg')">
            <h2>{{ t('copyByStudio') }}</h2>
            <h1>{{ t('mag') }}</h1>
            <h2>{{ t('originalCreators') }}</h2>
            <p>{{ t('Anisimov') }}</p>
            <p>{{ t('Gorbushin') }}</p>
            <p>{{ t('Tupitsyn') }}</p>
            <h1>{{ t('gameTitle') }}</h1>
    </ScreenBorder>
</template>

<script setup lang="ts">
    import ScreenBorder from "~/layouts/ScreenBorder.vue";

    const {t} = useI18n()
</script>

<style scoped lang="scss">
h1 {
    @apply text-red-600 text-9xl font-['Needleteeth'] tracking-widest font-black
}

h2 {
    @apply tracking-widest font-['Needleteeth'] text-3xl text-lime-300
}

p {
    @apply tracking-widest font-['Needleteeth'] text-6xl text-green-600
}

@media screen and (max-width: 800px) {
    h1 {
        @apply text-red-600 text-8xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-2xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-5xl text-green-600
    }
}

@media screen and (max-width: 600px) {
    h1 {
        @apply text-red-600 text-7xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-4xl text-green-600
    }
}

@media screen and (max-width: 400px) {
    h1 {
        @apply text-red-600 text-7xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-3xl text-green-600
    }
}
</style>