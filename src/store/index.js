import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imageSelected: {},
    metaDataImage: {},
  },
  mutations: {
    setImagenVista(state, payload) {
      state.imageSelected = payload;
    },
    setImagenData(state, payload){
      state.metaDataImage = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
