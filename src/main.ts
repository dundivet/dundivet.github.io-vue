import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faCode, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './registerServiceWorker'
import router from './router'

import './assets/scss/main.scss'

library.add(faCode, faCheck, faLinkedinIn, faGithub, faFacebookF)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
