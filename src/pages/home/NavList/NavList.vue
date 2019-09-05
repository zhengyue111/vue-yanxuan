<template>
<div class="page subpage" id="cate-list">
	<app-scroll class="content">
	    <h1>分类列表{{this.$route.params.cate_id}}</h1>
    </app-scroll>
</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		name:'navList',
		computed: {
	        ...mapState({
	            navData: state=>state.home.navData
	        })
	   },
	   created(){
//	   		console.log(this.$route);
//	   		console.log(this.$route.params);
	   }
	}
	 
</script>



<style lang="scss" scoped>
	#cate-list{
		width: 100%;
		background: lightblue;
		position: absolute;
		top: 76px;
		bottom: 49px;
		left: 0;
		.content{
			height: 100%;
		}
		
	}
</style>
