<script setup lang="ts"></script>
<template>
    <v-card class="mx-auto dark:!border-secondary-900 !border-secondary-100" variant="outlined">
        <v-card-title> {{ $t('dashboard.main.dashboard-overview') }} </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card class="pa-3 !bg-cyan-50 dark:!bg-cyan-950">
                        <v-card-text>
                            <div class="flex items-center gap-5">
                                <div
                                    class="rounded-full w-16 h-16 flex items-center justify-center bg-cyan-200 dark:bg-cyan-800 text-white text-center p-2"
                                >
                                    <span class="i-iconoir-car text-4xl text-cyan-800 dark:text-cyan-200" />
                                </div>
                                <div>
                                    <div class="font-bold text-4xl text-cyan-800 dark:text-cyan-200 text-center">
                                        145
                                    </div>
                                    <span class="text-slate-500 dark:text-slate-400">
                                        {{ $t('dashboard.main.total-rentals') }}
                                    </span>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="pa-3 !bg-green-50 dark:!bg-green-900">
                        <v-card-text>
                            <div class="flex items-center gap-5">
                                <div
                                    class="rounded-full w-16 h-16 flex items-center justify-center bg-green-200 dark:bg-green-700 text-white text-center p-2"
                                >
                                    <span class="i-iconoir-dollar text-4xl text-green-800 dark:text-green-400" />
                                </div>
                                <div>
                                    <div class="font-bold text-4xl text-green-800 dark:text-green-400 text-center">
                                        +$25k
                                    </div>
                                    <span class="text-slate-500 dark:text-slate-400">
                                        {{ $t('dashboard.main.revenue') }}
                                    </span>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card class="pa-3 !bg-purple-50 dark:!bg-purple-900">
                        <v-card-text>
                            <div class="flex items-center gap-5">
                                <div
                                    class="rounded-full w-16 h-16 flex items-center justify-center bg-purple-200 dark:!bg-purple-700 text-white text-center p-2"
                                >
                                    <span class="i-iconoir-star text-4xl text-purple-800 dark:text-purple-400" />
                                </div>
                                <div>
                                    <div class="font-bold text-4xl text-purple-800 dark:text-purple-400 text-center">
                                        4.5
                                    </div>
                                    <span class="text-slate-500 dark:text-slate-400">
                                        {{ $t('dashboard.main.rating') }}
                                    </span>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
