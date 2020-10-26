import Vue from 'vue'
import App from './App.vue'
// import Hello from '../packages/hello'
import AllComp from '../packages'
console.log(AllComp)

Vue.config.productionTip = false

Vue.use(AllComp)

new Vue({
  render: h => h(App)
}).$mount('#app')
