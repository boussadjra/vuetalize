<script setup lang="ts"></script>
<template>
  <!-- 404 page -->
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold code404 text-red-accent-3">404</h1>
        <h2 class="headline font-weight-medium mb-4 text-red-accent-2">Page not found</h2>
        <p class="mb-12">
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </p>
        <v-btn color="primary" to="/home" class="px-12">Back to home</v-btn>
      </v-col>
      <ThemeToggler />
    </v-row>
  </v-container>
</template>

<style scoped>
.code404 {
  font-size: 15rem;
  font-weight: bold;
}
</style>
