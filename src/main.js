import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SaryzTable from './saryz-table-vue'
import './saryz-table-vue/saryz-table-vue.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(SaryzTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
