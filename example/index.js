import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App'
import {registerSlidesModule} from '../src'

Vue.use(Vuex)
const store = new Vuex.Store()
registerSlidesModule(store)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
