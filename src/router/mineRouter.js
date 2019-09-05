export default {
    path: '/mine',
    component: ()=>import('../pages/mine/Mine'),
    meta: {
        requireAuth: true // 进入页面前判断是否需要登陆
      }

}