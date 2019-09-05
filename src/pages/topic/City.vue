<template>
<div class="cities">
	<div class="top-fix">
		<!--头部当前城市-->
		<h4 class="city-current">
			<span class="iconfont" @click="goBack">&#xe61f;</span>当前城市-深圳
		</h4>
		<!--搜索框-->
		<div class="city-search" >
			<input :placeholder=placeText onfocus="this.placeholder=''"/>
			<span class="middle-line"></span>
		</div>
	</div>
		
	<div class="wrapper">
		<!--定位城市-->
		<div class="city-location">
			<p>GPS定位你所在的城市</p>
			<button>深圳</button><span class="middle-line"></span>
		</div>
		<!--内容区-->
		<van-index-bar>
			<van-index-anchor index="A"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			
			<van-index-anchor index="B"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			
			<van-index-anchor index="C"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			
			<van-index-anchor index="D"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			
			<van-index-anchor index="E"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			
			<van-index-anchor index="F"/>
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
			<van-cell title="文本" />
		</van-index-bar>

	</div>
</div>
	
</template>

<script>
	export default{
		name:'city',
		data(){
			return {
				placeText:''
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1);
			}
		},
		mounted(){
	    	this.placeText = "\ue6c3 请输入城市名或拼音";
	  	}
	}
</script>

<style lang="scss" scoped>
@import '../../../public/css/mixin.scss';
.cities{
	width: 100%;
	height: 100%;
	position:absolute;
	background: #f4f4f4;
	top: 0;
	left: 0;
	z-index:30;
	display: flex;
	flex-direction:column;
	.top-fix{
		height:93px;
		
	}
	.city-current{
		width: 100%;
		text-align: center;
		line-height: 44px;
		background: #fff;
		position: relative;
		.iconfont{
			text-align: left;
			position: absolute;
			left: 15px;
			font-size: 20px;
		}
	}	
	.city-search{
		@include border-bottom;
		height:50px;
		padding:0 15px;		
		input{
			height: 30px;
			width: 100%;
			background: #fff;
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
	}
	.wrapper{
		flex: 1;		
	}
	.city-location{
		background: #fff;
		padding: 15px;
		button{
			margin:5px 0 0 5px;
			padding:0 20px;
			border-radius:3px;
			line-height: 30px;
			border: none;
			background: #f4f4f4;
		}
	}
	.middle-line{
		display: inline-block;
		height: 100%;
		width: 0;
		vertical-align: middle;
	}	
	.van-index-bar__sidebar{
		top:200px;
	}	
}



</style>