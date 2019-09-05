<template>
<div class="log" id="login">
	<!--登录头部-->
	<login-tab></login-tab>
		
    <!--登录主页-->
    <div class="log-main" v-show="mainShow">   
	    <div class="log-pic">
	    	<img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
	    </div>
	    
	    <ul class="log-item">
    		<li class="line  active" @click="phoneAct">
	    		<span class="iconfont">&#xe616;</span>
	    		<em>手机号快捷登录</em>
    		</li>
    		<li class="line" @click="emailAct">
	    		<span class="iconfont">&#xe627;</span>
	    		<em>邮箱账号登录</em>
    		</li>
	    </ul>
	    
	    <!--底部登录链接-->   
	    <ul class="log-link clearfix">
			<li class="link" v-for="item in linkArr" :key="item.id"> 
				<i class="iconfont" :class="[item.icon]"></i>
				<em>{{item.name}}</em>
			</li>    	
	    </ul>	    
    </div>
     
    <!--手机登录页面-->
    <div v-show="phoneShow" class="log-phone">

    	<img  class="top-pic" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
    	
    	<div class="phone-main">

			<input class="user" type="text" placeholder="请输入手机号" v-model="username" />
			<input class="pass" type="password" placeholder="请输入密码" v-model="password"/>

    		<div class="prob">
    			<span>遇到问题?</span><span>使用密码验证登录</span>
    		</div>
    		<button class="log-btn" 
    			@click="handleLogin({username, password})">登录</button>
    		<p class="agree">
    			<input checked="checked" type="checkbox" />
    			<span class="ag-item">
    				我同意 <i>服务条款</i> 和 <i>网易隐私政策</i>
    			</span>   			
    		</p>
    		<p class="iconfont log-other">其他登录方式<em>&#xe601;</em></p>   		
    	</div>
    </div>
	
	<!--邮箱登录页面-->
	<div v-show="emailShow" class="log-email">
		
		<img  class="top-pic" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
    	
    	<div class="phone-main">

			<input class="user" type="text" placeholder="邮箱账号"/>
			<input class="pass" type="password" placeholder="密码"/>

    		<div class="prob">
    			<span>注册账号</span><span>忘记密码</span>
    		</div>
    		<button class="log-btn"
    			@click="handleLogin({username, password})">登录</button>
    		<p class="iconfont log-other">其他登录方式<em>&#xe601;</em></p>   		
    	</div>
	</div>
		
    
</div>	
</template>

<script>
	import { mapActions } from 'vuex'
	import LoginTab from '../../components/login-tab'
	export default{
		name:"login",
		components:{
			[LoginTab.name]:LoginTab
		},
		data(){
			return {
				linkArr:[
					{id:4,name:'微信',icon:'icon-weixin'},
	                {id:5,name:'QQ',icon:'icon-qq'},
	                {id:6,name:'微博',icon:'icon-weibo'}
				],
				mainShow:true,
				phoneShow:false,
				emailShow:false,
				username: '',
      			password: ''
			}
		},		
		methods:{
			phoneAct(){
				this.mainShow=false;
				this.phoneShow=true;
				this.emailShow=false;
			},
			emailAct(){
				this.mainShow=false;
				this.phoneShow=false;
				this.emailShow=true;
			},
			...mapActions('user', ['handleLogin'])
		}
	
	}
</script>

<style lang="scss" scoped>
#login{
	width:100%;
	height: 100%;
	position: fixed;
	z-index: 10;	
	background: #f6f6f6;
	.log-pic{
		width: 100%;
		padding-top: 80px;
		padding-bottom: 95px;
		img{
			height: 45px;
			display: block;
			margin: 0 auto;
		}
	}
	.log-main,.log-phone,.log-email{
		width: 100%;
		height: 100%;
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
		.active{
			background:#DD1A21 ;
			color: #fff;
		}
	}
	.log-link{
		width: 100%;
		height: 18px;		
		position: relative;
		bottom: -180px;
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
	.top-pic{
		display: block;
		height:32px;
		margin:0 auto;
		padding: 50px 0;
	}
	.phone-main{
		padding: 0 20px;
		input.user,input.pass{
			display: block;
			box-sizing: border-box;
			margin: 0 auto;
			margin-bottom: 15px;
			height: 40px;
			background: #D9D9D9;
			border: none;
			border-bottom:1px solid #eee;
			width: 100%;
			padding-left: 10px;
		}
		.prob{
			display: flex;
			justify-content: space-between;
			margin: 15px 0;
		}
		.log-btn{
			display: block;
			width: 100%;
			height: 46px;
			line-height: 46px;
			text-align: center;
			background: #DD1A21;
			font-size: 16px;
			color:#fff;
			border: none;
			border-radius: 2px;
			margin-bottom: 10px;
		}
		.agree{
			font-size: 12px;
			line-height: 20px;
			position: relative;
			input{
				position: absolute;
				left: 0;
				top: 2px;
				display: inline-block;
				width:15px;
				height: 15px;
			}
			.ag-item{
				padding-left: 25px;
				i{
					color: #007AFF;
				}
			}
		}
		.log-other{
			margin-top: 30px;
			text-align: center;
		}
	}

}
</style>