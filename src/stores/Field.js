import { defineStore } from 'pinia'
import { FieldInfo } from '../models/Field.js'
import { getField } from '../api/index.js'

export const fieldStore = defineStore('field', {
    state: () => ({
        fields: [new FieldInfo()],
        selectedField: null
    }),

    actions: {
        setSelectedField(field) {
            this.selectedField = field
        },

        async fetchFields() {
            try {
                const response = await getField();
                this.fields = response;
            } catch (error) {
                console.error(error)
            }
        }
    },

    getters: {
        getFloors: (state) => [...new Set(state.fields.map(_field => _field.Floor))],
        getFields: (state) => state.fields,
        getSelectedField: (state) => state.selectedField,
        getFieldByFloor: (state) => (floor) => state.fields.filter(field => field.Floor === floor),
        getEquipmentByField: (state) => (fieldInfo) => state.fields.find(field => field.Floor === fieldInfo.Floor && field.Name === fieldInfo.Name).Equipments
    }
})
