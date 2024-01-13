<template>
    <div class="text-center min-h-screen h-full bg-black/75 flex flex-col items-center justify-center">
        <LanguageSwitcher/>
        <h1
            ref="h1ref"
            :style="h1Styles"
            class="mt-16 mx-1 bg-[url('/images/brick.jpg')] bg-clip-text text-transparent relative"
        >
            {{ $t('gameTitle') }}
        </h1>
        <NuxtLink to="/MainMenu">
            <button ref="startButton" class="group startButton">
                <span class="relative group-active:top-0.5 group-active:left-0.5 tracking-wide">{{ $t('gameStart') }}</span>
            </button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import {useLanguageStore} from "~/stores/LanguageStore";
    import {storeToRefs} from "pinia";
    
    const languageStore = useLanguageStore()
    const {language} = storeToRefs(languageStore)
    const titleInitialSize = ref(13.5)
    const computedTitleInitialSize = ref('13.5rem')
    const titleWidthReduction = ref(0)
    const appInnerWidth = ref(0)
    const appInnerHeight = ref(0)
    const h1Height = ref(0)
    const h1Styles = computed(() => {
        if (languageStore.language === 'en') {
            return {
                fontFamily: 'Smash Wall',
                marginBottom: '0'
            }
        } else {
            return {
                fontFamily: 'Impact',
                marginBottom: '20px'
            }
        }
    })
    
    const startButton = ref()
    onMounted(setInnerDimensions)
    onMounted(() => window.addEventListener('resize', setInnerDimensions))
    onMounted(() => window.addEventListener('keyup', clickStartButton))
    onBeforeUnmount(() => window.removeEventListener('keyup', clickStartButton))
    
    const h1ref = ref()
    
    function clickStartButton(e: KeyboardEvent): void {
        if (e.key === ' ') startButton.value.click()
    }
    
    function setTitleInitialSize(newValue: number, oldValue: number): void {
        if (appInnerHeight.value <= 320) {
            titleInitialSize.value = 5.5
            computedTitleInitialSize.value = titleInitialSize.value + 'rem'
        } else {
            if (h1ref) {
                nextTick(() => {
                    if (newValue <= oldValue) {
                        h1Height.value = h1ref?.value?.clientHeight
                        if (languageStore.language === 'ru' && titleInitialSize.value > 11.5) {
                            titleInitialSize.value = 11.5
                            computedTitleInitialSize.value = titleInitialSize.value + 'rem'
                        }
                        if (h1Height.value > appInnerHeight.value / 2) {
                                titleInitialSize.value -= 1
                                computedTitleInitialSize.value = titleInitialSize.value + 'rem'
                        }
                    } else if (newValue > oldValue) {
                        h1Height.value = h1ref?.value?.clientHeight
                        if (h1Height.value < appInnerHeight.value / 2) {
                            if (languageStore.language === 'en' && titleInitialSize.value === 13.5) {
                                titleInitialSize.value = 13.5
                                computedTitleInitialSize.value = titleInitialSize.value + 'rem'
                            } else if (languageStore.language === 'ru' && titleInitialSize.value >= 11.5) {
                                titleInitialSize.value = 11.5
                                computedTitleInitialSize.value = titleInitialSize.value + 'rem'
                            } else {
                                titleInitialSize.value += 1
                                computedTitleInitialSize.value = titleInitialSize.value + 'rem'
                            }
                        }
                    }
                })
            }
        }
    }
    
    function setInnerDimensions(): void {
        appInnerWidth.value = window.innerWidth
        appInnerHeight.value = window.innerHeight
        setTitleInitialSize(appInnerHeight.value, appInnerHeight.value)
    }
    
    function setTitleWidthReduction(): void {
        if (languageStore.language === 'en') {
            titleInitialSize.value = 13.5
            computedTitleInitialSize.value = titleInitialSize.value + 'rem'
            titleWidthReduction.value = (1920 - appInnerWidth.value) / 8.75
        } else if (languageStore.language === 'ru') {
            titleInitialSize.value = 11.5
            computedTitleInitialSize.value = titleInitialSize.value + 'rem'
            titleWidthReduction.value = (1920 - appInnerWidth.value) / 10
        }
    }
    
    const computedInnerHeight = computed(() => appInnerHeight.value + 'px')
    const computedTitleWidthReduction = computed(() => titleWidthReduction.value + 'px')
    
    watch([appInnerWidth, language], () => {
        setTitleWidthReduction()
        setTitleInitialSize(appInnerHeight.value, appInnerHeight.value)
    })
    watch(titleInitialSize, () => setTitleInitialSize(appInnerHeight.value, appInnerHeight.value))
    watch(appInnerHeight, (newValue, oldValue) => setTitleInitialSize(newValue, oldValue))
</script>

<style scoped lang="scss">
.startButton {
    @apply mt-1 relative p-5 bg-white/25 rounded font-['Impact'] text-red-800 font-medium text-2xl opacity-50 hover:opacity-100 hover:text-red-600 hover:border-2 border-t-white/50 border-l-white/50 border-b-black border-r-black active:border-b-white/25 active:border-r-white/25 active:border-t-black active:border-l-black hover:mt-0
}

h1 {
    font-size: calc(v-bind(computedTitleInitialSize) - v-bind(computedTitleWidthReduction));
}

@media (hover: none) {
    .startButton {
        @apply opacity-100 text-red-600 border-2 mt-0
    }
    
    .startButton:hover {
        @apply opacity-100 text-red-600 border-2 mt-0
    }
}

@media (pointer: coarse) {
    .startButton {
        cursor: none;
    }
}

@media screen and (max-width: 1000px) {
    h1 {
        font-size: calc(v-bind(computedTitleInitialSize) - ((1920px - 1000px) / 8.75));
    }
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: calc(v-bind(computedTitleInitialSize) - ((1920px - 1000px) / 7));
    }
}

@media screen and (max-height: 620px) {
    button {
        bottom: calc((620px - v-bind(computedInnerHeight)) / 10);
    }
}
</style>