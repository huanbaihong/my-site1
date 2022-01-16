<template>
  <div class="home-container">
      <CarouselItem />
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem";
import { getBanners } from "@/api/banner";
export default {
  data(){
    return {
      banners: [],
    }
  },
  components: {
    CarouselItem,
  },
  async created() {

    const resp = await getBanners();
    console.log(resp);
  },
}
</script>

<style>

</style>