<template>
    <div class="min-h-screen h-full bg-black/75 flex flex-col items-center justify-center">
        <LanguageSwitcher/>
        <GameMenu @setDifficulty="setDifficulty" :difficultyMenu="true" :isEnterPressed="isEnterPressed" v-model:selectedItem="selectedItem" :menuItems="menuItems" class="p-8 selection text-center"/>
    </div>
</template>

<script setup lang="ts">
    import GameMenu from "@/components/GameMenu.vue"
    import {useDifficultyStore} from "~/stores/DifficultyStore";
    
    onMounted(() => window.addEventListener('keyup', getKeyboardEvent))
    
    onBeforeUnmount(() => {
        window.removeEventListener('keyup', getKeyboardEvent)
    })
    
    const difficultyStore = useDifficultyStore()
    
    const menuItems = {
        title: 'gameDifficultyLevel',
        items: [
            {title: 'pieceOfCake', value: ''},
            {title: 'lifeIsHard', value: ''},
            {title: 'youWillBeKilled', value: ''}
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
    
    function setDifficulty(value: number) {
        difficultyStore.changeDifficulty(value)
    }
</script>

<style scoped lang="scss">

</style>