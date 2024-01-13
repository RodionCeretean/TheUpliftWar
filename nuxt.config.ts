export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
    devtools: {
        enabled: true
    },
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    }
})