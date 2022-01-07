<template>
  <i class="icon-container iconfont" :class = "fontClass"></i>
</template>

<script>
const classMap = {
    home: "iconzhuye",
    blog: "iconblog",
    code: "iconcode",
    error: "iconcuowu",
    email: "iconEmailus",
    empty: "iconempty",
    github: "icongithub",
    success: "iconGroup-",
    close: "iconguanbi",
    arrowUp: "iconiconfonticonfonti2copy",
    warn: "iconjinggao",
    message: "iconliuyan",
    qq: "iconqq",
    about: "iconset_about_hov",
    arrowDown: "icontubiaozhizuo-",
    weixin: "iconweixin",
    xinxi: "iconxinxi",
}
export default {
    props: {
        type: {
            type: String,
            required: true,
        }
    },
    computed: {
        fontClass(){
            return classMap[this.type];
        }
    }
}
</script>

<style lang = "less" scoped>
@import "//at.alicdn.com/t/font_2465804_cfmi7e9i8e5.css";
</style>