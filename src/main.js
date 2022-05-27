import Vue from 'vue'
import App from './App.vue'

//三级联动组件   全局组件
import TypeNav from '@/components/TypeNav';
//第一个参数是全局组件的名字，第二个是那一个组件
Vue.component(TypeNav.name,TypeNav),
Vue.config.productionTip = false
//引入路由
import router from '@/router';
//引入仓库
import store from '@/store';
new Vue({
  render: h => h(App),
  //注册路由 key与value一致 所以省略 router小写 组件身上都有$route与$router属性
  router,
  //注册仓库  组件实例的身上多了一个$store属性
  store
}).$mount('#app')
