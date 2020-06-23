import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:5000/api/items/'

Vue.component('main-header', require('./components/Header.vue').default);
Vue.component('sub-header', require('./components/Subheader.vue').default);
Vue.component('filter-menu', require('./components/FilterMenu.vue').default);
Vue.component('item', require('./components/Item.vue').default);
Vue.component('my-footer', require('./components/Footer.vue').default);

Vue.component('icon-base', require('./components/IconBase.vue').default);
Vue.component('search-icon', require('./components/Icons/Search-Icon.vue').default);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
