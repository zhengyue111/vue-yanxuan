<template>
	<div class="home-hot">
		<h3 class="hot-title">类目热销榜</h3>
		<div class="hot-body">
			
			<ul class="top">
				<li class="top-item left"
					v-for="item in hotData2"
					:key="item.categoryName">
					<h4>{{item.categoryName}}<span></span></h4>
					<div class="pic">
						<img :src="item.picUrl" />
					</div>
				</li>
			</ul>

			<ul class="bottom">
				<li class="bottom-item"
					v-for="item in hotData"
					:key="item.categoryName">
					<h5>{{item.categoryName}}</h5>
					<div class="pic">
						<img :src="item.picUrl" />
					</div>
				</li>
			</ul>	
		</div>
	</div>
	
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name:'home-hot',
		data(){
			return {
				hotData:[],
				hotData2:[]
			}
		},		
//		computed:{
//			...mapState({
//				hotData:state => state.home.hotData
//			})
//		},
//		mounted(){
//			this.hotData2 = this.hotData.splice(0,2);
//			console.log(this.hotData2,this.hotData);
//		}
		methods:{
			getHotData () {
				this.$get("/api/home/catehotsell")
				.then(function (response) {
					//console.log(response.data);
					this.hotData = response.data.categoryList;
					this.hotData2 = this.hotData.splice(0,2);
					//console.log(this.hotData2,this.hotData);
				}.bind(this)) //改变函数中的this指向
			}
		},
		created(){
			this.getHotData();
		}
		
	}
	
</script>

<style lang="scss" scoped>
.home-hot{
	width: 100%;
	background:#fff;
	padding: 15px;
	margin-top: 10px;
	box-sizing: border-box;
	.hot-title{
		font-size: 18px;
		margin-bottom: 15px;
	}
	ul{
		width: 100%;
		display: flex;
		justify-content: space-between;	
		
	}
	ul.top{
		height: 100px;	
		.top-item{
			width: 49.2%;
			display: flex;
			&.left{
				background: #F9F3E4;
			}
			&.right{
				background: #EBEFF6;
			}
			.pic{
				width: 100px;
			}
			img{
				width: 100px;
			}	
			h4{
				flex: 1;
				padding-top: 20px;
				padding-left: 12px;
				span{
					display: inline-block;
					width: 22px;
					height: 2px;
					background: #333;
				}
			}
			
		}
	}
	ul.bottom{
		flex-wrap: wrap;
		.bottom-item{
			margin-top: 6px;
			height: 90px;
			width: 82px;
			background: #F5F5F5;
			h5{
				text-align: center;
				padding-top: 5px;
			};
			.pic{
				width: 60px;
				margin-top: 1px;
				margin-left: 12px;
			}
			img{
				width: 60px;
			}
		}
	}

}
	
</style>