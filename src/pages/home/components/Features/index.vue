<script setup lang="ts">
import FeatureCard from "./FeatureCard.vue";

const features = [
  {
    title: "Vite",

    icon: "mdi-flash",
    description:
      " Vite is a new breed of frontend build tool that significantly improves the frontend development experience.",
  },
  {
    title: "Vuetify",
    icon: "mdi-vuetify",
    description:
      "Vuetify is a semantic component framework for Vue.js. It aims to provide clean, semantic and reusable components that make building your application a breeze.",
  },
  {
    title: "Vue Router",
    icon: "mdi-router-wireless",
    description:
      "Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.",
  },
  {
    title: "Auto import",
    icon: "mdi-import",
    description: "Auto import components, directives, pages, and more.",
  },
  {
    title: "Vue Use",
    icon: "mdi-puzzle",
    description: "Vue Use is a collection of useful composition functions for Vue.js.",
  },
  {
    title: "Vue Use Head",
    icon: "mdi-head",
    description:
      "Vue Use Head is a composition function for Vue.js that allows you to easily manage the document head.",
  },

  {
    title: "Vue i18n",
    icon: "mdi-translate",
    description:
      "Vue i18n is internationalization plugin for Vue.js. It provides services for translating Vue component templates, directives, and parts of HTML.",
  },
  {
    title: "Pinia",
    icon: "mdi-fruit-pineapple",
    description:
      "Pinia is a store for Vue.js applications. It is inspired by Vuex and uses a similar API.",
  },

  {
    title: "Dark Mode",

    icon: "mdi-weather-night",
    description:
      "The theme of the app is automatically set to dark mode based on your system settings.",
  },
];
</script>
<template>
  <section class="mt-16 d-flex flex-column align-center">
    <h2>Features</h2>
    <v-row class="d-flex justify-start w-100 mt-16 flex-wrap">
      <v-col v-for="(feature, index) in features" :key="index">
        <FeatureCard :feature="feature" />
      </v-col>
    </v-row>
  </section>
</template>

<style scoped></style>
