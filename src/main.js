import Vue from 'vue'
import App from './App.vue' // vue ファイルは import すると コンポーネントとなる

Vue.config.productionTip = false

new Vue({
  render: h => h(App), //コンポーネントのオブジェクトが App 
}).$mount('#app')
