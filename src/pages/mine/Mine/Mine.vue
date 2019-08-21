<template>
<div class="page" id="mine">
	<!--头部-->
 	<mine-tab></mine-tab>
   
   	<!--内容区-->
  	<login></login>
	<!--<router-view></router-view>-->
	
</div>	
</template>

<script>
	import MineTab from '../../../components/mine-tab'
	import Login from '../../login/Login'
	export default{
		name:"mine",		
		components:{
			[MineTab.name]:MineTab,
			[Login.name]:Login
		}		
	}
	
</script>

<style lang="scss" scoped>
#mine{
	width:100%;
	height: 100%;
	position: relative;
	z-index: 10;	
}
</style>