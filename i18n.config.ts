import en from "./i18n/en"
import ru from "./i18n/ru"
export default defineI18nConfig(() => ({
    locale: 'ru',
    legacy: false,
    globalInjection: true,
    addSeoAttributes: true,
    messages: {en, ru}
}))