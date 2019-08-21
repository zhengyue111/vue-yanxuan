<template>	
<div class="mine-tab">
	
	<p class="iconfont tab-left" @click="toHome">&#xe6f3;</p>
	
	<h2 class="tab-title">网易严选</h2>
	<p class="iconfont tab-right">
		<span>&#xe6c3;</span>
		<span>&#xe600;</span>
	</p>
</div>
</template>

<script>
	export default{
		name:"mine-tab",
		methods:{
			toHome(){
				this.$router.push({path:'/'});
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../public/css/mixin.scss';
.mine-tab{
	@include border-bottom;
	height: 44px;
	background: #fafafa;
	position: relative;
	padding:0 15px;
	.iconfont{
		font-size: 24px;
	}
	.tab-left,.tab-right{
		position: absolute;
		top: 0;
		line-height: 44px;
	}
	.tab-right{
		right: 15px;
		span{
			padding-left: 15px;
		}		
	}
	.tab-title{
		text-align: center;
		line-height: 44px;
		font-family: "楷体";
		font-weight: bold;
	}
	
}
</style>