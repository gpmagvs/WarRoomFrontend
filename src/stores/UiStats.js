import { defineStore } from 'pinia'

export const uiStatsStore = defineStore('uiStats', {
    state: () => ({
        isCollapse: true
    }),

    actions: {
        toggleCollapse() {
            this.isCollapse = !this.isCollapse
        },
        setCollapse(value) {
            this.isCollapse = value
        }
    },
    getters: {
        getCollapse: (state) => state.isCollapse
    }
})
