<template>
    <div @click="toMainMenu"
         class="text-center min-h-screen h-full flex flex-col items-center shadow-[inset_0px_0px_50px_10px_black]"
    >
        <div
            class="bg-black/75 min-w-screen w-full min-h-screen h-full shadow-[inset_0px_10px_50px_10px_white] rounded-3xl flex flex-col justify-around items-center">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    const router = useRouter()
    function toMainMenu() {
        router.push('/MainMenu')
    }
</script>

<style scoped lang="scss">

</style>