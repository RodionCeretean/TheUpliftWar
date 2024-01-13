<template>
    <div class="text-center min-h-screen h-full bg-black/75 flex flex-col items-center">
        <LanguageSwitcher/>
        <GameMenu :menuItems="playersSelection"/>
        <GameMenu :isEnterPressed="isEnterPressed" v-model:selectedItem="selectedItem" :menuItems="menuItems" class="p-8 selection"/>
        <p class="text-red-300 absolute right-14 bottom-14 text-4xl font-bold italic gameDifficulty">{{ $t('pieceOfCake') }}</p>
    </div>
</template>

<script setup lang="ts">
    import GameMenu from "~/components/GameMenu.vue"

    onMounted(() => window.addEventListener('keyup', getKeyboardEvent))

    onBeforeUnmount(() => {
        window.removeEventListener('keyup', getKeyboardEvent)
    })
    
    const playersSelection = {
        title: 'kingdomAndPlayers',
        items: [
            {title: 'stars', value: 'human'},
            {title: 'dark', value: 'computer'},
            {title: 'air', value: 'no'},
            {title: 'light', value: 'no'}
        ]
    }
    const menuItems = {
        title: 'timeToChoose',
        items: [
            {title: 'newGame', value: ''},
            {title: 'tournament', value: ''},
            {title: 'loadSave', value: ''},
            {title: 'bestConquerors', value: ''},
            {title: 'authors', value: ''},
            {title: 'quitGame', value: ''}
        ]
    }

    const selectedItem = ref(0)
    const isEnterPressed = ref(false)

    function getKeyboardEvent(e: KeyboardEvent): void {
        if (e.key === 'ArrowUp') {
            if (selectedItem.value > 0) {
                selectedItem.value--
            } else {
                selectedItem.value = menuItems.items.length - 1
            }
        }
        else if (e.key === 'ArrowDown') {
            if (selectedItem.value < menuItems.items.length - 1) {
                selectedItem.value++
            } else {
                selectedItem.value = 0
            }
        } else if (e.key === 'Enter') {
            isEnterPressed.value = !isEnterPressed.value
        }
    }
</script>

<style scoped lang="scss">
@media screen and (max-width: 700px), (max-height: 800px) {
    .gameDifficulty {
        position: relative;
        right: 0;
        bottom: 0;
        margin-bottom: 20px;
    }
}
</style>