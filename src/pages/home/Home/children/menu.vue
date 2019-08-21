<template>
<div class="nav">
	
	<!--导航条-->
    <div class="list-wrap" ref="menuScroll">
        <ul class="menu-list">
            <li class="menu-item" :class="{active: value === index}" 
                v-for="(item, index) in navData" :key="item.id"
                @click="selectAction(index)">
                {{item.name}}
            </li>
        </ul>
    </div>

	<!--点击下拉展示-->
    <transition enter-active-class="slideInDown" leave-active-class="slideOutUp">
        <div class="table-wrap" v-show="isShow">
            <div class="cover"></div>
            <div class="menu-table">
                <h3 class="title">全部频道</h3>
                <div class="clearfix">
                	<div class="menu-item" :class="{active: value === index}" 
	                    v-for="(item, index) in navData" :key="item.id"
	                    @click="selectAction(index)">
	                    {{item.name}}
	                </div>
                </div>
               
            </div>
        </div>
    </transition>

    <div class="arrow" :class="{active: isShow}" @click="changeAction">
        <img src="../../../../assets/arrow.png"/>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
    name: 'home-menu',
    props: {
    	//value的值，就是绑定 了 home.vue 的selectNavIndex
        value: Number
    },
    data(){
        return {
            isShow: false
        }
    },
    computed: {
        ...mapState({
            navData: state=>state.home.navData
        })
    },
    methods: {
        changeAction(){
            this.isShow = !this.isShow;
        },
        selectAction(index){
            this.$emit('input', index);
            this.isShow = false;
        }
    },
    mounted(){
        new BScroll(this.$refs.menuScroll, {
            click: true,
            tap: true,
            scrollX: true,
            scrollY: false
        });
    }
}
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 44px;
    left: 0;
    padding-right: 50px;
    box-sizing: border-box;
    background: #fff;
    .list-wrap{
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        padding-left: 10px;
        background: #fff;
        .menu-list{
            display: flex;
            width: 200%;
            .menu-item{
                flex: 1;
                margin: 0 5px;
                &.active{
                    color: #b4282d;
                    border-bottom: 2px solid #b4282d;
                }
            }
        }
    }
    .table-wrap{
        position: fixed;
        width: 100%;
        top: 44px;
        left: 0;
        bottom: 0;
        z-index: 20;
        .cover{
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0;
            left: 0;
        }
        .menu-table{
            position: absolute;
            top: 0;
            left: 0;
            background: #fff;
            width: 100%;
            .menu-item{
            	float: left;
            	border: 1px solid #ccc;
            	border-radius: 4px;
            	background: #FAFAFA;
            	padding: 0 10px;
            	margin:10px;
            	font-size: 10px;
            	line-height: 25px;
                &.active{
                    color: #b4282d;
                    border: 1px solid #b4282d;
                }
            }
        }
    }
    .arrow{
        position: absolute;
        top: 0;
        right: 15px;
        z-index: 21;
        transition: 200ms;
        &.active{
            transform: rotate(180deg);
        }
        img{
        	width: 15px;
        	margin-top: 5px;
        }
    }
    .slideInDown, .slideOutUp{
        animation-duration: 200ms;
    }
}
</style>

