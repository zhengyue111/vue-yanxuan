import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { IndexBar, IndexAnchor,Cell } from 'vant'
import 'vant/lib/index-bar/style'
import 'vant/lib/index-anchor/style'
import 'vant/lib/cell/style'

Vue.use(IndexBar).use(IndexAnchor).use(Cell);


//引入封装的get,post请求方法
import {get,post} from './request/index'

//import axios from 'axios'
//Vue.prototype.$http = axios;

//把get和post请求方法挂载到全局
Vue.prototype.$get = get;
Vue.prototype.$post = post;


import AppScroll from './components/app-scroll'
import AppSwiper from './components/app-swiper'
import AppSwiperItem from './components/app-swiper-item'

Vue.component(AppScroll.name, AppScroll);
Vue.component(AppSwiper.name, AppSwiper);
Vue.component(AppSwiperItem.name, AppSwiperItem);


//路由跳转前判断是否需要登录
router.beforeEach((to,from,next)=>{
	//验证是否需要登录
	if(to.matched.some(res => res.meta.requireAuth)){//requireAuth为true,some方法返回true,才会继续往下走
		console.log(to);	
		//查询本地存储信息是否已登录
		if(localStorage.getItem('userInfo')){
			next(); //已登录,放行
		}else{
			next({
				path:'/login' , //未登录跳转至login页面
				query:{redirect: to.fullPath} 
			}) // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
		}	
	}else{
		next();
	}
})

new Vue({
    el: '#app',
    render: h=>h(App),
    router,
    store
});