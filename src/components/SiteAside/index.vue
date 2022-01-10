<template>
  <div class="site-aside-container">
      <Avatar url = "https://raw.githubusercontent.com/huanbaihong/learnVuemdReadMe/master/Avata.png" :size = "150"/>
      <div class="header">我的小窝</div>
      <Menu />
      <Contact />
      <div class="footer">@啊啊啊啊啊啊啊啊</div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    components: {
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
.site-aside-container{
    width: 100%;
    height: 100%;
    padding: 25px 0;
    box-sizing: border-box;  
    overflow-y: auto; 
    overflow-x: hidden;
    background: @dark;
}
.avatar-container{
    margin: 0 auto;
}
.header{
    text-align: center;
    margin: 20px 0;
    font-size: 24px;
    color: @gray;
}
.footer{
    text-align: center;
    font-size: 14px;
    color: lighten(@words, 10%);
    margin: 10px 0;
}
</style>