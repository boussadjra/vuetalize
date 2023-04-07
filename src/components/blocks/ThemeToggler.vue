<script setup lang="ts">
import { useAppTheme } from '@/composables/useAppTheme'

const { isDark, onToggleTheme } = useAppTheme()

defineProps({
    color: {
        type: String,
        default: 'inherit',
    },
})
</script>
<template>
    <div class="theme-toggler">
        <v-btn icon :color="color" @click="onToggleTheme">
            <span :class="isDark ? 'i-iconoir-sun-light' : 'i-iconoir-half-moon'" class="text-2xl"></span>
        </v-btn>
    </div>
</template>

<style scoped></style>
