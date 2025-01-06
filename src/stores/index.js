import { defineStore } from 'pinia'
import { AGVSFieldVersionInfo } from '../models/Version/FieldVersionModels'
import { getVersion } from '../api/index.js'

export const useVersionStore = defineStore('version', {
    state: () => ({
        versions: [new AGVSFieldVersionInfo(), new AGVSFieldVersionInfo()]
    }),

    actions: {
        async fetchVersions() {
            try {
                const response = await getVersion()
                this.versions = response.data
            } catch (error) {
                console.error(error)
            }

            this.versions = [
                new AGVSFieldVersionInfo(3, "AOI", "1.1.0"),
                new AGVSFieldVersionInfo(3, "MEC", "1.2.0"),
                new AGVSFieldVersionInfo(4, "AOI", "1.3.0"),
                new AGVSFieldVersionInfo(4, "MEC", "1.4.0"),
                new AGVSFieldVersionInfo(5, "AOI", "1.1.0"),
                new AGVSFieldVersionInfo(5, "MEC", "1.2.0"),
                new AGVSFieldVersionInfo(6, "AOI", "1.1.0"),
                new AGVSFieldVersionInfo(6, "MEC", "1.2.0"),
                new AGVSFieldVersionInfo(7, "AOI", "1.1.0"),
                new AGVSFieldVersionInfo(7, "MEC", "1.2.0"),
            ]
        }
    },

    getters: {
        getVersions: (state) => state.versions,
        getVersionByFloor: (state) => (floor) => state.versions.find(version => version.floor === floor),
        getGroupedVersions: (state) => {
            return state.versions.reduce((acc, version) => {
                acc[version.floor] = acc[version.floor] || [];
                acc[version.floor].push(version);
                return acc;
            }, {});
        }
    }
})
