import { defineStore } from 'pinia'
import * as signalR from '@microsoft/signalr'
import axios from '../utils/axios'
import { VehicleRealTimeData } from '../models/VehicleRealTimeData.js'

export const realTimeEquipmentDataStore = defineStore('realTimeEquipmentData', {
    state: () => ({
        equipmentData: {},
        /**當前訂閱的設備數據 */
        subscribingVehicleData: new VehicleRealTimeData(),
        isConnected: false,
        hubConnection: null
    }),

    actions: {
        clearHubConnection() {
            if (this.hubConnection) {
                this.hubConnection.stop();
                this.hubConnection = null;
            }
        },
        subscribeEquipmentData(queryObject) {
            console.log(queryObject);
            const baseUrl = axios.defaults.baseURL;
            this.clearHubConnection();
            this.hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(`${baseUrl}/EquipmentStatus?floor=${queryObject.Floor}&field=${queryObject.Name}&equipmentName=${queryObject.EquipmentName}&eqType=${queryObject.Type}`)
                .build();

            this.hubConnection.on('EquipmentStatusData', (data) => {
                console.log(data);
                this.subscribingVehicleData = data;
            });
            this.hubConnection.start();
        }
    },

    getters: {
        getEquipmentData: (state) => (equipmentName) => state.equipmentData[equipmentName],
        getAllEquipmentData: (state) => state.equipmentData,
        getConnectionStatus: (state) => state.isConnected
    }
})
