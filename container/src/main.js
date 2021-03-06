import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from "./router";
Vue.config.productionTip = false
Vue.use(VueRouter);
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'wei1',
    entry: '//localhost:8080',
    container: '#app',
    activeRule: '/app-vue',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // },
]);
// 启动 qiankun
start();

let router = new VueRouter({
  mode: 'history',
  routes,
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
