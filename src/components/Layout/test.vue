<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
      </template>
      <template #default>
        <div class="main">中啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
      </template>
      <template #right>
        <div class="right">右</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang = "less" scoped>
.test-container {
  width: 80%;
  height: 400px;
  border: 1px solid;
  margin: 0 auto;
}
.left{
    width: 200px;
}
.right{
    width: 200px;
}
</style>