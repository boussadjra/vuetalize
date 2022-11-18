import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "~pages";
import { createHead } from "@vueuse/head";
import vuetify from "./plugins/vuetify";
import "./assets/main.css";

const routes = setupLayouts(generatedRoutes);
console.log("--------------------");
console.log("generatedRoutes", generatedRoutes);
console.log("routes", routes);

console.log("--------------------");
export const createApp = ViteSSG(
  App,
  { routes: generatedRoutes, base: import.meta.env.BASE_URL },

  ({ app, router, routes, isClient, initialState }) => {
    app.use(createPinia());
    app.use(vuetify);
  }
);
