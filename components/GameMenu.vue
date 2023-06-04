<template>
    <GameContext>
        <h2 class="text-cyan-400 font-medium text-3xl">{{ menuItems.title }}</h2>
        <ul v-if="itemsAreArray">
            <li
                :class="{ active: selectedItem === index }"
                class="text-yellow-500 font-medium text-2xl mt-2"
                v-for="(item, index) in menuItems.items"
            >
                {{ item }}
            </li>
        </ul>
        <ul v-if="itemsAreObject">
            <li
                :class="{ active: selectedItem === key }"
                class="text-yellow-500 font-medium text-2xl mt-2 relative"
                v-for="(item, key) in menuItems.items"
            >
                <span class="absolute right-40">{{ key }}</span> <span class="relative">-</span> <span class="text-yellow-200 absolute left-40">{{ item }}</span>
            </li>
        </ul>
    </GameContext>
</template>

<script setup lang="ts">
    import GameContext from "~/layouts/GameContext.vue";
    defineProps(['menuItems', 'itemsAreArray', 'itemsAreObject'])
    
    const selectedItem = ref(0)
</script>

<style scoped lang="scss">
.selection {
    ul {
        margin-top: 24px;
    }
    
    h2 {
        font-weight: bold;
        font-style: italic;
        font-size: 2.5rem;
    }
    
    .active {
        color: rgba(255, 0, 0, 0.75);
        font-size: 2rem;
    }
}
</style>