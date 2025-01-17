<template>
  <div class="agv-real-time-data d-flex flex-column bg-dark">
    <el-row>
      <el-col :lg="6">
        <BaseStatus :baseStatus="baseStatus" />
      </el-col>
      <el-col :lg="3">
        <MileageStatus style="height: 165px;" :mileageStatus="mileageStatus" />
      </el-col>
      <el-col :lg="6">
        <BatteryStatus style="height: 165px;" :batteryStatus="batteryStatus" />
      </el-col>
      <el-col :lg="9">
        <DriverStatus style="height: 165px;" :motorsStatus="motorsStatus" />
      </el-col>
    </el-row>

    <el-row class>
      <el-col :lg="12">
        <UtilizationRateChart style="height: 310px;" :data="vehicleData.Data.UtilizationViewData" />
      </el-col>
      <el-col :lg="12">
        <Alarms :alarms="vehicleData.Data.Alarm" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :lg="9">
        <TaskRunStatusOfDay :dailyTaskStatistics="vehicleData.Data.DailyTaskStatistics" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { VehicleRealTimeData } from '../../models/VehicleRealTimeData';
import BaseStatus from './BaseStatus.vue';
import BatteryStatus from './BatteryStatus.vue';
import DriverStatus from './DriverStatus.vue';
import UtilizationRateChart from './UtilizationRateChart.vue';
import TaskRunStatusOfDay from './TaskRunStatusOfDay.vue';
import MileageStatus from './MileageStatus.vue';
import Alarms from './Alarms.vue';

const props = defineProps({
  vehicleData: {
    type: VehicleRealTimeData,
    required: true,
    default: new VehicleRealTimeData()
  },

});

const baseStatus = computed(() => {
  return {
    name: props.vehicleData.Data.Name,
    mainStatus: props.vehicleData.Data.Status,
    description: props.vehicleData.Data.Description,
    onlineState: props.vehicleData.Data.OnlineState,
    runningTask: props.vehicleData.Data.RunningTask,
  }
});

const batteryStatus = computed(() => {
  return {
    batLevel: props.vehicleData.Data.BatLevel,
    batVoltage: props.vehicleData.Data.BatVoltage,
    batChargeCurrent: props.vehicleData.Data.BatChargeCurrent,
    batDisChargeCurrent: props.vehicleData.Data.BatDisChargeCurrent,
  }
});

const motorsStatus = computed(() => {
  return {
    motorRightVoltage: props.vehicleData.Data.MotorRightVoltage,
    motorRightCurrent: props.vehicleData.Data.MotorRightCurrent,
    motorRightTemperature: props.vehicleData.Data.MotorRightTemperature,
    motorRightAlarmCode: props.vehicleData.Data.MotorRightAlarmCode,
    motorLeftVoltage: props.vehicleData.Data.MotorLeftVoltage,
    motorLeftCurrent: props.vehicleData.Data.MotorLeftCurrent,
    motorLeftTemperature: props.vehicleData.Data.MotorLeftTemperature,
    motorLeftAlarmCode: props.vehicleData.Data.MotorLeftAlarmCode,
  }
});


</script>

<style lang="scss" scoped>
.agv-real-time-data {
  height: calc(100vh - 100px);
}
</style>

