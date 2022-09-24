import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component : () => import(/* webpackChunkName: "about" */ './components/LoginPage.vue')
    },
    {
        path: '/MenuPage',
        name: 'Menu',
        component: () => import(/* webpackChunkName: "menu" */ './components/MenuPage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ './components/LoginPage.vue')
    },
    {
        path: '/GelenKutusu',
        name: 'GelenKutusu',
        component: () => import(/* webpackChunkName: "login" */ './components/GelenKutusu.vue')
    },
    {
        path: '/GidenKutusu',
        name: 'GidenKutusu',
        component: () => import(/* webpackChunkName: "login" */ './components/GidenKutusu.vue')
    },
    {
        path: '/StocksPage',
        name: 'StocksPage',
        component: () => import(/* webpackChunkName: "login" */ './components/StocksPage.vue')
    },
    {
        path: '/CustomersPage',
        name: 'CustomersPage',
        component: () => import(/* webpackChunkName: "login" */ './components/CustomersPage.vue')
    },
    
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router