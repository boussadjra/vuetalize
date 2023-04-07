/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    plugins: ['import'],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended'],
        },
    ],

    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-console': 'warn',
        'no-debugger': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'error',
        'import/no-unresolved': ['error', { module: true }],
    },
    settings: {
        'import/resolver': {
            typescript: {
                directory: './src/auto-imports.d.ts',
            },
        },
    },
}
