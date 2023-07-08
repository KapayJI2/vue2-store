import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

import shop from './shop';
import { dataStore } from "@/store/productList";

const dataState = createPersistedState({
    paths:['products']
})

export default new Vuex.Store({
    modules:{
        shop,
        dataStore
    },
    plugins: [dataState]
})