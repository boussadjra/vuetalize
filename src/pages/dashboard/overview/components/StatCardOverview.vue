<script setup lang="ts"></script>
<template>
    <v-card class="mx-auto dark:!border-primary-900 !border-primary-100" variant="outlined">
        <v-card-title> {{ $t('dashboard.main.dashboard-overview') }} </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card class="pa-3 !bg-primary-50 dark:!bg-primary-950">
                        <v-card-text>
                            <div class="flex items-center space-x-2">
                                <div
                                    class="rounded-full w-16 h-16 flex items-center justify-center bg-primary-200 dark:bg-primary-800 text-white text-center p-2"
                                >
                                    <span class="i-iconoir-car text-4xl text-primary-800 dark:text-primary-200" />
                                </div>
                                <div>
                                    <div class="font-bold text-4xl text-primary-800 dark:text-primary-200 text-center">
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
                            <div class="flex items-center space-x-2">
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
                    <v-card class="pa-3 !bg-amber-50 dark:!bg-amber-900">
                        <v-card-text>
                            <div class="flex items-center space-x-2">
                                <div
                                    class="rounded-full w-16 h-16 flex items-center justify-center bg-amber-200 dark:!bg-amber-700 text-white text-center p-2"
                                >
                                    <span class="i-iconoir-star text-4xl text-amber-800 dark:text-amber-400" />
                                </div>
                                <div>
                                    <div class="font-bold text-4xl text-amber-800 dark:text-amber-400 text-center">
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
