import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component : () => import(/* webpackChunkName: "about" */ './App.vue')
    },
    {
        path: '/menu',
        name: 'Menu',
        component: () => import(/* webpackChunkName: "menu" */ './components/MenuPage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ './components/LoginPage.vue')
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router