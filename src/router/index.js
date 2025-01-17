import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Cpu,
    HomeFilled,
    Flag
} from "@element-plus/icons-vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            title: '首頁',
            icon: HomeFilled,
            showInMenu: true
        },
    },
    {
        path: '/field',
        name: 'Field',
        component: () => import('../views/FieldInfoView.vue'),
        meta: {
            title: '場域資訊',
            icon: Flag,
            showInMenu: true
        },
    },
    {
        path: '/transportPerformanceStats',
        name: 'TransportPerformanceStats',
        component: () => import('../views/TransportPerformanceStatusViewPage.vue'),
        meta: {
            title: '搬運效能統計',
            icon: Flag,
            showInMenu: true
        },
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: () => import('../views/EquipmentinfoView.vue'),
        meta: {
            title: '設備資訊',
            icon: Flag,
            showInMenu: true
        },
    },
    {
        path: '/version',
        name: 'Version',
        component: () => import('../views/Version.vue'),
        meta: {
            title: '版本資訊',
            icon: Cpu,
            showInMenu: true
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/404.html'
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
    history: createWebHashHistory(import.meta.env.BASE_URL),
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
