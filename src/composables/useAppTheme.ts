import { toggleTheme } from '@/utils/toggleTheme'

export function useAppTheme() {
    const theme = useTheme()
    const userTheme = useStorage('userTheme', 'light')
    function onToggleTheme() {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
        userTheme.value = theme.global.name.value
        toggleTheme(theme)
    }
    function initTheme() {
        theme.global.name.value = userTheme.value
        toggleTheme(theme)
    }

    const isDark = computed(() => theme.global.current.value.dark)

    return { onToggleTheme, isDark, initTheme }
}
