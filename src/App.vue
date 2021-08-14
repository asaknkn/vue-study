<template>
  <div>
    <LikeHeader header-text="===========================">
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <h2>皆さん</h2>
      <h3>はじまして</h3>
      <template v-slot:number>
        <h2>{{number}}</h2>
      </template>
      <template #[title]></template>
      
    </LikeHeader>
   
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue"

  export default {
    data() {
      return {
        number: 14,
        title: "titleee"
      }
    },
    components: {
      LikeHeader
    },
    methods: {
      incrementNumber(value) {
        this.number = value
      }
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
  h1 {
    color: burlywood
  }
</style>