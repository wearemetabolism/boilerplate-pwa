import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const default_state = function(){
    return {
        data:{
            dico:{}
        }
    }
};

export default new Vuex.Store({
    plugins: [
        createPersistedState()
    ],
    state: default_state(),
    mutations: {
        dico(state, payload){
            state.data.dico = payload;
        }
    },
    getters: {
        dico: state => () =>{
            return state.data.dico;
        }
    },
    actions: {
        loadConfig (context){

            return new Promise((resolve, reject) => {
                Vue.http.get('config')
                    .then(response => {
                        context.commit('dico', response.body);
                        resolve(response.body)
                    })
                    .catch(e => { reject(e) })
            })
        }
    }
})
