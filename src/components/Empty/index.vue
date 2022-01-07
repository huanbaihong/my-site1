<template>
  <div class="empty-container">
    <Icon type = "empty"/>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    props: {
        text: {
            type: String,
            default: "无数据",
        }
    },
    components: {
        Icon,
    },

}
</script>

<style lang = "less" scoped>
    @import "~@/styles/var.less";
    @import "~@/styles/mixins.less";
    .empty-container{
        .self-center();
        color: @gray;
        text-align: center;
        .icon-container{
            font-size: 72px;
        }
    }
</style>