import axios from '../utils/axios.js'

export const getVersion = async () => {
    const response = await axios.get('/api/version')
    return response.data
}

