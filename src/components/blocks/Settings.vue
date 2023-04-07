<script setup lang="ts">
const showSettings = ref(false)
</script>
<template>
    <div class="settings-toggler z-50">
        <v-btn icon color="primary" variant="elevated" @click="showSettings = !showSettings">
            <span class="i-iconoir-settings text-2xl"></span>
        </v-btn>
        <Transition name="fade">
            <div v-if="showSettings">
                <ThemeToggler color="secondary" />
                <LocaleToggler />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.settings-toggler {
    bottom: 1rem;
    right: 1rem;
    position: fixed;
}
.theme-toggler {
    bottom: 5rem;
    right: 1rem;
    position: fixed;
}

.locale-toggler {
    z-index: 1000;
    bottom: 9rem;
    right: 1rem;
    position: fixed;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
