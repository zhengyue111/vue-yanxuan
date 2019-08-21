<template>
<div>
	<div class="page" id="home">
		<!--头部搜索栏-->
	    <home-header></home-header>
	    
	    <!--头部导航栏-->
	    <home-menu v-model="selectNavIndex"></home-menu>
	
	    <!-- 滚动视图，推荐结构 -->
	    <app-scroll class="content" v-if="selectNavIndex === 0">
						
			<!--轮播图-->
		    <app-swiper class="banner" ref="swiper">
		        <app-swiper-item v-for="item in bannerData" :key="item.id">
		            <img :src="item.picUrl"/>
		        </app-swiper-item>
		    </app-swiper>
							
			<!--优惠政策-->
			<home-policy></home-policy>
			
			<!--分类-->
			<home-cate></home-cate>
			
			<!--新人专享礼-->
			<home-fresher></home-fresher>
			
			<!--品牌制造商直供-->
			<home-brand></home-brand>
			
			<!--类目热销榜-->
			<home-hot></home-hot>
				        
	    </app-scroll>
	
	</div>

	<transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
		<router-view></router-view>
	</transition>

</div>
</template>


<script>
import header from './children/header'
import menu from './children/menu'
import policy from './children/policy'
import cate from './children/cate'
import fresher from './children/fresher'
import brand from './children/brand'
import hot from './children/hot'

import { mapState } from 'vuex'

export default {
    components: {
        [header.name]: header,
        [menu.name]: menu,
        [policy.name]: policy,
        [cate.name]: cate,
        [fresher.name]: fresher,
        [brand.name]: brand,
        [hot.name]: hot
    },
    data(){
        return {
            selectNavIndex: 0
//          totalData:0          
        }
    },
    computed: {
        ...mapState({
            bannerData: state=>state.home.bannerData,
//          headerData:state=>state.home.headerData 
        })
    },
    watch: {
        selectNavIndex(){
            console.log('下标变化了,切换页面');

        }
    },
    methods: {
        //请求首页的初始化数据
        getHomeInitData(){
        	//头部搜索框
            this.$store.dispatch('home/requestHomeHeaderData');
            //导航
            this.$store.dispatch('home/requestHomeNavData');
            //轮播图
            this.$store.dispatch('home/requestHomeBannerData');
            //协议
            this.$store.dispatch('home/requestHomePolicyData');
            //分类
	        this.$store.dispatch('home/requestHomeCateData');
	        //新人专享
	        this.$store.dispatch('home/requestHomeFreshData');
	        //品牌制造商
	        this.$store.dispatch('home/requestHomeBrandData');
	         //类目热销榜
	        this.$store.dispatch('home/requestHomeHotData');
        }
    },
    created(){
        //获得页面数据
        this.getHomeInitData();      
    },
    updated(){
        //判断轮播图是否存在,如果存在,当 轮播图 发生变化了，  更新 轮播
        this.$refs.swiper && this.$refs.swiper.update();
    }
}
</script>


<style lang="scss" scoped>
#home{
    .content{
        .banner{
        	height: 185px;
            img{
                width: 100%;
            }
        }
        width: 100%;
        position: absolute;
        top: 76px;
        left: 0;
        bottom: 0;
    }
}
</style>


