import Vue from "vue";
/**
 * 获取某个组件渲染的dom根元素
 * @param {*} comp 组件 
 * @param {*} props 传递给组件的属性
 */
export default function(comp, props){
    const vm = new Vue({
        render: (h) => h(comp, {props}),
    })
    vm.$mount();
    return vm.$el;
}