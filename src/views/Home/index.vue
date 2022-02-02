<template>
  <div 
  v-loading = "isLoading"
  class="home-container" 
  ref="container"
  @wheel = "handleWheel">
    <ul 
    class="carousel-container"
    :style="{marginTop,}"
    @transitionend = "handleTransitionEnd">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel = "item"/>
      </li>
    </ul>
    <div 
      class="icon icon-up"
      v-show = "index >= 1"
      @click = "handleClick(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div 
    class="icon icon-down"
    v-show = "index < data.length - 1"
    @click = "handleClick(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li 
      v-for="(item, i) in data" 
      :key="item.id"
      :class = "{active: index === i}"
      @click = "handleClick(i)"></li>
    </ul>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
import { getBanners } from "@/api/banner";
import Icon from "@/components/Icon";
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed(){
    window.removeEventListener("resize", this.handleResize);
  },
  computed:{
    marginTop(){
      return -this.index * this.containerHeight + "px";
    }
  },
  methods: {
    handleClick(currentIndex){
      this.index = currentIndex;
    },
    handleWheel(e){
      if(this.switching){
        return;
      }
      if(e.deltaY < -5 && this.index > 0){
        this.switching = true;
        this.index --;
      }else if(e.deltaY > 5 && this.index < this.data.length - 1){
        this.switching = true;
        this.index ++;
      }
    },
    handleTransitionEnd(){
      this.switching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData(){
      return await getBanners();
    }
  }
};
</script>

<style lang = "less" scoped>
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  @gap: 25px;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  left: auto;
  right: 20px;
  transform: translateY(-50%);
  li {
    width: 7px;
    height: 7px;
    background: @words;
    border-radius: 50%;
    margin-top: 10px;
    border: 1px solid #fff;
    cursor: pointer;
    box-sizing: border-box;
    &.active{
      background: #fff;
    }
  }
}
</style>