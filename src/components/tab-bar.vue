<template>
<nav class="tab-bar border-top">
    <template v-for="tabItem in tabData">
        <router-link class="tab-item" :key="tabItem.id" 
            :to="tabItem.path">
            <span></span>
            <span>{{tabItem.name}}</span>
        </router-link>
    </template>
</nav>
</template>

<script>
export default {
    name: 'tab-bar',
    data(){
        return {
            tabData: [
                {id: 1, name: '首页', path: '/home'},
                {id: 2, name: '分类', path: '/category'},
                {id: 3, name: '识物', path: '/topic'},
                {id: 4, name: '购物车', path: '/cart'},
                {id: 5, name: '个人', path: '/mine'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public/css/mixin.scss';
.tab-bar{
	@include border-top;
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    background: #fff;
    .tab-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        span:nth-of-type(1){
            height: 24px;
            width: 24px;
            margin: 4px auto 0;
            background-image: url('/images/tab.png');
            background-size: 100%;
            background-position: 0 -100px;
        }
        span:nth-of-type(2){
            flex: 1;
            text-align: center;
        }
        font-size: 14px;
    }
    .tab-item:nth-of-type(1){
        span:nth-of-type(1){
            background-position: 0 144px;
        }
    }
    .tab-item:nth-of-type(2){
        span:nth-of-type(1){
            background-position: 0 -90px;
        }
    }
    .tab-item:nth-of-type(3){
        span:nth-of-type(1){
            background-position: 0 84px;
        }
    }
    .tab-item:nth-of-type(4){
        span:nth-of-type(1){
            background-position: 0 -324px;
        }
    }
    .tab-item:nth-of-type(5){
        span:nth-of-type(1){
            background-position: 0 -270px;
        }
    }
    .tab-item.router-link-active:nth-of-type(1){
        span:nth-of-type(1){
            background-position: 0 174px;
        }
        span:nth-of-type(2){
            color: #b4282d;
        }
    }
    .tab-item.router-link-active:nth-of-type(2){
        span:nth-of-type(1){
            background-position: 0 -60px;
        }
        span:nth-of-type(2){
            color: #b4282d;
        }
    }
    .tab-item.router-link-active:nth-of-type(3){
        span:nth-of-type(1){
            background-position: 0 114px;
        }
        span:nth-of-type(2){
            color: #b4282d;
        }
    }
    .tab-item.router-link-active:nth-of-type(4){
        span:nth-of-type(1){
            background-position: 0 -294px;
        }
        span:nth-of-type(2){
            color: #b4282d;
        }
    }
    .tab-item.router-link-active:nth-of-type(5){
        span:nth-of-type(1){
            background-position: 0 -240px;
        }
        span:nth-of-type(2){
            color: #b4282d;
        }
    }
}
</style>

