<template>
  <RightList :list = "list" @select = "handleSelected"/>
</template>

<script>
import RightList from "./RigthList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelected: false },
        { name: "b", isSelected: false },
        { 
            name: "c", 
            isSelected: true, 
            children: [
                { name: "c-1", isSelected: false },
                { name: "c-2", isSelected: false },
                { 
                    name: "c-3", 
                    isSelected: false, 
                    children: [
                        { name: "c-3-1", isSelected: false },
                        { name: "c-3-2", isSelected: false },
                        { name: "c-3-3", isSelected: false,},
                    ],
                },
            ],
        },
      ],
    };
  },
  methods: {
      handleSelected(item){
        console.log(item);
      }
  }
};
</script>

<style>
</style>