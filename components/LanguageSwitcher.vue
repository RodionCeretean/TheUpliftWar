<template>
    <div class="fixed right-14 top-5">
        <button
            @click="select('en')"
            class="bg-white/25 rounded-full py-3 px-4 m-1 text-red-950 border-2 border-red-950 font-medium text-base"
            :class="{ active: languageStore.language === 'en' }"
        >
            En
        </button>
        
        <button
            @click="select('ru')"
            class="bg-white/25 rounded-full py-3 px-4 m-1 text-red-950 border-2 border-red-950 font-medium text-base"
            :class="{ active: languageStore.language === 'ru' }"
        >
            Ru
        </button>
    </div>
</template>

<script setup lang="ts">
    import {useLanguageStore} from "~/stores/LanguageStore";
    
    const languageStore = useLanguageStore()
    
    function select(lang: string): void {
        languageStore.changeLanguage(lang)
    }

</script>

<style scoped lang="scss">
.active {
    background-color: rgba(255, 255, 255, 0.5);
    color: green;
    border-color: green;
    outline: 2px rgba(173, 255, 47, 0.5) solid;
    outline-offset: 2px;
}
</style>