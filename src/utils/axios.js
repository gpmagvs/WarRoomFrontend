import axios from 'axios'

/**axios 實例 */
const instance = axios.create({
    baseURL: 'http://localhost:5190',
    timeout: 5000
})

// 請求攔截器
instance.interceptors.request.use(
    config => {
        // 在發送請求之前做些什麼
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        // 對請求錯誤做些什麼
        return Promise.reject(error)
    }
)

// 響應攔截器
instance.interceptors.response.use(
    response => {
        // 對響應數據做點什麼
        return response.data
    },
    error => {
        // 對響應錯誤做點什麼
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 未授權，清除 token 並跳轉到登錄頁面
                    localStorage.removeItem('token')
                    router.push('/login')
                    break
                case 404:
                    console.error('請求的資源不存在')
                    break
                case 500:
                    console.error('服務器錯誤')
                    break
                default:
                    console.error(`其他錯誤：${error.message}`)
            }
        }
        return Promise.reject(error)
    }
)

export default instance