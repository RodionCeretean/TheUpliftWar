<template>
    <ScreenBorder style="background: url('/images/bestConquerorsBG.jpg')">
        <h1>{{ t('gaiaGreatestConquerors') }}</h1>
        <table class="w-9/12">
            <thead class="shadow-[0_12px_6px_-12px_rgb(251_191_36)]">
            <tr scope="col">
                <th v-for="(header, index) in tableHeaders" :key="header" class="min-w-fit w-4/12"><p :class="{flex: index !== 0}">{{ t(header) }}</p></th>
            </tr>
            </thead>
            <tbody class="shadow-[0_20px_12px_-20px_rgb(251_191_36)] rounded-[150px]">
            <tr v-for="row in 10" :key="row">
                <td><p>{{ row }}</p></td>
                <td><p class="flex">Name</p></td>
                <td><p class="flex">Ratio</p></td>
            </tr>
            </tbody>
        </table>
        <h2>{{ t('battleIsMoreImportantThanVictory') }}</h2>
    </ScreenBorder>
</template>

<script setup lang="ts">
    import ScreenBorder from "~/layouts/ScreenBorder.vue";

    const {t} = useI18n()
    const tableHeaders = ['place', 'name', 'ratio']
</script>

<style scoped lang="scss">
h1 {
    @apply text-red-600 text-9xl font-['Needleteeth'] tracking-widest font-black
}

h2 {
    @apply tracking-widest font-['Needleteeth'] text-7xl text-lime-300
}

p {
    @apply tracking-widest font-['Needleteeth'] text-6xl text-green-600
}

@media screen and (max-width: 1400px) {
    h1 {
        @apply text-red-600 text-6xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-5xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-5xl text-green-600
    }
}

@media screen and (max-width: 800px) {
    h1 {
        @apply text-red-600 text-5xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-4xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-5xl text-green-600
    }
}

@media screen and (max-width: 600px) {
    h1 {
        @apply text-red-600 text-4xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-2xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-4xl text-green-600
    }
}

@media screen and (max-width: 400px) {
    h1 {
        @apply text-red-600 text-3xl font-['Needleteeth'] tracking-widest font-black
    }
    
    h2 {
        @apply tracking-widest font-['Needleteeth'] text-xl text-lime-300
    }
    
    p {
        @apply tracking-widest font-['Needleteeth'] text-3xl text-green-600
    }
}
</style>