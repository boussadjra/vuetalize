import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default defineConfig({
    shortcuts: {
        'feature-icon': 'dark:bg-secondary-800',
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetTypography(),
        presetWebFonts(),
    ],
    theme: {
        colors: {
            primary: {
                50: '#DCCEF6',
                100: '#D4C3F4',
                200: '#C4AEEF',
                300: '#B599EB',
                400: '#A583E7',
                500: '#966EE3',
                600: '#8658DF',
                700: '#7743DB',
                800: '#5A25C1',
                900: '#441C92',
                950: '#39177A',
            },
            secondary: {
                50: '#FCE9FD',
                100: '#F9D7EF',
                200: '#F3B4D3',
                300: '#EE91B7',
                400: '#E86D9B',
                500: '#E34A7F',
                600: '#D4215C',
                700: '#A4194B',
                800: '#731239',
                900: '#420A28',
            },
        },
    },

    transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
