export default {
    path: '/category',
    component: ()=>import('../pages/category/Category'),
    children: [
        {
            path: 'detail/:goods_id',
            component: ()=>import('../pages/common/Detail/Detail')
        }
    ]
}