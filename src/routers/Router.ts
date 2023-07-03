import { registerSW } from 'virtual:pwa-register'
import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        name: "user",
        path: "/",
        component: () => import('@v/layouts/User.vue'),
        children: [
            {
                name: "landing",
                path: "",
                component: () => import('@v/pages/user/auth/Landing.vue'),
            },
            {
                name: "get-started",
                path: "get-started",
                component: () => import('@v/pages/user/auth/GetStarted.vue'),
            },
            {
                name: "menu",
                path: "menu",
                meta: { playing: true },
                component: () => import('@v/pages/user/gamePlay/Menu.vue')
            },
            {
                name: "play",
                path: "play/:playingContent",
                meta: { playing: true },
                component: () => import('@v/pages/user/gamePlay/Play.vue')
            }
        ]
    },
    {
        name: "admin",
        path: "/admin",
        redirect: { path: "/login" },
        component: () => import('@v/layouts/Admin.vue'),
        children: [
            {
                name: "auth",
                path: "/auth",
                component: () => import('@v/pages/admin/auth/Login.vue'),
                children: [
                    {
                        name: "login",
                        path: "login",
                        alias: "/login",
                        component: () => import('@v/pages/admin/auth/Login.vue')
                    },
                    {
                        name: "registration",
                        path: "registration",
                        alias: "/registration",
                        component: () => import('@v/pages/admin/auth/Registration.vue')
                    },
                ]
            },
            {
                name: "dashboard",
                path: "/dashboard",
                redirect: {
                    name: "dashboard-manage-content",
                    params: { selectedContent: "overview" }
                },
                meta: { admin: true },
                component: () => import('@v/layouts/admin/Dashboard.vue'),
                children: [
                    // {
                    //     name: "student-detail",
                    //     path: "siswa/:email",
                    //     meta: { playing: true },
                    //     component: () => import('@v/pages/admin/dashboard/StudentDetail.vue')
                    // },
                    {
                        name: "dashboard-manage-content",
                        path: ":selectedContent",
                        component: () => import('@v/pages/admin/dashboard/ManageContent.vue'),
                        meta: { admin: true },
                        children: [
                            {
                                name: "dashboard-edit-content",
                                path: "/:selectedContent/edit-content",
                                meta: { admin: true },
                                component: () => import('@v/pages/admin/dashboard/editContent.vue')
                            },

                        ]
                    },
                ]
            }

        ]
    },
]

const AppRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default AppRouter

AppRouter.beforeEach((to, from, next) => {
    if (to.meta.playing && !from.name) {
        AppRouter.push({ name: 'landing' })
    } else if (to.meta.admin && !from.name) {
        AppRouter.push({ name: 'admin' })
    }
    next()
});


// PWA register service worker
AppRouter.isReady()
    .then(async () => {
        registerSW({ immediate: true, onOfflineReady() { }, })
    })
    .catch(() => { })


