<template>
<div class="page" id="topic">
	<div class="header">	
		<!--头部-->
		<div class="topic-head">
			<p class="iconfont tab-left">城市 <span>&#xe641;</span></p>	
			<h2 class="tab-title">影院</h2>
			<p class="iconfont tab-right"><span>&#xe6c3;</span></p>
		</div>
		
		<!--头部分类-->
		<div class="topic-cate">
			<p class="iconfont all">全城 <span>&#xe641;</span></p>	
			<p class="iconfont app">App订票 <span>&#xe641;</span></p>	
			<p class="iconfont latest">最近去过 <span>&#xe641;</span></p>	
		</div>
	</div>
	
	<!--内容区,滚动视图-->
	<app-scroll class="content">
		<ul class="city-list">
			<li class="cities" 
				v-for="item in cinemas" :key="item.cinemaId">{{item.name}}</li>
		</ul>
  	</app-scroll>
  	
  	
</div>
</template>
<script>
import axios from 'axios'
export  default{
	name:"topic",
	data(){
		return {
			cinemas:[]
		}
	},
	components:{
		
	},
	mounted(){
		//请求卖座网的接口
		axios.get('/gateway',{
            params: {
            	cityId: 440300,
				ticketFlag: 1,
				k: 6798253
            },
            headers:{	            				'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1566352407429496729607"}',
				'X-Host': 'mall.film-ticket.cinema.list'
            },
            baseURL: 'https://m.maizuo.com'
        })
        .then(response=>{
	     	//console.log(response.data.data.cinemas);
	     	this.cinemas = response.data.data.cinemas;
        })
        .catch(error=>{
            console.log('请求失败');    
        })
	}
		
	

}
	
</script>

<style lang="scss" scoped>
	@import '../../../../public/css/mixin.scss';
#topic{
	/*@include border-bottom;*/
	.topic-head{		
		height: 44px;
		background: #fff;
		position: relative;
		top:0;
		padding:0 15px;
		.iconfont{
		font-size: 24px;
		}
		.tab-left,.tab-right{
			position: absolute;
			top: 0;
			line-height: 44px;
			font-size: 14px;
		}
		.tab-left span{
			font-size: 12px;
		}
		.tab-right{
			right: 15px;			
			span{
				padding-left: 15px;
				font-size: 20px;
			}		
		}
		.tab-title{
			text-align: center;
			line-height: 44px;
			font-family: "楷体";
			font-weight: bold;
		}	
	}
	.topic-cate{
		@include border-bottom;
		height: 49px;
		display: flex;
		align-items: center;
		background: #fff;
		.iconfont{
			width: 33.33%;
			text-align: center;
			font-size: 15px;
			span{
				font-size: 12px;
			}
		}
	}
	.content{		
		width: 100%;
        position: absolute;
        top: 93px;
        left: 0;
        bottom: 0;
		.cities{
			@include border-bottom ;
			text-align:center;
			line-height: 50px;
			background: #fff;
		}
	}
	
}
</style>
