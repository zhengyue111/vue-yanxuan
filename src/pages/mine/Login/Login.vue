<template>
<div class="mine-log">
    <!--登录-->
    <div class="mine-pic">
    	<img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
    </div>
    
    <div class="log-item">
    	<template v-for="(item,index) in lineArr">
    		<router-link class="line"
    			:key="item.id" 
    			:class="{active: activeIndex == index}"
    			@click="opAct(index)"
    			:to="item.path">
	    		<span class="iconfont" :class="[item.icon]"></span>
	    		<em>{{item.name}}</em>
    		</router-link>
    	</template>
    </div>
    
    <!--底部登录链接-->   
    <ul class="log-link clearfix">
		<li class="link" v-for="item in linkArr" :key="item.id"> 
			<i class="iconfont" :class="[item.icon]"></i>
			<em>{{item.name}}</em>
		</li>    	
    </ul>
    
</div>	
</template>

<script>
	export default{
		name:"mine-log",
		data(){
			return {
				lineArr:[
					{id:1,name:'手机号快捷登录',icon:'icon-shouji',path:'/phone'},
	                {id:2,name:'邮箱账号登录',icon:'icon-youxiang',path:'/email'}
				],
				linkArr:[
					{id:4,name:'微信',icon:'icon-weixin'},
	                {id:5,name:'QQ',icon:'icon-qq'},
	                {id:6,name:'微博',icon:'icon-weibo'}
				],
				activeIndex:0
			}
		},
		methods:{
			opAct(index){
				this.activeIndex = index;
			}
		}
	
	}
</script>

<style lang="scss" scoped>
.mine-log{
	width: 100%;
	.mine-pic{
		width: 100%;
		padding-top: 80px;
		padding-bottom: 95px;
		img{
			height: 45px;
			display: block;
			margin: 0 auto;
		}
	}
	.log-item{
		padding: 20px;
		.line{
			display: block;
			width: 100%;
			height: 46px;
			border: 1px solid #DD1A21;
			border-radius: 2px;
			margin-bottom: 15px;
			line-height: 46px;
			text-align: center;
			color: #DD1A21;			
		}
		.iconfont{
			padding-right: 5px;
			font-size: 20px;
		}
		.line.active{
			background:#DD1A21 ;
			color: #fff;
		}
	}
	.log-link{
		width: 100%;
		height: 18px;		
		position: absolute;
		bottom: 40px;
		left: 0;
		text-align: center;
		.link{
			padding:0 20px;
			display: inline-block;
			border-right:1px solid #7F7F7F;
			text-align: center;	
			color: #7F7F7F;	
			line-height: 18px;	
		}
		.link:last-child{
			border: none;
		}
		.iconfont{
			font-size: 20px;
			padding-right: 2px;
		}		
	}	
}
</style>