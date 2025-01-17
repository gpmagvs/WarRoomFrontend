<template>
  <div class="chart-components task-success-rate-trend">
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
  dailyStats: {
    type: Array,
    default: () => []
  },

  /** line | bar | line-bar */
  type: {
    type: String,
    default: () => 'line',
  },
  lineColor: {
    type: String,
    default: () => '#E6A23C',
  },
  normalBarColor: {
    type: String,
    default: () => 'rgb(103, 194, 58)',
  },
  alarmBarColor: {
    type: String,
    default: () => 'rgb(250, 27, 73)',
  },
  title: {
    type: String,
    default: () => '',
  },
  xAxisName: {
    type: String,
    default: () => '日期',
  },
  yAxisName: {
    type: String,
    default: () => '成功率',
  },
  /**這是比較函數，用來判斷是否要顯示警戒值, 傳入值為資料點數值,請定義規則 回傳 true(異常) 或 false(非異常) */
  isExceedThreshold: {
    type: Function,
    default: () => { return false },
  },
})

const initChart = () => {
  if (chart) {
    chart.dispose()
  }

  chart = echarts.init(chartContainer.value)
  const option = {
    title: {
      text: props.title,
      left: 'center',
      textStyle: {
        color: '#ffffff',
        fontSize: 18,
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: `{b}<br/>${props.yAxisName}: {c}`
    },
    xAxis: {
      type: 'category',
      nameLocation: 'end',
      nameGap: 10,
      data: props.dailyStats.map(item => item.date),
      axisLabel: {
        color: '#ffffff',
        fontSize: 14, // 增加 x 軸字體大小
        margin: 15 // 增加 label 與圖表的間距
      },
      name: props.xAxisName,
      nameTextStyle: {
        color: '#ffffff',
        fontSize: 18,
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      name: props.yAxisName,
      nameTextStyle: {
        color: '#ffffff',
        fontSize: 17,
        padding: [0, 0, 10, 0] // 調整 title 位置
      },
      axisLabel: {
        formatter: '{value}',
        color: '#ffffff',
        fontSize: 14 // 增加 y 軸字體大小
      },
    },
    series: [
    ],
    backgroundColor: 'transparent',
    grid: {
      left: '3%',
      right: '6%',
      bottom: '3%',
      containLabel: true
    }
  }
  // 根據 props 的 type 來決定要顯示的圖表類型
  const seriesConfig = []

  if (props.type === 'bar' || props.type === 'line-bar') {
    seriesConfig.push({
      data: props.dailyStats.map(item => item.value),
      type: 'bar',
      barWidth: '30%',
      itemStyle: {
        color: (params) => {
          return props.isExceedThreshold(params.value) ?
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: props.alarmBarColor.replace(')', ', 0.8)').replace('rgb', 'rgba') },
              { offset: 1, color: props.alarmBarColor.replace(')', ', 0.3)').replace('rgb', 'rgba') }
            ]) :
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: props.normalBarColor.replace(')', ', 0.8)').replace('rgb', 'rgba') },
              { offset: 1, color: props.normalBarColor.replace(')', ', 0.3)').replace('rgb', 'rgba') }
            ])
        }
      }
    })
  }

  if (props.type === 'line' || props.type === 'line-bar') {
    seriesConfig.push({
      data: props.dailyStats.map(item => item.value),
      type: 'line',
      smooth: false,
      lineStyle: {
        color: props.lineColor,
        width: 3
      },
      symbol: 'circle',
      symbolSize: 8,
      itemStyle: {
        color: props.lineColor
      }
    })
  }

  option.series = seriesConfig

  chart.setOption(option)
}

watch(() => props.dailyStats, () => {
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
.task-success-rate-trend {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 1rem;

  h6 {
    color: #ffffff;
    margin-bottom: 1rem;
  }
}
</style>
