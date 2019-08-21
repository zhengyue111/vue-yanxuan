<template>
	
	<div class="home-brand">
		<div class="part-title">
			<span>品牌制造商直供</span><a href="#">更多＞</a>
		</div>
		
		<ul class="brand-main">
			<li class="brand-item" 
				v-for="item in brandData" 
				:key="item.resourcesId"
				:style="{backgroundImage:'url('+item.picUrl+')',backgroundSize:'100%'}">
				<h3 class="brand-title">{{item.name}}</h3>
				<p class="brand-price">{{item.floorPrice}}元起</p>
				<!--<img class='brand-img' :src="item.picUrl"/>-->
			</li>
		</ul>
		
	</div>
	
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		name:'home-brand',
		computed: {
	        ...mapState({
	            brandData: state=>state.home.brandData
	        })
	    }
	}
	
</script>

<style lang="scss" scoped>
	.home-brand{
		margin-top: 10px;
		padding: 15px;
		background: #fff;
		.part-title{
			display: flex;
			justify-content: space-between;
			padding-bottom: 13px;
			span{
				font-size: 18px;
			}
			a{
				font-size: 14px;
			}
		}
		.brand-main{
			display: flex;
			flex-wrap: wrap;
			.brand-item{
				width: 170px;
				height: 150px;
				padding-top:10px;
				.brand-title{
					font-size: 16px;
					text-align: center;
				}
				.brand-price{
					font-size: 14px;
					color:#7f7f7f;
					text-align: center;
				}
				.brand-img{
					width: 120px;
					display: block;
					margin: 0 auto;
				}
			}
			.brand-item{
				margin-top: 3px;
			}
			.brand-item:nth-child(odd){
				margin-right: 3px;
			}
		}
	}
	
</style>