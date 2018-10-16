import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyAmVjM34E5Jwh4EC9N4LbLvGUvK8LlsPGY',
    libraries: 'places',
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
