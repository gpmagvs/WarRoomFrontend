/**
 * 車輛RealTime數據
 */
export class VehicleRealTimeData {
    constructor() {
        this.Floor = 0
        this.Field = ''
        this.EquipmentName = ''
        this.Data = {
            OnlineState: 'OFFLINE',
            RunningTask: new RunningTask(),
            DailyTaskStatistics: new DailyTaskStatistics(),
            Alarm: new Alarm(),
            UtilizationViewData: { data: [] },
            BatLevel: 0,
            BatVoltage: 0,
            BatChargeCurrent: 0,
            BatDisChargeCurrent: 0,
            MotorRightVoltage: 0,
            MotorRightCurrent: 0,
            MotorRightTemperature: 0,
            MotorRightAlarmCode: 0,
            MotorLeftVoltage: 0,
            MotorLeftCurrent: 0,
            MotorLeftTemperature: 0,
            MotorLeftAlarmCode: 0,
            CoordinateX: 0,
            CoordinateY: 0,
            CurrentPathTag: '',
            Name: '',
            Description: '',
            Connected: false,
            Tag: 0,
            Status: 0
        }
    }

    // 從 JSON 數據創建實例的靜態方法
    static fromJSON(json) {
        const instance = new VehicleRealTimeData()
        Object.assign(instance, json)
        return instance
    }

    // 獲取當前警報
    getCurrentAlarms() {
        return this.Data.Alarm.CurrentAlarms
    }

    // 獲取電池電量
    getBatteryLevel() {
        return this.Data.BatLevel
    }

    // 檢查是否在線
    isOnline() {
        return this.Data.OnlineState === 'ONLINE'
    }

    // 獲取當前位置
    getPosition() {
        return {
            x: this.Data.CoordinateX,
            y: this.Data.CoordinateY,
            tag: this.Data.CurrentPathTag
        }
    }

    // 獲取任務統計
    getTaskStatistics() {
        return this.Data.DailyTaskStatistics
    }

    // 檢查是否有特定類型的警報
    hasAlarmType(alarmType) {
        return this.Data.Alarm.CurrentAlarms.some(
            alarm => alarm.AlarmType === alarmType
        )
    }
}


// 任務數據
class RunningTask {
    constructor() {
        this.TaskID = '-'
        this.TaskType = '-'
        this.FromStationName = '-'
        this.ToStationName = '-'
    }
}

// 每日任務統計
export class DailyTaskStatistics {
    constructor() {
        this.TotalTaskNum = 0
        this.TransferTaskNum = 0
        this.ChargeTaskNum = 0
        this.TotalSuccessNum = 0
        this.TotalFailureNum = 0
        this.SuccessRate = 0
    }
}

// 警報數據
class AlarmData {
    constructor() {
        this.Time = ''
        this.AlarmCode = 0
        this.AlarmType = ''
        this.AlarmMessage = ''
    }
}

// 警報集合
export class Alarm {
    constructor() {
        this.CurrentAlarms = []
    }
}