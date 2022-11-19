<script setup lang="ts">
const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

const isDark = computed(() => theme.global.current.value.dark);
</script>
<template>
  <div class="theme-toggler">
    <v-btn
      :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
      color="secondary"
      @click="toggleTheme"
    ></v-btn>
  </div>
</template>

<style scoped>
.theme-toggler {
  bottom: 1rem;
  right: 1rem;
  position: fixed;
}
</style>
