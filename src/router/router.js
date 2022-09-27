import Main from '@/pages/Main'
import About from '@/pages/About'
import PostsPage from '@/pages/PostsPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: PostsPage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router