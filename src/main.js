import Vue from 'vue'
import App from './App.vue' // vue ファイルは import すると コンポーネントとなる
import router from './router'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App), //コンポーネントのオブジェクトが App 
}).$mount('#app')
