import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Version from '../views/Version.vue'
import FieldInfoView from '../views/FieldInfoView.vue'
import EquipmentinfoView from '../views/EquipmentinfoView.vue'
import TransportPerformanceStatusViewPage from '../views/TransportPerformanceStatusViewPage.vue'
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
        name: 'Home',
        component: Home,
        meta: {
            title: '首頁',
            icon: HomeFilled,
            showInMenu: true
        },
    },
    {
        path: '/field',
        name: 'Field',
        component: FieldInfoView,
        meta: {
            title: '場域資訊',
            icon: Flag,
            showInMenu: true
        },
    },
    {
        path: '/transportPerformanceStats',
        name: 'TransportPerformanceStats',
        component: TransportPerformanceStatusViewPage,
        meta: {
            title: '搬運效能統計',
            icon: Flag,
            showInMenu: true
        },
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: EquipmentinfoView,
        meta: {
            title: '設備資訊',
            icon: Flag,
            showInMenu: true
        },
    },
    {
        path: '/version',
        name: 'Version',
        component: Version,
        meta: {
            title: '版本資訊',
            icon: Cpu,
            showInMenu: true
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: { name: 'Home' }  // 重定向到首頁
      }
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
    history: createWebHashHistory('/WarRoomFrontend/'),
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
