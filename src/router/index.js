import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     component: About
    // },
    // // 動態路由參數
    // {
    //     path: '/user/:id',
    //     name: 'User',
    //     component: () => import('../views/User.vue'), // 懶加載
    //     props: true // 將路由參數作為 props 傳遞
    // },
    // // 嵌套路由
    // {
    //     path: '/parent',
    //     component: () => import('../views/Parent.vue'),
    //     children: [
    //         {
    //             path: 'child',
    //             component: () => import('../views/Child.vue')
    //         }
    //     ]
    // },
    // // 404 頁面
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: () => import('../views/NotFound.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局前置守衛
router.beforeEach((to, from, next) => {
    // 例如：檢查是否登入
    const isAuthenticated = localStorage.getItem('token')
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
