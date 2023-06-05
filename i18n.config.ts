import en from "./i18n/en"
import ru from "./i18n/ru"
import {useLanguageStore} from "~/stores/LanguageStore";

const languageStore = useLanguageStore()

export default defineI18nConfig(() => ({
    locale: languageStore.language,
    legacy: false,
    globalInjection: true,
    addSeoAttributes: true,
    messages: {en, ru}
}))