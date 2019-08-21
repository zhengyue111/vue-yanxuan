import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


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

new Vue({
    el: '#app',
    render: h=>h(App),
    router,
    store
});