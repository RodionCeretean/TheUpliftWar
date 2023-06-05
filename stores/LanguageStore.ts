import {defineStore} from "pinia";

export const useLanguageStore = defineStore('LanguageStore', {
    state: () => {
        return {
            language: 'en'
        }
    },

    actions: {
        changeLanguage(lang: string): void {
            this.language = lang
        }
    }
})