<template>
    <LanguageSwitcher/>
    <div class="text-center h-full bg-black/75 flex flex-col items-center justify-center">
        <h1
            :style="{ fontFamily: languageStore.language === 'en' ? 'Smash Wall' : 'Impact'}"
            class="bg-[url('/images/brick.jpg')] bg-clip-text text-transparent relative bottom-28"
        >
            {{ $t('gameTitle') }}
        </h1>
        <button class="
        p-5
        bg-white/25
        rounded font-['Impact']
        text-red-800
        font-medium
        text-2xl
        opacity-50
        hover:opacity-100
        hover:text-red-600
        hover:border-2
        border-t-white/50
        border-l-white/50
        border-b-black
        border-r-black
        active:border-b-white/25
        active:border-r-white/25
        active:border-t-black
        active:border-l-black
        group
        mt-1
        hover:mt-0
"
        ><span class="relative group-active:top-0.5 group-active:left-0.5 tracking-wide">{{ $t('gameStart') }}</span>
        </button>
    </div>
</template>

<script setup lang="ts">
    import {useLanguageStore} from "~/stores/LanguageStore";
    import {storeToRefs} from "pinia";
    
    onMounted(setInnerWidth)
    onMounted(() => window.addEventListener('resize', setInnerWidth))
    
    const languageStore = useLanguageStore()
    const {language} = storeToRefs(languageStore)
    const titleInitialSize = ref('13.5rem')
    const titleWidthReduction = ref('0')
    const appInnerWidth = ref(0)
    
    function setInnerWidth(): void {
        appInnerWidth.value = window.innerWidth
    }
    
    function setTitleWidthReduction(): void {
        if (languageStore.language === 'en') {
            titleInitialSize.value = '13.5rem'
            titleWidthReduction.value = (1920 - appInnerWidth.value) / 8.75 + 'px'
        } else if (languageStore.language === 'ru') {
            titleInitialSize.value = '11.5rem'
            titleWidthReduction.value = (1920 - appInnerWidth.value) / 10 + 'px'
        }
    }
    
    watch([appInnerWidth, language], setTitleWidthReduction)
</script>

<style scoped lang="scss">
h1 {
    font-size: calc(v-bind(titleInitialSize) - v-bind(titleWidthReduction));
}
</style>