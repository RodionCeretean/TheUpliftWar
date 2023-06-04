<template>
    <div class="text-center h-full bg-black/75 flex flex-col items-center">
        <h1 class="font-['Smash_Wall'] bg-[url('/images/brick.jpg')] bg-clip-text text-transparent">{{ $t('gameTitle') }}</h1>
        <GameMenu :menuItems="playersSelection" :itemsAreObject="true"/>
        <GameMenu :menuItems="menuItems" :itemsAreArray="true" class="p-8 selection"/>
        <p class="text-red-300 absolute right-14 bottom-14 text-4xl font-bold italic">{{ $t('pieceOfCake') }}</p>
    </div>
</template>

<script setup lang="ts">
    import GameMenu from "~/components/GameMenu.vue"
    
    onMounted(setInnerWidth)
    onMounted(() => window.addEventListener('resize', setInnerWidth))
    
    const titleWidthReduction = ref('0')
    const appInnerWidth = ref(0)
    const playersSelection = {
        title: _('kingdomAndPlayers'),
        items: {
            [_('stars')]: _('human'),
            [_('dark')]: _('computer'),
            [_('air')]: _('no'),
            [_('light')]: _('no')
        }
    }
    const menuItems = {
        title: _('timeToChoose'),
        items: [_('newGame'), _('tournament'), _('loadSave'), _('bestConquerors'), _('authors'), _('quitGame')]
    }
    
    function setInnerWidth() {
        appInnerWidth.value = window.innerWidth
    }
    
    function setTitleWidthReduction() {
        titleWidthReduction.value = (1920 - appInnerWidth.value) / 8.75 + 'px'
    }
    
    watch(appInnerWidth, setTitleWidthReduction)

</script>

<style scoped lang="scss">
h1 {
    font-size: calc(13.5rem - v-bind(titleWidthReduction));
}
</style>