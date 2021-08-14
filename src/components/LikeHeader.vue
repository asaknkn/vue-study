<template>
  <div>
    <slot></slot>
    <slot name="title">
      <h2>デフォルトのタイトル</h2>
    </slot>
    <p>{{headerText}}</p>
    <p>いいねの数</p>
    <slot name="number"></slot>
    <slot name="titleee">
      <h2>デフォルトのタイトル2</h2>
    </slot>
  </div>
</template>

<script>
  export default {
    props: ["headerText"]
  }
</script>