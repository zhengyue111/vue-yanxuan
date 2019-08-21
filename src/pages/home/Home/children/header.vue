<template>
<header class="home-header">
	<h3 class="home-title">网易严选</h3>
	<input class="int" type="text"  :placeholder=placeText onfocus="this.placeholder=''" />
	<button class="home-log" @click="toLog">登录</button>
</header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'home-header',
    props:['val'],
    data(){
    	return {
//  		placeText:'',
    	}
    },
    computed:{
    	...mapState({
    		headerData:state=>state.home.headerData  		
    	}),
    	placeText(){
    		return "\ue6c3 搜素商品,共" + this.headerData.total + "款好物";
    	}
    },
    methods:{
    	toLog(){
    		this.$router.push({path:'/mine'});
    	}
    },
    mounted(){
//  	this.placeText = "搜素商品,共" + this.headerData.total + "款好物";
//   	console.log(this.headerData.total );
    }
}
</script>

<style lang="scss" scoped>
.home-header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 30;
    display: flex;
    align-items: center;
    h3{
    	font-size: 18px;
    	font-family: '楷体';
    	line-height: 30px;
    	padding-left: 10px;
    }
    .int{
    	height: 30px;
    	padding:0 15px;
    	border: none;
    	background: #eee;
    	border-radius: 3px;
    	margin: 0 10px;
    	width: 200px;
    	font-family: "iconfont";
    }
    input.int::-ms-input-placeholder{text-align: center;}
	input.int::-webkit-input-placeholder{text-align: center;}
    .home-log{
    	height: 22px;
    	border: 1px solid #b4282d;
    	background: #fff;
    	border-radius: 5px;
    	font-size: 10px;
    	color:#b4282d;
    }
}
</style>
