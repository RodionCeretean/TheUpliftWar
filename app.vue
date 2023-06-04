<template>
  <div class="h-screen bg-[url('/images/StoneBackground.jpg')]">
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
    import {_} from "~/composables/translation";
    useSeoMeta({title: _('gameTitle')})
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
