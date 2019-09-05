<template>
<div class="page" id="mine">
	<div class="mine-head">
		<div class="head-left">
			<img class="photo" src="../../../public/images/avar.jpeg"/>
			<div class="account">
				<p class="nickname">{{ userInfo.username }}</p>
				<p class="level">普通用户</p>
			</div>
		</div>
	</div>
	<h1>(⊙_⊙)?</h1>
</div>	
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name:"mine",		
		computed:{
			...mapState('user',['userInfo'])
		}
	}
	
</script>

<style lang="scss" scoped>
#mine{
	width:100%;
	.mine-head{
		background:#c0a469;
		box-sizing: border-box;
	}
	.head-left{
		margin-left: 15px;
		padding: 32px 0;
		display: flex;
		img{
			display: block;
			width: 72px;
			height: 72px;
			border-radius: 50%;
			margin-right: 15px;
		}
		.account{
			padding: 12px 0;
			font-size: 16px;
			color:#fff;
		}
		.nickname{
			padding-bottom: 5px;
		}
	}
	h1{
		margin-top:50px;
		text-align: center;
		font-size: 30px;
	}


}
</style>