import type { ThemeInstance } from 'vuetify'

export function toggleTheme(theme: ThemeInstance) {
    if (theme.global.current.value.dark) {
        document.body.classList.toggle('dark')
    } else {
        document.body.classList.remove('dark')
    }
}
