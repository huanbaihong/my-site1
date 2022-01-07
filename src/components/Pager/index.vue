<template>
  <div class="pager-container" v-if = "total">
      <a 
        :class="{disabled: current === 1}"
        @click = "handleClick(1)">
      |&lt;&lt;
      </a>
      <a 
         :class="{disabled: current ===1 }"
        @click = "handleClick(current - 1)">
      &lt;&lt;
      </a>
      <a 
        v-for = "(n, i) in pageArr" 
        :key = "i"
        :class = "{active: n === current}"
        @click = "handleClick(n)">
      {{ n }}
      </a>
      <a 
        :class = "{disabled: current === pageNumber}"
        @click = "handleClick(current + 1)">
      &gt;&gt;
      </a>
      <a 
        :class = "{disabled: current === pageNumber}"
        @click = "handleClick(pageNumber)">
      &gt;&gt;|
      </a>
  </div>
</template>

<script>

export default {
   props:{
       total: {
           type: Number,
           default: 0,
       },
       current: {
           type: Number,
           default: 1,
       },
       limit: {
           type: Number,
           default: 10,
       },
       visibleNumber:{
           type: Number,
           default: 10,
       }
   },
   computed: {
       //页码数
       pageNumber(){
           return Math.ceil(this.total/this.limit);
       },
        //显示的页码数组
        pageArr(){
            let arr = [];
            let min = this.current - Math.floor(this.limit / 2);
            if(min < 1 ){
                min = 1;
            }
            let max = min + this.limit - 1;
            if(max > this.pageNumber){
                max = this.pageNumber;
            }
            for(let i = min; i<= max; i++){
                arr.push(i);
            }
            return arr;
        }
   },
   methods: {
       handleClick(newPage){
           if(newPage < 1){
               newPage = 1;
           }
           if(newPage > this.pageNumber){
               newPage = this.pageNumber;
           }
           if(newPage === this.current){
               return;
           }
           this.$emit("pageChange", newPage);
       }
   }
}
</script>

<style lang = "less" scoped>
   @import "~@/styles/global.less";
   @import "~@/styles/var.less";
   .pager-container{
       display: flex;
       justify-content: center;
       margin: 20px 0;
       a{
           color: @primary;
           font-weight: bold;
           margin: 0 6px;
           cursor: pointer;
           &.disabled{
               color: @gray;
               cursor: not-allowed;
           }
           &.active{
               color: @words;
               cursor: text;
           }
       }
   }
</style>