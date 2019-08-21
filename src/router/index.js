import Vue from 'vue'
import Router from 'vue-router'

import home from './homeRouter'
import category from './categoryRouter'
import topic from './topicRouter'
import cart from './cartRouter'
import mine from './mineRouter'

Vue.use(Router);

const routes = [
    home,
    category,
    topic,
    cart,
    mine, 
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
         component: ()=>import('../pages/login/Login')
    },
    {
        path: '/404',
        component: ()=>import('../pages/common/NotFind/NotFind')
    },
    {
        path: '**',
        redirect: '/404'
    }
];

export default new Router({
    mode: 'history',
    routes
})
