// 视图 View
<template>
  <div id="app">
    {{m}}
    <button @click="add">+1</button>
  </div>
</template>

// 视图外的其它选项（数据、监听等）
<script>
export default {
  name: 'App',
  data () {
    return {
      m: 0
    }
  },
  methods: {
    add () {
      this.m += 1
    }
  }

}
</script>

// 样式 CSS 
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
//
</style>
