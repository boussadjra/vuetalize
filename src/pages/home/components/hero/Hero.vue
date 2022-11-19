<script setup lang="ts"></script>

<template>
  <section class="d-flex">
    <div class="glow glow-left"></div>
    <div class="glow glow-right"></div>
    <v-row style="flex: unset" class="hero-wrapper">
      <v-col sm="12" md="6">
        <div
          class="d-flex flex-column justify-center align-center h-100 hero min-h-screen"
        >
          <div class="d-flex flex-column">
            <h1 class="tagline">
              {{ $t("hero.title") }}
            </h1>
            <p class="text-muted py-8 description">
              This template is opinionated and comes with a lot of features out of the
              box. It is meant to be a starting point for your project.
            </p>
          </div>

          <div class="d-flex justify-start w-100">
            <v-btn color="primary-darken-1" to="/about" class=""> GET STARTED </v-btn>
            <v-btn
              color="secondary"
              variant="outlined"
              href="https://github.com/boussadjra/vuetify-3-template"
              class="ml-8"
              prepend-icon="mdi-github"
              target="_blank"
            >
              Github
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col sm="12" md="6" class="d-flex align-center justify-center logo">
        <Logo />
      </v-col>
    </v-row>
  </section>
</template>
<style scoped>
.hero-wrapper {
  z-index: 5;
}
.hero-wrapper .hero {
  max-width: 640px;
}
.tagline {
  font-weight: 900;
  line-height: 1.2;
  font-size: 2.8rem;
  background: linear-gradient(-312deg, #7743db 2%, #ef476f 100%);
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

.min-h-screen {
  min-height: 100vh;
}

.logo {
  z-index: 5;
}
.glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 800px;
  z-index: 0;
  background-image: linear-gradient(135deg, #7743db -50%, #181833 30%);
}

.glow-right {
  right: 0;
  left: unset;
  z-index: 0;
  background-image: linear-gradient(-135deg, #7743db -50%, #181833 30%);
}
</style>
