import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
      id:1, 
      title: 'Todo One'
      },

      {
          id:2,
          title: 'Todo Two'
      }
      
  ]
  },
  mutations: {


  },
  actions: {

  }
})
