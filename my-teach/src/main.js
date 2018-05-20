// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
Vue.config.productionTip = false

// 引入css
import './assets/css/shouye.css'
import Shouye from './components/Shouye'
import Tongxun from './components/Tongxun'

// 设置路由
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
      {
      path: '/',
      name: 'shouye',
      component: Shouye
    }, 
    {
      path: '/Tongxun',
      component: Tongxun
    },
  ]
})

new Vue({
     el: '#app',
     router,
     template: '</App>',
     render: h => h(App)
 });


//  下面的是导航部分  只有2个名字。 一个hello 一个new.
// new Vue({
//   router,
//   template: `
//     <div id="app">
//         <router-view></router-view>
//     </div>
//   `
// }).$mount("#app")
