import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const default_state = function(){
  return {
    data:{
    }
  }
};

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: default_state(),
  mutations: {

  },
  actions: {
    getData (context)
    {
      return new Promise((resolve, reject) => {

        Vue.http.get('data')
            .then(response => {
              context.commit('data', response.body);
              resolve(response.body)
            })
            .catch(e => { reject(e) })
      })
    },
  }
})
