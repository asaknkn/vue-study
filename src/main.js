import Vue from 'vue'
import App from './App.vue' // vue ファイルは import すると コンポーネントとなる
import LikeNumber from "./components/LikeNumber"

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber)
//グローバルのカスタマーディレクティブ
/*
Vue.directive("border", function(el, binding) { //bind, updated に適用される
  el.style.borderWidth = binding.value.width
  el.style.borderColor = binding.value.color
  el.style.borderStyle = binding.arg
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem"
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.8)"
  }
})
*/

new Vue({
  render: h => h(App), //コンポーネントのオブジェクトが App 
}).$mount('#app')
