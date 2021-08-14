import Vue from 'vue'
import App from './App.vue' // vue ファイルは import すると コンポーネントとなる
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber)

new Vue({
  render: h => h(App), //コンポーネントのオブジェクトが App 
}).$mount('#app')
