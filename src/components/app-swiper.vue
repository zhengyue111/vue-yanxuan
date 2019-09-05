<template>
<div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
        <slot/>
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
export default {
    name: 'app-swiper',
    methods: {
        update(){
        	// 首先 判断 this.swiper是否存在， 如果存在， 就调用  this.swiper.update() 方法
            this.swiper && this.swiper.update();
        }   
    },
    mounted(){
        this.swiper = new Swiper(this.$refs.swiper, {
            pagination: '.swiper-pagination',
            autoplay:3000           
        });
    },
    
}
</script>

<style>

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px;
}
.swiper-pagination-bullet {
    width: 20px;
    height: 2px;
    border-radius: 0;
    background: #000;
    opacity: 0.4;
}
</style>
