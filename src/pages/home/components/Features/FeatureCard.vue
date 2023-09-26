<script setup lang="ts">
import type { PropType } from 'vue'
type Feature = {
    title: string
    icon: string
    description: string
}
defineProps({
    feature: {
        type: Object as PropType<Feature>,
        required: true,
    },
})
</script>
<template>
    <v-card
        class="mx-4 ltr:p-1 rtl:pt-1 h-100 position-relative text-gray-500 dark:text-gray-300"
        max-width="344"
        min-width="256"
    >
        <div class="gradient-border"></div>
        <div class="gradient-border--wrapper"></div>
        <v-card-title class="pa-4">
            <h3 class="d-flex space-x-4 rtl:space-x-reverse flex items-center font-weight-regular">
                <div
                    class="dark:bg-secondary-800 bg-secondary-50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                    <v-icon color="secondary" size="32">{{ feature.icon }}</v-icon>
                </div>
                <span> {{ feature.title }} </span>
            </h3>
        </v-card-title>
        <v-card-text>
            <p>
                {{ feature.description }}
            </p>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.gradient-border {
    background: linear-gradient(90deg, #008ad1 0%, #f39f0d 30%);
    background-size: 600% 600%;
    border-radius: 8px;
    height: calc(100% + 2px);
    left: 0;
    right: 0;
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

html[dir='rtl'] .gradient-border {
    left: auto;
    right: 2;
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
