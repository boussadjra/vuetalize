<script setup lang="ts">
const { t, locale } = useI18n()
const drawer = ref(true)
const rail = ref(false)
const isRTL = computed(() => locale.value === 'ar')
const sidebarItems = computed(() => [
    {
        title: t('dashboard.sidebar.dashboard-overview'),
        value: 'dashboard-overview',
        iconClass: 'i-iconoir-dashboard-speed me-4 text-xl',
        path: '/dashboard/overview',
    },
    {
        title: t('dashboard.sidebar.rentals'),
        value: 'rentals',
        iconClass: 'i-iconoir-car me-4 text-xl',
        path: '/dashboard/rentals',
    },
    {
        title: t('dashboard.sidebar.inventory'),
        value: 'inventory',
        iconClass: 'i-iconoir-google-docs me-4 text-xl',
        path: '/dashboard/inventory',
    },
    {
        title: t('dashboard.sidebar.customers'),
        value: 'customers',
        iconClass: 'i-iconoir-user-cart me-4 text-xl',
        path: '/dashboard/customers',
    },
    {
        title: t('dashboard.sidebar.reports'),
        value: 'reports',
        iconClass: 'i-iconoir-doc-star me-4 text-xl',
        path: '/dashboard/reports',
    },
    {
        title: t('dashboard.sidebar.settings'),
        value: 'settings',
        iconClass: 'i-iconoir-settings me-4 text-xl',
        path: '/dashboard/settings',
    },
    {
        title: t('dashboard.sidebar.help'),
        value: 'help',
        iconClass: 'i-iconoir-help-circle me-4 text-xl',
        path: '/dashboard/help',
    },
])
</script>
<template>
    <v-app full-height>
        <v-layout full-height>
            <v-app-bar class="">
                <router-link to="/home" class="px-2 flex items-center">
                    <Logo :width="50" :height="40" />
                </router-link>

                <v-btn icon @click="drawer = !drawer">
                    <span class="i-iconoir-menu text-2xl"></span>
                </v-btn>

                <v-spacer></v-spacer>
                <v-btn icon variant="text" color="inherit">
                    <span class="i-iconoir-bell text-2xl"></span>
                </v-btn>
                <LocaleToggler />
                <ThemeToggler />
            </v-app-bar>
            <v-navigation-drawer
                rounded
                v-model="drawer"
                class="m-2 max-h-[calc(100%-82px)] !fixed"
                :rail="rail"
                :location="isRTL ? 'end' : 'start'"
            >
                <template v-slot:prepend>
                    <div class="p-2 flex" :class="{ 'justify-center': rail }">
                        <v-btn icon size="sm" variant="text" @click="rail = !rail">
                            <span
                                :class="rail ? 'rotate-180' : 'rotate-0'"
                                class="i-iconoir-fast-arrow-left text-xl rtl:transform rtl:rotate-180 transition-transform duration-300"
                            ></span>
                        </v-btn>
                    </div>
                </template>

                <v-list density="compact" nav>
                    <v-list-item
                        height="100"
                        prepend-avatar="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                        title="John Doe"
                        subtitle="john.doe732@mail.com"
                        class="me-4"
                    ></v-list-item>

                    <v-divider></v-divider>
                    <v-list-item v-for="item in sidebarItems" :key="item.value" :value="item.value" :to="item.path">
                        <template v-slot:prepend>
                            <span :class="item.iconClass"></span>
                        </template>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item>
                </v-list>
                <template v-slot:append>
                    <div class="pa-2">
                        <v-btn :block="!rail" :icon="rail" :size="rail ? 'small' : undefined">
                            <span class="i-iconoir-log-out text-xl"></span>
                            <span v-show="!rail">
                                {{ $t('dashboard.sidebar.logout') }}
                            </span>
                        </v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
            <v-main class="text-slate-700 dark:text-slate-300">
                <v-container>
                    <RouterView />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>

<style scoped></style>
