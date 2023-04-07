<script setup lang="ts">
import Features from './components/Features/index.vue'
import Hero from './components/hero/Hero.vue'

useHead({
    title: 'Home',
    meta: [
        {
            name: 'description',
            content: 'This is the home page',
        },
    ],
})
</script>

<template>
    <v-main>
        <v-container class="h-100 d-flex flex-column justify-center align-center">
            <Hero />
            <Features />
            <Settings />
        </v-container>
    </v-main>
</template>
<style scoped></style>
<route lang="yaml">
meta:
    layout: HomeLayout
</route>
