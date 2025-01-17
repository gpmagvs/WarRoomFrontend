import axios from '../utils/axios.js'

export const getVersion = async () => {
    const response = await axios.get('/api/version')
    return response.data
}

/**
 * 取得場域資訊
 * @returns {Promise<FieldInfo[]>}
 */
export const getField = async () => {
    const response = await axios.get('/api/FieldInfo/FieldsInfo')
    console.log(response);
    return response
}

