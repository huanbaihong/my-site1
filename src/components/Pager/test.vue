<template>
  <div class="test-container">
      <Pager :current = "current" :total = "total" @pageChange = "handlePageChange"/>
  </div>
</template>

<script>
import Pager from "./";
export default {
    components: {
        Pager,
    },
    data(){
        return {
            total: 300,
            current: 1,
        }
    },
    methods: {
        handlePageChange(newPage){
            console.log(newPage);
            this.current = newPage;
        }
    }
}
</script>

<style>

</style>