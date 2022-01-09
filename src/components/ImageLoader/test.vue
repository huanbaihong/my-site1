<template>
  <div class="test-container">
      <ImageLoader 
      src = "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" 
      placeholder = "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load = "handleLoad"/>
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
    components:{
        ImageLoader,
    },
    methods: {
        handleLoad(){
            console.log("loaded");
        }
    }
}
</script>

<style lang = "less" scoped>
    .test-container{
        width: 500px;
        height: 300px;
        border: 2px solid;
    }
</style>