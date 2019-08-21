<template>
<div >
	<ul class="home-cate">
		<li class="cate-item" v-for="item in cateData" :key="item.sequen">
			<div class="cate-img"><img :src="item.picUrl"/></div>
			<div class="cate-text">{{item.text}}</div>
		</li>
	</ul>
</div>
	

</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:'home-cate',
		computed: {
	        ...mapState({
	            cateData: state=>state.home.cateData
	        })
	    }
	}
</script>

<style lang="scss" scoped>
	.home-cate{
		background: #fff;
		display: flex;
		flex-wrap:wrap;
		justify-content: space-around;
		padding-bottom: 10px;
		.cate-item{
			margin: 0 5px;
			.cate-img{
				width: 60px;
				height: 60px;
				img{
					width: 60px;
				}
			}
			.cate-text{
				text-align: center;
				line-height:20px ;
				font-size: 12px;
			}
		}
	}
	
</style>