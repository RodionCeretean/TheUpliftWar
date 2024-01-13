import {defineStore} from "pinia";

export const useLanguageStore = defineStore('LanguageStore', () => {
    const language = ref('en')

    function changeLanguage(lang: string): void {
        language.value = lang
    }

    return {language, changeLanguage}
})