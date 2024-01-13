<template>
    <div class="min-h-screen h-full bg-black/75 flex flex-col items-center justify-center">
        <LanguageSwitcher/>
        <GameMenu :setPlayers="true" :isEnterPressed="isEnterPressed" v-model:selectedItem="selectedItem" :menuItems="menuItems" class="p-8 selection text-center"/>
    </div>
</template>

<script setup lang="ts">
    import GameMenu from "~/components/GameMenu.vue";
    
    onMounted(() => window.addEventListener('keyup', getKeyboardEvent))
    
    onBeforeUnmount(() => {
        window.removeEventListener('keyup', getKeyboardEvent)
    })
    
    const menuItems = {
        title: 'kingdomAndPlayers',
        items: [
            {title: 'stars', value: ''},
            {title: 'dark', value: ''},
            {title: 'air', value: ''},
            {title: 'light', value: ''},
            {title: 'exit', value: ''}
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
        } else if (e.key === 'ArrowDown') {
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

</style>