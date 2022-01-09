<template>
  <nav class="menu-container">
       <a 
       v-for="item in items"
       :key = "item.link"
       :href="item.link"
       :class = "{selected: isSelected(item)}">
           <div class = "icon">
                <Icon :type = "item.icon"/>
           </div>
            <span>{{ item.title }}</span>
        </a>
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
                    link: "/",
                    title: "首页",
                    icon: "home",
                },
                {
                    link: "/blog",
                    title: "文章",
                    icon: "blog",
                    startWith: true,
                },
                {
                    link: "/about",
                    title: "关于我",
                    icon: "about",
                },
                {
                    link: "/project",
                    title: "项目&效果",
                    icon: "code",
                },
                {
                    link: "/message",
                    title: "留言板",
                    icon: "message",
                },
            ],
        }
    },
    methods: {
       isSelected(item){
           var link = item.link.toLowerCase();
           var curPath = location.pathname.toLowerCase();
           if(item.startWith){
               return curPath.startsWith(link);
           }else{
                return curPath === link;
           }
        }
    }
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