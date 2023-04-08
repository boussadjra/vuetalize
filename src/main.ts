import './assets/main.css'
import 'uno.css'

import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
// import { ViteSSG } from 'vite-ssg'
import VueApexCharts from 'vue3-apexcharts'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import generatedRoutes from '~pages'
import i18n from './plugins/i18n'
import { onInitApp } from './composables/useInitApp'
import { setupLayouts } from 'virtual:generated-layouts'
import vuetify from './plugins/vuetify'

const routes = setupLayouts(generatedRoutes)

// export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL }, ({ app }) => {
//     console.log('createApp')
//     app.use(createPinia())
//     app.use(vuetify)
//     app.use(createHead())
//     app.use(i18n)
//     app.use(VueApexCharts)
// })

const app = createApp({
    render: () => h(App),
    setup() {
        onInitApp()
    },
})

app.use(createPinia())
    .use(vuetify)
    .use(createHead())
    .use(i18n)
    .use(VueApexCharts)
    .use(
        createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),
            routes,
        })
    )
app.mount('#app')
