<template>
      <img
      class="avatar-container" 
      :src="url" 
      :style = "{
          width: size + 'px',
          height: size + 'px'
      }" 
      alt="" />
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 50,
        }
    }
}
</script>

<style lang = "less" scoped>
    .avatar-container{
            border-radius: 50%;
            object-position: center;
            object-fit: cover;
            display: block;
    }
</style>