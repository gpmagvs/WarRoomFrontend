<template>
  <div class="chart-components" ref="chartContainer" style="width: 100%; height: 250px"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import { uiStatsStore } from '../../../stores/UiStats';


const chartContainer = ref(null)
let chart = null
const _uiStatsStore = uiStatsStore();

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  data: {
    type: Array,
    default: () => []
  },
  xAxisName: {
    type: String,
    default: '日期'
  },
  yAxisName: {
    type: String,
    default: '數值'
  }
})

onMounted(() => {
  chart = echarts.init(chartContainer.value)
  updateChart()
})

const updateChart = () => {
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
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: props.data.map(item => item.date),
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
      nameLocation: 'middle',
      nameGap: 50,
      axisLabel: {
        color: '#ffffff',
        fontSize: 14
      },
      nameTextStyle: {
        color: '#ffffff',
        fontSize: 17,
        padding: [0, 0, 10, 0]
      }
    },
    series: [{
      name: 'BoxPlot',
      type: 'boxplot',
      data: props.data.map(item => [
        item.min,
        item.q1,
        item.median,
        item.q3,
        item.max
      ]),
      itemStyle: {
        // color: 'green',
        // borderColor: 'green',
        borderWidth: 3
      },
      emphasis: {
        itemStyle: {
          borderWidth: 3,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      },
      boxWidth: ['40%', '40%'],
      medianLineStyle: {
        color: '#000000'
      }
    }],
    backgroundColor: 'transparent'
  }

  chart.setOption(option)
}

watch(() => props.data, () => {
  updateChart()
}, { deep: true })
watch(() => _uiStatsStore.isCollapse, () => {
  chart.resize()
})
</script>

<style scoped>
</style>
