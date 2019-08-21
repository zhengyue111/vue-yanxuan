import {get,post} from '../../request/index'
import api from '../../request/api'

export default {
    namespaced: true,
    state: {
    	headerData:{},
        navData: [],
        bannerData: [],
        policyData:[],       
        cateData: [],
        freshData:[],
        brandData: [],
        hotData:[]
    },
    mutations: {
    	setHomeHeaderData(state, params){
    		state.headerData = params;
    	},
        setHomeNavData(state, params){ //params是传入的数据(下文的newData)
            state.navData = params;
        },
        setHomeBannerData(state, params){
            state.bannerData = params;
        },
        setHomePolicyData(state,params){
        	state.policyData = params;
        },
        setHomeCateData(state,params){
        	state.cateData = params;
        },
        setHomeFreshData(state,params){
        	state.freshData = params;
        },
        setHomeBrandData(state,params){
        	state.brandData = params;
        },
        setHomeHotData(state,params){
        	state.hotData = params;
        }
  },
    actions: {
    	//请求头部搜索框中商品总数量
    	async requestHomeHeaderData(context){
    		let data = await get(api.HOME_HEADER_URL);
    		//console.log(data);
    		let newData = data.data;
    		//console.log(newData);
    		context.commit('setHomeHeaderData',newData);   		
    	},   	
        // 请求首页导航数据
        async requestHomeNavData(context){
            let data = await get(api.HOME_NAV_URL);
	        //console.log(data);
            let newData = data.data.map(({id, name})=>({id, name}));
            newData.splice(0, 0, {id: -1, name: '推荐'});
            //console.log(newData);
            context.commit('setHomeNavData', newData); //提交更改newData到setHomeNavData
            //console.log('请求到了导航');
        },
        // 请求首页轮播图数据
        async requestHomeBannerData(context){
            let data = await get(api.HOME_BANNER_URL);
            let newData = data.data.map(({id, picUrl})=>({id, picUrl}));
            context.commit('setHomeBannerData', newData);
            //console.log('请求到了轮播图');
        },
        //请求首页协议数据
        async requestHomePolicyData(context){
        	let data = await get(api.HOME_POLICY_URL);        	
        	let newData = data.data.map(({icon,desc})=>({icon,desc}));
        	//console.log(newData);
        	context.commit('setHomePolicyData',newData);
        	//console.log('请求到了协议');
        },
        //请求首页分类数据
         async requestHomeCateData(context){
            let data = await get(api.HOME_CATE_URL);
            //console.log(data);
            let newData = data.data.kingKongList.map(({text, picUrl})=>({text, picUrl}));
            //console.log(newData);
            context.commit('setHomeCateData', newData);
            //console.log('请求到了分类列表');
        },
        //请求新人专享数据(内无可用数据)
        async requestHomeFreshData(context){
            let data = await get(api.HOME_FRESH_URL);
            //console.log(data);
            //let newData = data.data.kingKongList.map(({text, picUrl})=>({text, picUrl}));
            //console.log(newData);
            //context.commit('setHomeCateData', newData);
            //console.log('请求到了新人专享');
        },
         //请求首页品牌制造商数据
         async requestHomeBrandData(context){
            let data = await get(api.HOME_BRAND_URL);
            let newData = data.data.map(({name, floorPrice,picUrl})=>({name, floorPrice,picUrl}));
            context.commit('setHomeBrandData', newData);
            //console.log('请求到了品牌制造商');
        },
         //请求类目热销榜数据
         async requestHomeHotData(context){
            let data = await get(api.HOME_HOT_URL);
            //console.log(data);
          	let newData = data.data.categoryList.map(({categoryName, picUrl})=>({categoryName, picUrl}));
          	//console.log(newData);
	        context.commit('setHomeHotData', newData);
            //console.log('请求到了类目热销榜');
        }
        
    }
}

