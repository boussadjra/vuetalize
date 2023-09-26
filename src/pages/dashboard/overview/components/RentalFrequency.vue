<script setup lang="ts">
const data = ref([
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 20 },
    { month: 'Mar', value: 36 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 70 },
    { month: 'Jun', value: 52 },
    { month: 'Jul', value: 57 },
    { month: 'Aug', value: 54 },
    { month: 'Sep', value: 82 },
    { month: 'Oct', value: 58 },
    { month: 'Nov', value: 63 },
    { month: 'Dec', value: 29 },
])

const option = computed(() => ({
    xAxis: {
        type: 'category',
        data: data.value.map((item) => item.month),
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: data.value.map((item) => item.value),
            type: 'bar',

            areaStyle: {
                opacity: 0.2,
            },

            itemStyle: {
                color: '#0098ff',
            },
        },
    ],
}))
</script>
<template>
    <v-card :title="$t('dashboard.main.rentalFrequency')">
        <BarChart :option="option" />
    </v-card>
</template>
<style scoped>
.chart {
    height: 400px;
}
</style>
