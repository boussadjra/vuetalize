import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";

import vuetify from "./plugins/vuetify";
import "./assets/main.css";
import { createHead } from "@vueuse/head";

const routes = setupLayouts(generatedRoutes);
console.log("--------------------");
console.log("generatedRoutes", generatedRoutes);
console.log("routes", routes);

console.log("--------------------");
const app = createApp(App);
app.use(createPinia());
app.use(vuetify);
app.use(createHead());
app.use(
  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: generatedRoutes,
  })
);
app.mount("#app");
