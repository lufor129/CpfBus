import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    RouteID:"",
    StationID:"",
    BusTime:"",
  },
  mutations: {
    ROUTE(state,payload){
      state.RouteID = payload;
    },
    STATION(state,paylaod){
      state.StationID = paylaod;
    },
    BUSTIME(state,payload){
      state.BusTime = payload;
    }
  },
  actions: {
    storeRoute(context, id){
      context.commit("ROUTE", id);
    },
    storeStation(context, id){
      context.commit("STATION", id);
    },
    setBusTime(context, time){
      context.commit("BUSTIME", time);
    }
  }
})
