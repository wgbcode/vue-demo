import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app");

// import Demo from "./App.vue"
// console.log(Demo);
// new Vue({
//   el: "#app",
//   render (h) {
//     return h(Demo)  // h 方法的功能相当于调用 webpack 的 Vue-loader，然后，对代码进行编译。
//   }
//   data: {
//     m: 5
//   },
//   template: `
//     <div id="app">
//       {{m}}
//       <button @click="add">+1</button>
//     </div>
//   `,
//   render (h) {
//     // h 等价于 createElement
//     return h('div', [this.m, h("button", { on: { click: this.add } }, +1)])
//   },
//   methods: {
//     add () {
//       this.m += 1
//     }
//   }
// })

// console.log(window.Vue)