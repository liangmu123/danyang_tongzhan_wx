import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import load from './modules/load'
import getters from './getters.js'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      user,
      load
    },
    getters
})

export default store