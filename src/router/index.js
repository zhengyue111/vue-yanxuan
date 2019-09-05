import Vue from 'vue'
import Router from 'vue-router'

import home from './homeRouter'
import category from './categoryRouter'
import topic from './topicRouter'
import cart from './cartRouter'
import mine from './mineRouter'
import city from './cityRouter'

Vue.use(Router);

const routes = [
    home,
    category,
    topic,
    cart,
    mine, 
    city,
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
//  {
//      path: '**',
//      redirect: '/home'
//  },
    {
        path: '*',
        redirect: '/404'
    }
];



// 创建 路由实例对象
const router = new Router({
	mode: 'history',
  	routes
})


//  暴露
export default router;

