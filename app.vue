<template>
    <div class="h-screen min-h-[320px] bg-[url('/images/StoneBackground.jpg')]">
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import {useLanguageStore} from "~/stores/LanguageStore";
    
    // onBeforeMount(() => navigateTo('/'))
    
    const languageStore = useLanguageStore()
    const {locale} = useI18n()
    const {language} = storeToRefs(languageStore)
    const metaTitle = computed(():string => languageStore.language === 'en' ? 'The Uplift War' : 'Война за возвышение')
    
    useSeoMeta({
        title: () => metaTitle.value
    })
    
    function changeLanguage(lang: string): void {
        locale.value = lang
    }
    
    watch(language, newValue => changeLanguage(newValue))
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
}

@font-face {
    font-family: 'Impact';
    src: url('/fonts/impact/Impact.eot');
    src: url('/fonts/impact/Impact.eot') format('embedded-opentype'),
    url('/fonts/impact/Impact.woff2') format('woff2'),
    url('/fonts/impact/Impact.woff') format('woff'),
    url('/fonts/impact/Impact.ttf') format('truetype'),
    url('/fonts/impact/Impact.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Smash Wall';
    src: url('/fonts/3d_font/SmashWallPersonalUse.eot');
    src: url('/fonts/3d_font/SmashWallPersonalUse.eot') format('embedded-opentype'),
    url('/fonts/3d_font/SmashWallPersonalUse.woff2') format('woff2'),
    url('/fonts/3d_font/SmashWallPersonalUse.woff') format('woff'),
    url('/fonts/3d_font/SmashWallPersonalUse.ttf') format('truetype'),
    url('/fonts/3d_font/SmashWallPersonalUse.svg') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
</style>
