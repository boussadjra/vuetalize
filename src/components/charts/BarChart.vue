<script setup lang="ts">
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'

import VChart, { THEME_KEY } from 'vue-echarts'
import { provide } from 'vue'
defineProps({
    option: {
        type: Object,
        default: () => ({}),
    },
})

use([CanvasRenderer, BarChart, TooltipComponent, LegendComponent])

const theme = useTheme()
provide(THEME_KEY, theme.global.name)
</script>
<template>
    <v-chart class="chart" :option="option" />
</template>

<style scoped>
.chart {
    height: 420px;
    width: 100%;
}
</style>
