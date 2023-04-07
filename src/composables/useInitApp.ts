import { useAppI18n } from './useAppI18n'
import { useAppTheme } from './useAppTheme'

export function onInitApp() {
    const { initTheme } = useAppTheme()
    const { initLocale } = useAppI18n()
    onMounted(() => {
        initTheme()
        initLocale()
    })
}
