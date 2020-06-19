import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:5000/api/items/'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
