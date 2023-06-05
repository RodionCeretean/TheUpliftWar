export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
    i18n: {
        vueI18n: './i18n.config.ts'
    }
})