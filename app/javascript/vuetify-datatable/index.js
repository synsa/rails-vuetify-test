import Vue from 'vue/dist/vue.esm'
import App from './components/Layout.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
const router = new VueRouter(Routes)
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(VueRouter)
Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  let element = document.querySelector('#app')
  if (element != undefined) {
    const app = new Vue({
      el: element,
      router,
      components: { App },
      template: '<App />'
    })
  }
})
