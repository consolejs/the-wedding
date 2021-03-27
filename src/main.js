import Vue from 'vue'
import VueCookies from 'vue-cookies'

import Wedding from './Wedding.vue'

Vue.use(VueCookies);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Wedding)
})