export function useAppI18n() {
    const { locale, availableLocales } = useI18n()
    const userLocale = useStorage('userLocale', 'en')
    function onToggleLocale(lang: string) {
        locale.value = lang
        userLocale.value = locale.value
        changeDirection()
    }
    function initLocale() {
        locale.value = userLocale.value
        changeDirection()
    }

    function changeDirection() {
        if (locale.value === 'ar') {
            document.querySelector('html')?.setAttribute('dir', 'rtl')
        } else {
            document.querySelector('html')?.setAttribute('dir', 'ltr')
        }
    }

    return { onToggleLocale, initLocale, availableLocales }
}
