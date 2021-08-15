export const tokyoNumber =  {
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
  created() {
    console.log("created Mixin")
  },
}