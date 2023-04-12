import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {path: '/', component: () => import('../views/ListCountries.vue')},
    {path: '/:id', component: () => import('../views/DetailsCountry.vue')},
    {path: '/add', component: () => import('../views/AddCountry.vue')},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',

})

export default router