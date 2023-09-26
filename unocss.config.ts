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
            scale: 1,
            warn: true,
            prefix: 'i-',
            extraProperties: {
                display: 'inline-block',
            },
        }),
        presetTypography(),
        presetWebFonts(),
    ],
    theme: {
        colors: {
            primary: {
                '50': '#fffbeb',
                '100': '#fdf3c8',
                '200': '#fce68b',
                '300': '#fad34f',
                '400': '#f9c22e',
                '500': '#f39f0d',
                '600': '#d77908',
                '700': '#b2540b',
                '800': '#91410f',
                '900': '#773610',
                '950': '#441b04',
            },
            secondary: {
                '50': '#eff9ff',
                '100': '#dff3ff',
                '200': '#b7e8ff',
                '300': '#77d7ff',
                '400': '#2ec4ff',
                '500': '#03adf4',
                '600': '#008ad1',
                '700': '#006ea9',
                '800': '#015d8b',
                '900': '#074d73',
                '950': '#042940',
            },
        },
    },

    transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
