<script setup lang="ts">
const { global } = useTheme()
const color = computed(() => (global.current.value.dark ? '#f1f1f1' : '#404040'))
const options = computed(() => ({
    chart: {
        id: 'line-chart',
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        theme: global.current.value.dark ? 'dark' : 'light',
    },
    grid: {
        borderColor: global.current.value.dark ? '#404040' : '#f1f1f1',
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            color: color.value,
        },
        axisTicks: {
            color: color.value,
        },
        labels: {
            style: {
                colors: color.value,
            },
        },
    },
    yaxis: {
        axisBorder: {
            color: color.value,
        },
        axisTicks: {
            color: color.value,
        },
        labels: {
            style: {
                colors: color.value,
            },
        },
    },
}))
const series = ref([
    {
        name: 'Rental Frequency',
        data: [30, 40, 25, 50, 49, 60, 70, 91, 125, 35, 65, 80],
    },
])
</script>
<template>
    <v-card :title="$t('dashboard.main.rentalFrequency')">
        <apexchart type="line" :options="options" :series="series"></apexchart>
    </v-card>
</template>
