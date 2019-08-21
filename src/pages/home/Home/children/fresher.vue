<template>
	<div class="home-fresher">
		<h3 class="fresh-title"> — 新人专享礼 — </h3>
		<div class="fresh-main">
			<div class="main-left">
				<h3 class="left-title">新人专享礼包</h3>
				<div class="img-wrap">
					<img class="sta-img" src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
					<div class="animate"></div>
				</div>
			</div>
			
			<div class="main-right">
				<ul>
					<li class="right top">
						<div class="top-text">
							<h3 class="fuli">福利社</h3>
							<p class="tejia">今日特价</p>
						</div>
						<div class="top-img one">
							<img src="http://yanxuan.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=200x200&quality=75"/>
						</div>					
					</li>
					<li class="right bottom">
						<div class="top-text">
							<h3 class="fuli">新人拼团</h3>
							<p class="tejia pack">1元起包邮</p>
						</div>
						<div class="top-img two">
							<img src="http://yanxuan.nosdn.127.net/bc78da6e24a00f1205f3d662778bdf22.png?imageView&thumbnail=200x200&quality=75"/>
						</div>	
					</li>
				</ul>
				
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name:'home-fresher',
		computed:{
			...mapState({
				freshData:state=>state.home.freshData
			})
		}
	}
</script>

<style lang="scss" scoped>
	.home-fresher{
		margin-top: 10px;
		padding:15px;
		background: #fff;
		h3.fresh-title{
			text-align: center;
			padding-bottom: 15px;
			font-size:18px ;
		}
		.fresh-main{
			display: flex;
			.main-left{
				background:#F9E9CF;
				margin-right: 2px;
				padding: 15px 10px;
				width: 170px;
				box-sizing:border-box;
				h3.left-title{
					font-size: 16px;
					padding-left: 10px;					
				}
				.img-wrap{
					position: relative;
					padding: 15px;
					.sta-img{
						width: 130px;
					}
					.animate{
					    position: absolute;
					    width: 12px;
					    height: 8px;
					    bottom: 25px;
					    right: 40px;
					    background: url(//yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png) no-repeat;
					    background-size: 100% 100%;
					    animation: carousel 1s linear infinite;
					}
				}
			}
			.main-right{
				width: 170px;
				.right{
					height: 104px;
					background:#fbe2d3;
					display: flex;
					box-sizing:border-box;
					.top-text{
						margin-top: 10px;
						margin-left: 10px;
						flex: 1;
						.fuli{
							font-size: 16px;
						}
						.tejia{
							line-height: 16px;
							font-size: 12px;
							color: #7F7F7F;
						}
						.tejia.pack{
							background: #CBB693;
							color:#fff;
							text-align: center;
							/*padding: 0 2px;*/
							border-radius: 2px;
							margin-top: 2px;
						}
					}
					.top-img{
						img{
							width:90px;
						}
					}
					.top-img.one{
						padding-left: 0.266666rem;
					}
					.top-img.two{
						margin-top: 0.266666rem;
					}
				}
				.right.top{
					margin-bottom: 2px;
				}
				.right.bottom{
					background:#ffecc2;
				}
			}
		}
	}
</style>
