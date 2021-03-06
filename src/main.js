import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui'
import './assets/css/element-variables.scss'
import BackToTop from 'vue-backtotop'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BackToTop)

new Vue({
  render: h => h(App)
}).$mount('#app')
