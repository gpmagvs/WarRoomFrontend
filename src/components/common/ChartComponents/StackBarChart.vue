<template>
  <div class="chart-components stack-chart">
    <div ref="chartContainer" style="width: 100%; height: 250px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import { uiStatsStore } from '../../../stores/UiStats';

const _uiStatsStore = uiStatsStore();
const chartContainer = ref(null)
let chart = null

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  xAxisName: {
    type: String,
    default: '日期'
  },
  yAxisName: {
    type: String,
    default: '數量'
  },
  series: {
    type: Array,
    default: () => [{
      name: '數值',
      data: [],
      color: '#67C23A'
    }]
  }
})

const initChart = () => {
  if (chart) {
    chart.dispose()
  }

  const xAxisData = props.series[0].data.map(item => item.date)

  chart = echarts.init(chartContainer.value)
  const option = {
    title: {
      text: props.title,
      left: 'center',
      textStyle: {
        color: '#ffffff',
        fontSize: 15
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: props.series.map(item => item.name),
      top: 30,
      textStyle: {
        color: '#ffffff'
      }
    },
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: xAxisData,
      name: props.xAxisName,
      nameLocation: 'end',
      nameGap: 10,
      axisLabel: {
        color: '#ffffff',
        fontSize: 14,
        margin: 15
      },
      nameTextStyle: {
        color: '#ffffff',
        fontSize: 18
      }
    },
    yAxis: {
      type: 'value',
      name: props.yAxisName,
      nameTextStyle: {
        color: '#ffffff',
        fontSize: 17,
        padding: [0, 0, 10, 0]
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 14
      }
    },
    series: props.series.map(item => ({
      name: item.name,
      type: 'bar',
      stack: 'total',
      data: item.data.map(d => d.value),
      itemStyle: {
        color: item.color
      }
    })),
    backgroundColor: 'transparent'
  }

  chart.setOption(option)
}

watch(() => props.series, () => {
  initChart()
}, { deep: true })

watch(() => _uiStatsStore.getCollapse, () => {
  setTimeout(() => {
    chart && chart.resize();
  }, 10);
})

watch(() => props.title, () => {
  chart.setOption({
    title: {
      text: props.title,
    }
  })
})

onMounted(() => {
  initChart()
  window.addEventListener('resize', () => {
    chart && chart.resize()
  })
})
</script>

<style lang="scss" scoped>
.stack-chart {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1rem;
}
</style>
