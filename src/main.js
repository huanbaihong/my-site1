import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./mock";
import "./styles/global.less";
import showMessage  from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
