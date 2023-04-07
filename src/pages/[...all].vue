<script setup lang="ts"></script>
<template>
    <v-container class="text-center flex justify-center w-full items-center">
        <v-row>
            <v-col cols="12" class="flex justify-center flex-column items-center">
                <h1 class="display-2 font-weight-bold code404 text-red-accent-3">404</h1>
                <h2 class="headline font-weight-medium mb-4 text-red-accent-2">
                    {{ $t('error.pageNotFound') }}
                </h2>
                <p class="mb-12">
                    {{ $t('error.pageNotFoundDescription') }}
                </p>
                <div class="flex space-x-2 space-x-reverse">
                    <v-btn color="primary" to="/home" class="px-12 mx-1">
                        {{ $t('error.backToHome') }}
                    </v-btn>
                    <v-btn color="secondary" to="/dashboard/overview" class="px-12">
                        {{ $t('error.backToDashboard') }}
                    </v-btn>
                </div>
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
