<script setup lang="ts">
import { useAppI18n } from '@/composables/useAppI18n'

const { availableLocales, onToggleLocale } = useAppI18n()

defineProps({
    color: {
        type: String,
        default: 'inherit',
    },
})
</script>
<template>
    <div class="locale-toggler">
        <v-menu location="start">
            <template v-slot:activator="{ props }">
                <v-btn icon :color="color" v-bind="props">
                    <span class="i-iconoir-globe text-2xl"></span>
                </v-btn>
            </template>

            <v-list density="compact">
                <v-list-item
                    v-for="(lang, index) in availableLocales"
                    :key="index"
                    :value="index"
                    @click="onToggleLocale(lang)"
                >
                    <v-list-item-title>
                        <span class="uppercase">
                            {{ lang }}
                        </span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<style scoped></style>
