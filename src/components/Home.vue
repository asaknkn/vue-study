<template>
  <div>
    <p v-border:solid.round.shadow="{width: '10px', color: 'black'}">Home</p>
    <h2>{{title | upperCase | lowerCase}}</h2>
    <h2>{{subTitle | lowerCase}}</h2> 
    <CountNumber></CountNumber>
  </div>
</template>

<script>
  import CountNumber from "./CountNumber.vue"
  import { tokyoNumber } from "@/tokyoNumber"

    
  export default {
    mixins: [tokyoNumber],
    data() {
      return {
        tmpData: "hello",

      }
    },
    components: {
      CountNumber
    },
    /*
    filters: { //再描画されるたびに実行される。
      lowerCase(value) {
        return value.toLowerCase()
      }
    },
    */
    /* computed 毎に filter するのは手間
    computed: {
      upperCaseTitle() {
        return this.title.toUpperCase()
      }
    },
    */
    directives: {
      border(el, binding) {
        el.style.borderWidth = binding.value.width
        el.style.borderColor = binding.value.color
        el.style.borderStyle = binding.arg
        if (binding.modifiers.round) {
          el.style.borderRadius = "0.5rem"
        }
        if (binding.modifiers.shadow) {
          el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.8)"
        }
      }
     }
  }
</script>