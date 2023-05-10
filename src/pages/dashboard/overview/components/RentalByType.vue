<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components'

import VChart, { THEME_KEY } from 'vue-echarts'
import { provide, computed } from 'vue'

use([CanvasRenderer, PieChart, GridComponent, TooltipComponent, LegendComponent])

const theme = useTheme()
provide(THEME_KEY, theme.global.name.value)

const option = computed(() => ({
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
}))
</script>
<template>
    <v-card :title="$t('dashboard.main.rentalFrequency')">
        <v-chart class="chart" :option="option" />
    </v-card>
</template>
<style scoped>
.chart {
    height: 420px;
    width: 100%;
}
</style>
