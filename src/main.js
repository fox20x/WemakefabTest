import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import InputText from './components/inputs/Text.vue'
import InputSelect from './components/inputs/Select.vue'

import './assets/js/main.js'

Vue.component('input-text', InputText)
Vue.component('input-select', InputSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
