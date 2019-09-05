import request from '../../utils/request'
import router from '../../router'
import { Toast } from 'vant'

let userInfo = localStorage.getItem('userInfo')
let token = localStorage.getItem('token')

export default {
  namespaced: true,
  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : null, // 当前登录的用户信息对象
    token: token || null
  },

  getters: {},

  mutations: {
  	//把登录返回的信息存储到vuex
    login(state, payload) {
      state.userInfo = payload.userInfo;
      state.token = payload.token;
    }
  },

  actions: {
    /*登录*/
    handleLogin({ commit }, payload) {
    	//去掉了baseURL之后
    	//本地:http://localhost:8080/api/sign-in
    	//服务器:http://服务器ip地址/api/sign-in
      request.post('/api/sign-in', payload).then(res => {
        //console.log(res)
        if (res.code === 0) {
          // 登录成功 提交login更改的信息到vuex
          commit('login', res.data);

          // 把login返回的信息存储到本地
          localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo));
          localStorage.setItem('token', res.data.token);

          // 跳转页面，  登录成功后会取 路由参数 redirect，如果 没有传 ，就跳转到 个人中心页
          let redirect = router.currentRoute.query.redirect || '/mine';
          router.replace(redirect);
        } else {
          // 登录失败,弹出提示信息
          Toast(res.msg)
        }
      })
    }
  }
}
