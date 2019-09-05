<template>
<div class="page" id="topic">
	<div class="header">	
		<!--头部-->
		<div class="topic-head">
			<p class="iconfont tab-left" @click="showCity">深圳 <span>&#xe641;</span></p>	
			<h2 class="tab-title">影院</h2>
			<p class="iconfont tab-right"><span class="iconfont">&#xe6c3;</span></p>
		</div>
		
		<!--头部分类-->
		<ul class="topic-cate">
			<li class="iconfont" 
				v-for="(item,index) in cateArr"
				:key="item.id"
				:class="{active: activeIndex == index}" 
				@click="selectAction(index)">
				{{item.name}}<span>&#xe641;</span>
			</li>		
		</ul>
		
		<!--分类点击下拉展示-->
		<!--全城-->
	    <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">	    	
	        <div class="table-wrap" v-show="areaShow">
	            <div class="cover" @click="closeAct"></div>
	            <div class="menu-table area">
	                <div class="clearfix">
	                	<div class="menu-item area" 
		                    v-for="(item,index) in areaData"
		                    :key="item.id"
		                    :class="{active: index == 0}">
		                    {{item.name}}
		                </div>
	                </div>	               
	            </div>
	        </div>
	    </transition>
	    
	    <!--App订票-->
	    <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
	        <div class="table-wrap" v-show="appShow">
	            <div class="cover" @click="closeAct"></div>
	            <div class="menu-table app">
	                <div class="clearfix">
	                	<div class="menu-item app" 
		                    v-for="(item,index) in appData"
		                    :key="item.id"
		                    :class="{active: index == 0}">
		                    {{item.name}}
		                </div>
	                </div>	               
	            </div>
	        </div>
	    </transition>
	    
	    <!--最近去过-->
	    <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
	        <div class="table-wrap" v-show="lateShow">
	            <div class="cover" @click="closeAct"></div>
	            <div class="menu-table late">
	                <div class="clearfix">
	                	<div class="menu-item late" 
		                    v-for="(item,index) in lateData"
		                    :key="item.id"
		                    :class="{active: index == 0}">
		                    {{item.name}}
		                </div>
	                </div>	               
	            </div>
	        </div>
	    </transition>  
	</div>
	
	<!--影院列表,滚动视图-->
	<app-scroll class="content">
		<ul class="city-list">
			<li class="cities" 
				v-for="item in cinemas" :key="item.cinemaId">
				<div class="left">
					<p class="cinema-name">{{item.name}}</p>
					<p class="address">{{item.address}}</p>
				</div>				
				<div class="right">
					<p class="price"><i>￥</i>{{(item.lowPrice)/100}} <i>起</i></p>				
					<p class="distance">距离未知</p>
				</div>			
			</li>
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
			cinemas:[],
			areaShow:false,
			appShow:false,
			lateShow:false,
			activeIndex:-1,
			cateArr:[
				{ id:10,name:'全城'},
				{ id:11,name:'App订票'},
				{ id:12,name:'最近去过'},
			],
			areaData:[
				{ id:1,name:'全城'},
				{ id:2,name:'福田区'},
				{ id:3,name:'南山区'},
				{ id:4,name:'龙岗区'},
				{ id:5,name:'罗湖区'},
				{ id:6,name:'盐田区'},
				{ id:7,name:'宝安区'},
				{ id:8,name:'龙华区'},
				{ id:9,name:'坪山'}
			],
			appData:[
				{ id:13,name:'App订票'},
				{ id:14,name:'前台兑换'}
			],
			lateData:[
				{ id:15,name:'最近去过'},
				{ id:16,name:'离我最近'}
			]		
		}
	},
	methods:{
		showCity(){
			this.$router.push({path:'/city'});
		},
		//点击切换tab
		selectAction(index){
            if(index == 0){
            	this.areaShow = !this.areaShow;	
            	this.appShow = false;
			    this.lateShow = false;
            }else if(index == 1){
            	this.areaShow = false;
				this.appShow = !this.appShow;				
				this.lateShow = false;
            }else if(index == 2){			
				this.areaShow = false;
				this.appShow = false;
				this.lateShow = !this.lateShow;
            };
            //收起菜单时,失去高亮效果
            if(this.areaShow || this.appShow || this.lateShow){
		    	this.activeIndex = index;
			}else{
				this.activeIndex = -1;
			};
        },
        //点击黑色遮罩层区域时,收起菜单
        closeAct(){
        	this.areaShow = false;
        	this.appShow = false;
			this.lateShow = false;
			this.activeIndex = -1;
        }
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
	@import '../../../public/css/mixin.scss';
#topic{
	.active{
		color: #FF5F16;
	}
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
			height: 45px;
			padding: 15px;
			background: #fff;
			display: flex;
			justify-content: space-between;
			
		}
		.left{
			width: 240px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space:nowrap;
			text-align: left;
			.address{
				font-size: 12px;
			}
			.cinema-name{
				font-size: 16px;
			}
		}
		.left,.right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.right{
			.price{
			font-size: 16px;	
			color: #ff5f16;
				i{
					font-size: 13px;
				}
			}			
			.distance{
				font-size: 13px;
			}
		}
		
	}
	.table-wrap{
		width: 100%;
		position: fixed;
		top: 93px;
		left: 0;
		bottom: 0;
		/*padding: 0 15px;*/
		z-index:20;
		.cover{
			width: 100%;
		    height: 100%;
		    background: rgba(0, 0, 0, 0.5);
		    position: absolute;
		    top: 0;
		    left: 0;
		}
		.menu-table{
			position: absolute;
			width: 100%;
		    top: 0;
		    left: 0;
		    background: #fff;
		    padding: 15px 15px 0 15px;	
		    &.area{
				display: flex;
			    justify-content: space-between;
			    flex-wrap: wrap;
			    .area{
			    	width: 74px;
			    	float: left;
				    border: 1px solid rgba(210,214,220,.5);
				    border-radius: 4px;				    
				    text-align: center;				    
				    margin-right: 10px;
				    margin-bottom: 15px;
				    height: 30px;
			    	line-height: 30px;
				}
				.area:first-child{
					border:1px solid #FF5F16;
				}			    
			}
			.menu-item{				
				height: 40px;
			    font-size: 14px;
			} 		    
		}		
		
	}
	
}
</style>
