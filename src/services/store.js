import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const default_state = function(){
    return {
        nav:{},
        clients:{},
        pages:{},
        options:{}
    }
};


let store = new Vuex.Store({
    state: default_state(),
    plugins: [
        //createPersistedState()
    ],
    getters: {
        nav: state => () =>{
            return state.nav;
        },
        clients: state => () =>{
            return state.clients;
        },
        options: state => () =>{
            return state.options;
        },
        page: state => (path) =>{
            return path in state.pages ? state.pages[path] : false;
        }
    },
    mutations:{
        nav(state, nav)
        {
            state.nav = nav;
        },
        clients(state, clients)
        {
            state.clients = clients;
        },
        options(state, options)
        {
            state.options = options;
        },
        page(state, data)
        {
            state.pages[data.path] = data.body;
        }
    },
    actions: {
        load (context, path){

            return new Promise((resolve, reject) => {

                let page = context.getters.page(path);

                if( page ){
                    resolve(page);
                }
                else{
                    Vue.http.get(Vue.http.options.root+path).then(response => {
                        context.commit('page', {path:path, body:response.body});
                        resolve(response.body);
                    }).catch(e => {
                        reject(e);
                    })
                }
            })
        },
        config (context){

            return new Promise((resolve, reject) => {
                Vue.http.get('api/config')
                  .then(response => {
                      context.commit('nav', response.body.menu);
                      context.commit('clients', response.body.clients);
                      context.commit('options', response.body.options);
                      resolve(response.body)
                  })
                  .catch(e => { reject(e) })
            })
        }
    }
});

export default store;
