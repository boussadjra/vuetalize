<script setup lang="ts">
const option = ref({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['Sedan', 'SUV', 'Hatchback', 'Luxury', 'Sports', 'Van'],
    },
    series: [
        {
            name: 'Car Type',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 35, name: 'Sedan' },
                { value: 25, name: 'SUV' },
                { value: 15, name: 'Hatchback' },
                { value: 10, name: 'Luxury' },
                { value: 10, name: 'Sports' },
                { value: 5, name: 'Van' },
            ],
        },
    ],
})
</script>
<template>
    <v-card :title="$t('dashboard.main.rentalFrequency')">
        <PieChart :option="option" />
    </v-card>
</template>
