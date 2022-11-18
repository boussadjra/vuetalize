<script setup lang="ts">
import { useTheme } from "vuetify";

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "This is the home page",
    },
  ],
});
</script>

<template>
  <v-main>
    <v-container class="h-100 d-flex justify-center">
      <div class="d-flex flex-column justify-center align-center h-100 hero">
        <h1 class="tagline">
          Start your project with <span class="vuetify3">Vuetify 3</span> faster than ever
        </h1>
        <p class="text-muted py-8 description">
          This template is opinionated and comes with a lot of features out of the box. It
          is meant to be a starting point for your project.
        </p>
        <div class="d-flex justify-start w-100">
          <v-btn color="primary" to="/about" class=""> GET STARTED </v-btn>
          <v-btn
            color="secondary"
            variant="outlined"
            href="https://github.com/boussadjra/vuetify-3-template"
            class="ml-8"
            prepend-icon="mdi-github"
          >
            Github
          </v-btn>
        </div>
      </div>

      <ThemeToggler />
    </v-container>
  </v-main>
</template>
<style scoped>
.hero {
  max-width: 620px;
}
.tagline {
  max-width: 620px;
  font-weight: 900;
  line-height: 1.2;
  font-size: 2.6rem;
  background: linear-gradient(-312deg, #7743db 2%, #b598eb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-theme--light .tagline {
  color: #3b3486;
  background: inherit;
  background-clip: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: inherit;
}

.v-theme--light .vuetify3 {
  background: linear-gradient(-312deg, #7743db 2%, #b598eb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.description {
  max-width: 620px;
  font-weight: 300;
  line-height: 1.5;
}
</style>
