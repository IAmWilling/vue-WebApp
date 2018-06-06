import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        seller: [],
        q: null,
        targetBall: '',
    },
    mutations: {
        GetSeller(store, data) {
            store.seller = data;
        },
        GetTargetBall(store, data) {
            store.targetBall = data;
        },
        drop_push(store, data) {
            store.q = data;
        }
    }
})