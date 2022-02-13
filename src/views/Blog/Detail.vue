<template>
  <Layout class="detail-container">
     <template #default>
         <div class="main-container">
             <BlogDetail :blog = "data" v-if = "data"/>
         </div>
     </template>
     <template #right>
         <div class="right-container">
             <BlogToc :toc = "data.toc" v-if = "data"/>
         </div>
     </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
export default {
    components: {
        Layout,
        BlogDetail,
        BlogToc,
    },
    mixins: [fetchData(null)],
    methods: {
        async fetchData(){
            return await getBlog(this.$route.params.id);
        }
    },
}
</script>

<style lang ="less" scoped>
    .main-container{
        width: 100%;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        overflow-x: hidden;
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    .right-container{
        width: 300px;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        overflow-y: scroll;
    }
</style>