<template>
  <div>
    <h2>{{title | upperCase | lowerCase}}</h2>
    <h2>{{subTitle | lowerCase}}</h2> 
  </div>
</template>

<script>
  import { tokyoNumber } from "@/tokyoNumber"

  export default {
    mixins: [tokyoNumber],
    created() {
      console.log("created countNumber after Mixin")
    },
    /*
    data() {
      return {
        title: "Welcom to Tokyo",
        subTitle: "Tokyo is a great city"
      }
    },
    filters: { //再描画されるたびに実行される。
      lowerCase(value) {
        return value.toLowerCase()
      }
    },
    */
  }
</script>