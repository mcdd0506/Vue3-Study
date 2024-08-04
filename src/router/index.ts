import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/Index.vue'

import type { RouteRecordRaw } from 'vue-router'


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/base'
  },
  {
    path: '/base',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/base/Index.vue')
      }
    ]
  },
  {
    path: '/base-directive',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/base-directive/Index.vue')
      }
    ]
  },
  {
    path: '/css-scope',

    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/css-scope/Index.vue')
      }
    ]
  }
]

const router =
  createRouter({
    routes,
    history: createWebHashHistory()
  })

export default router