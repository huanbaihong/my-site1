<template>
  <div class="image-loader-container">
      <img 
      v-if = "!everythingDone"
      :src="placeholder"
      class = "placeholder-img">
       <img 
      :src="src" 
      :style = "{ opacity: originOpacity, transition: `${duration}ms` }"
      @load = "handleImgLoad">
  </div>
</template>

<script>
export default {
    props: {
        src : {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 500,
        }
    },
    data(){
        return {
            originLoaded: false,
            everythingDone: false,
        }
    },
    computed: {
        originOpacity(){
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {
        handleImgLoad(){
            this.originLoaded = true;
            setTimeout(()=> {
                this.everythingDone = true;
                this.$emit("load");
            }, this.duration);
        }
    }
}
</script>

<style lang = "less" scoped>
@import "~@/styles/mixins.less";
    .image-loader-container{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        img{
            .self-fill();
            object-fit: cover;
        }
    }
    .placeholder-img{
        filter: blur(2vw);
    }
</style>