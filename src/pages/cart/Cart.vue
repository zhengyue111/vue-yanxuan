<template>
<div class="page" id="cart">
	<div class="cart-tab">
		<span class="to-cart">购物车</span>
		<span class="to-money">领券</span>
	</div>
	
	<ul class="cart-policy">
		<li>30天无忧退货</li>
		<li>48小时快速退款</li>
		<li>满88元免邮费</li>
	</ul>
	
	<div class="cart-empty">
		<div class="txt">
			<p>去添加点什么吧</p>
			<button class="log-btn" @click="toLog" v-show="logShow">登录</button>
		</div>		
	</div>
    
</div>
</template>

<script>
	export default{
		name:'cart',
		data(){
			return {
				logShow:false
			}
		},
		methods:{
	    	toLog(){
	    		this.$router.push({path:'/login?redirect=/cart'});
	    	}
	  	 },
	   	mounted(){
	   		//判断是否已登录,未登录就显示登录按钮
   			if(localStorage.getItem('userInfo')){
   				this.logShow = false;
   			}else{
   				this.logShow = true;
   			}
	   	}
	}
	
</script>

<style lang="scss" scoped>
@import '../../../public/css/mixin.scss';
#cart{
	width:100%;	
	display:flex;
	flex-direction:column;
	.cart-tab{
		@include border-bottom;
		height: 44px;
		line-height: 44px;
		background: #fff;
		display: flex;
		justify-content: space-between;
		padding: 0 15px;
		.to-cart{
			font-size:18px;
		}
		.to-money{
			color: #B4282D;
			font-size: 16px;
		}
	}
	.cart-policy{
		height: 35px;
		line-height: 35px;
		display: flex;
		justify-content: space-between;
		padding: 0 15px;
		background: #eee;
		font-size: 12px;
	}
	.cart-empty{
		position: relative;
		flex: 1;
		background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png) no-repeat center center;
		background-size: 124px;
		.txt{
			width:240px;
			position: absolute;
			bottom: 135px;
			left: 50%;
			margin-left: -120px;
		}
		.log-btn{
			display: block;
			width: 100%;
			height: 46px;
			line-height: 46px;
			text-align: center;
			background: #B4282D;
			font-size: 16px;
			color:#fff;
			border: none;
			border-radius: 2px;			
		}
		p{
			width: 100%;
			text-align: center;
			margin-bottom: 18px;
			color: #999;
		}
	}
}
	
</style>
