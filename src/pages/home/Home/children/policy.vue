<template>
	<div class="home-policy">
		<ul class="policy-title">
			<li class="policy-line" v-for="item in policyData">
				<img :src="item.icon" class="pic" />
				<span class="txt">{{item.desc}}</span>				
			</li>
		</ul>
		
		
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'home-policy',
		computed:{
			...mapState({
				policyData:state=>state.home.policyData
			})
		}
		
	}
</script>

<style lang="scss" scoped>
	.home-policy{
		padding: 0 10px;
		background: #fff;
		.policy-title{
			display: flex;
			align-items: center;
			height: 40px;
			font-size: 10px;			
			.policy-line{
				flex: 1;
				text-align: center;
				.pic{
					width: 16px;
					display: inline-block;
					vertical-align: middle;	
					padding-right: 3px;			
				}
				.txt{
					display: inline-block;
					vertical-align: middle;	
				}
			}
		}
	}
</style>