//this index.js is an entry point to vuex
import Vuex from 'vuex';
import Vue from 'vue';
import VueResource from 'vue-resource';
import todos from "./modules/todos"

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules:{
        todos

    }
})