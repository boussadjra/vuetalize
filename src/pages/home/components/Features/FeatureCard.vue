<script setup lang="ts">
import type { PropType } from "vue";
type Feature = {
  title: string;
  icon: string;
  description: string;
};
defineProps({
  feature: {
    type: Object as PropType<Feature>,
    required: true,
  },
});
</script>
<template>
  <v-card class="mx-4 pa-1 h-100 position-relative" max-width="344" min-width="256">
    <div class="gradient-border"></div>
    <div class="gradient-border--wrapper"></div>
    <v-card-title class="pa-4">
      <h3 class="d-flex flex-column font-weight-regular">
        <v-icon color="secondary" class="mb-1" size="48">{{ feature.icon }}</v-icon>
        <span> {{ feature.title }} </span>
      </h3>
    </v-card-title>
    <v-card-text>
      <p class="text-grey-lighten-1">
        {{ feature.description }}
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.gradient-border {
  background: linear-gradient(90deg, #7743db 0%, #ef476f 30%);
  background-size: 600% 600%;
  border-radius: 8px;
  height: calc(100% + 2px);
  left: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  transform: translate(-1px, -1px);
  width: calc(100% + 2px);
  animation: rotate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
}

.v-card:hover .gradient-border {
  opacity: 1;
  transition: opacity 0.7s ease-in-out;
}

.gradient-border--wrapper {
  background: inherit;
  /*background-size: 600% 600%;*/
  border-radius: 7px;
  height: calc(100% - 4px);
  left: 2;
  position: absolute;
  z-index: -1;
  top: 2;
  transform: translate(-2px, -2px);
  width: calc(100% - 4px);
}

@keyframes rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
