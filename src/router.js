import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import map from "./views/map.vue"
import route from "./views/route.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/map',
      name: "map",
      component: map
    },
    {
      path: "/route",
      name: "route",
      component: route
    }
  ]
})
