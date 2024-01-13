<template>
    <div class="h-full">
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import {useLanguageStore} from "~/stores/LanguageStore";
    const {t} = useI18n()

    onBeforeMount(() => navigateTo('/'))
    
    const {locale} = useI18n()
    const store = useLanguageStore()
    const {language} = storeToRefs(store)
    
    useSeoMeta({
        title: () => t('gameTitle')
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

body {
    background-image: url('/images/StoneBackground.jpg');
    //overflow: hidden;
    //height: 100vh;
    //max-height: 100vh;
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

@font-face {
    font-family: 'Needleteeth';
    src: url('/fonts/needle/NeedleteethSPRegular.eot');
    src: url('/fonts/needle/NeedleteethSPRegular.eot') format('embedded-opentype'),
    url('/fonts/needle/NeedleteethSPRegular.woff2') format('woff2'),
    url('/fonts/needle/NeedleteethSPRegular.woff') format('woff'),
    url('/fonts/needle/NeedleteethSPRegular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}



.page-enter-active,
.page-leave-active {
    transition: all 0.2s ease-out;
}
.page-enter-from,
.page-leave-to {
    filter: brightness(0);
    background-color: black;
}
</style>
