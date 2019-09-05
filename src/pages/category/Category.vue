<template>
<div class="page" id="category">
	<div class="cate-search" >
		<input type="text" :placeholder=placeText onfocus="this.placeholder=''"/><span></span>
	</div>	
    <div class="wrap">
    	
    	<!--左侧导航栏-->
        <app-scroll class="nav">
        	<ul>
        		<li class="left-item" v-for="(item,index) in leftArr" 
        			:key="index" :class="{active:activeIndex == index}" 
        			@click="changeAct(item,index)">
	                {{item.name}}
	           </li>
        	</ul>          
        </app-scroll>
        
        
        <!--右侧分类-->
        <app-scroll class="cate">       	
        	<div class="cateInner">        	
        	<!--顶部轮播图-->
	        	<div class="catePic">
				    <app-swiper class="banner" ref="swiper">
				        <app-swiper-item v-for="item in bannerArr" :key="item.id">
				            <img :src="item.picUrl"/>
				        </app-swiper-item>
				    </app-swiper>
	        	</div>
	        	
	        	<ul class="right">
	        		
	        		<!--专区分类-->
	        		<li class="fl right-item"  
	        			v-for="(item,index) in rightArr1" 
	        			:key="item.id"
	        			v-show="type1Show">
	        			<div class="pic"><img :src="item.bannerUrl"/></div>
	        			<div class="txt" >{{item.name}}</div>	                
		            </li>
		            
		            <!--其他分类-->
		            <li class="right-item2" 
		            	v-for="(item,index) in rightArr2" 
		 				:key="item.id"
	        			v-show="type2Show">
		            	<p class="title">{{item.name}}</p>	
		            	<ul class="right-item2">
		            		<li class="right-item" v-for="item2 in item.categoryList">
		        				<div class="pic"><img :src="item2.wapBannerUrl"/></div>
		        				<div class="txt" >{{item2.name}}</div>       				
		        			</li>   
		            	</ul>       			           
		            </li>
	        	</ul>       	
        	</div>           
        </app-scroll>
    </div>
</div>
</template>

<script>

//	import axios from 'axios'	
	import { mapState } from 'vuex'
export default {
	name:'category',
	data(){
		return {
			leftArr:[],
			rightArr1:[],
			rightArr2:[],
			bannerArr:[],
			type1Show:true,
			type2Show:false,
			activeIndex:0 //默认点击的下标
		}
	},
	computed:{
    	...mapState({
    		headerData:state=>state.home.headerData  		
    	}),
    	placeText(){
    		return "\ue6c3 搜索商品,共" + this.headerData.total + "款好物";
    	}   	
    },
	methods:{
		//获取左边列表数据
		getCateLeftList () {
			//console.log("请求left");
			this.$get("/api/category/listmap")
			.then(function (response) {
				//console.log(response.data);
				this.leftArr = response.data;
				
				//进入分类，获取推荐产品对应的右边列表数据
				//console.log(response.data[0].id);							
				if (this.activeIndex == 0) {
					this.getCateRightList(response.data[0].id);
				}
			}.bind(this)) //改变函数中的this指向
		},
		
		//获取右边列表数据
		getCateRightList (id) {
			//console.log("请求right");
			this.$get("/api/category/listmap/group",{categoryId:id})
			.then(function (response) {
				//console.log(response);
				
				//点击专区时，获取专区对应的分类数据，显示第一种样式
				if(response.data.categoryGroupList.length === 1){
					this.type1Show = true;
					this.type2Show = false;
					this.rightArr1 = response.data.categoryGroupList[0].categoryList;
					this.bannerArr =response.data.currentCategory.bannerList;
				}
				//点击其他分类时，获取其他分类对应的分类数据，显示第二种样式				
				else if(response.data.categoryGroupList.length > 1){
					this.type1Show = false;
					this.type2Show = true;
					this.rightArr2 = response.data.categoryGroupList;
					this.bannerArr =response.data.currentCategory.bannerList;
				};				
				//console.log(this.type1Show,this.type2Show);
				
			}.bind(this));
		},
		changeAct(item,index){
//			console.log(item);	
			this.getCateRightList(item.id);
			this.activeIndex = index;
		}
	},
	created () {
		this.getCateLeftList();
		//console.log("create");
	},
	mounted(){
//  	this.placeText = "\ue6c3 搜素商品,共" + this.headerData.total + "款好物";
  	},   
   //当 轮播图 发生变化了，  更新 轮播
   	updated(){
   		this.$refs.swiper.update();
   	}
}
</script>

<style lang="scss" scoped>
@import '../../../public/css/mixin.scss';
#category{
	background: #FFFFFF;
	.cate-search{
		@include border-bottom;
		height: 44px;
		padding:0 20px;		
		input{
			height: 30px;
			width: 100%;
			background: #ededed;
			border: none;
			border-radius: 4px;
			display: inline-block;
			vertical-align: middle;
			margin: 0 auto;
			box-sizing: border-box;
			padding: 0 15px;
			font-family: "iconfont";
		}
		input::-ms-input-placeholder{text-align: center;}
		input::-webkit-input-placeholder{text-align: center;}
		span{
			display: inline-block;
			height: 100%;
			width: 0;
			vertical-align: middle;
		}
	}
	.wrap{
	    width: 100%;
	    position: absolute;
	    top: 44px;
	    left: 0;
	    bottom: 0;
	    display: flex;
	    background: #fff;
	    .nav{
	        width: 81px;
	        .left-item{
	        	line-height: 25px;
	        	margin-top: 20px;
	        	text-align: center;
	        	border-left: 3px solid transparent;
	        	&.active{
	        		border-left: 3px solid #ab2b2b;
	        	}
	        }        
	    }
	    .cate{
	        flex: 1;
	        .cateInner{
	        	padding: 15px;
	        }
	        
	        .catePic{
	        	width: 100%;
	        	height: 96px;      	
	        	margin-bottom: 16px;
	        	img{
	        		height: 96px;
	        	}
	        }
	        .right{
	        	/*display: flex;
	        	flex-wrap: wrap;*/
	        	overflow: hidden;       	
	        	.right-item2{       		
	        		.title{
	        			font-weight: bold;
	        			padding-bottom: 5px;
	        			margin-bottom: 10px;
	        			line-height: 20px;
	        			border-bottom: 1px solid #d9d9d9;
	        		}
	        		.right-item2{
	        			display: flex;
	        			flex-wrap: wrap;
	        		}
	        	}
	        	.right-item{
	        		width: 72px;
	        		padding:2px 8px;      		 		
	        	}
	        	.pic{
	    			display: block;
	    			width: 100%;
	    			height: 72px;
	    			img{
	    				width: 100%;
	    			}
	    		}
	    		.txt{
	    			font-size: 12px;
	    			text-align: center;
	    			height: 36px;
	    			line-height: 18px;
	    		}      
	        }
	    }    
	}
}
</style>
