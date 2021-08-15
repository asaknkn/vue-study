import Vue from 'vue'
import App from './App.vue' // vue ファイルは import すると コンポーネントとなる
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App), //コンポーネントのオブジェクトが App 
}).$mount('#app')
