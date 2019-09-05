export default {
    path: '/home',
    component: ()=>import('../pages/home/Home/Home'),
    children: [
        //搜索
        {
            path: 'search',
            component: ()=>import('../pages/home/Search/Search'),
            children: [
                {
                    path: 'result/:keyword',
                    component: ()=>import('../pages/home/SearchResult/SearchResult')
                }
            ]
        },
        // 导航分类列表
        {
            path: 'cate/:cate_id',
            component: ()=>import('../pages/home/NavList/NavList'),
            children: [
                {
                    path: 'detail/:goods_id',
                    component: ()=>import('../pages/common/Detail/Detail')
                }
            ]
        },
        // 详情
        {
            path: 'detail/:goods_id',
            component: ()=>import('../pages/common/Detail/Detail')
        }
    ]
}