<template>
  <nav class="menu-container">
       <RouterLink
       :to = "{name: item.name}"
       v-for="item in items"
       :key = "item.name"
       :exact = "item.exact"
       active-class="selected"
       exact-active-class="">
           <div class = "icon">
                <Icon :type = "item.icon"/>
           </div>
            <span>{{ item.title }}</span>
       </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon,
    },
    data(){
        return {
            items: [
                {
                    name: "Home",
                    title: "首页",
                    icon: "home",
                    exact: true,
                },
                {
                    name: "Blog",
                    title: "文章",
                    icon: "blog",
                    exact: false,
                },
                {
                    name: "About",
                    title: "关于我",
                    icon: "about",
                     exact: true,
                },
                {
                    name: "Project",
                    title: "项目&效果",
                    icon: "code",
                     exact: true,
                },
                {
                    name: "Message",
                    title: "留言板",
                    icon: "message",
                     exact: true,
                },
            ],
        }
    },

}
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
.menu-container{
   margin: 20px 0;
   color: @gray;
   a{
       display: flex;
       align-items: center;
       height: 45px;
       padding: 0 50px;
       .icon{
           width: 24px;
       }
       &.selected{
           background-color: darken(@words, 3%);
       }
       &:hover{
           color: #fff;
       }

   }
}
</style>