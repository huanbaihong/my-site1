<template>
  <div class="test-container">
      <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
    components: {
        Contact,
    }
}
</script>

<style lang = "less">
@import "~@/styles/global.less";
.test-container{
    width: 300px;
    height: 500px;
    background-color: black;
    margin: 100px auto;
}
</style>