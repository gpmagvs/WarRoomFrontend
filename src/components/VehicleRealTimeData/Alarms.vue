<template>
  <CardContainer>
    <template #header>
      <span>警報</span>
    </template>
    <el-table
      :data="props.alarms.CurrentAlarms"
      border
      stripe
      style="height:250px;"
      :header-cell-style="tableHeaderStyle"
      :cell-style="tableCellStyle"
    >
      <el-table-column prop="Time" label="時間" />
      <el-table-column prop="AlarmCode" label="警報代碼" />
      <el-table-column prop="AlarmType" label="警報類型" />
      <el-table-column prop="AlarmMessage" label="警報訊息" />
    </el-table>
  </CardContainer>
</template>

<script setup>
import CardContainer from '../common/CardContainer.vue';
import { Alarm } from '../../models/VehicleRealTimeData';
import { tableHeaderStyle, tableCellStyle } from '../common/tableStyle';
import moment from 'moment';


const props = defineProps({
  alarms: {
    type: Alarm,
    required: true,
    default: new Alarm()
  }
});
</script>

<style lang="scss" scoped>
</style>