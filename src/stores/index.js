//this index.js is an entry point to vuex
import Vuex from 'vuex';
import Vue from 'vue';
import VueResource from 'vue-resource';
// import todos from "./modules/todos"
import axios from 'axios';

//Load Vuex
Vue.use(Vuex);

//Create store
const store = new Vuex.Store({
    //pass a module object which is todo
    modules:{
        

    },
    state: {
        todos: [ ]
    },
    
    getters: {
        allTodos: state => {
            return state.todos
        }
    },
    actions: {
        async fetchTodos({commit}){
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            console.log(response.data);
            //call the muation setTodos using commit and the todos data which is response.data
            commit('setTodos', response.data);
        },
        async addTodos({commit}, title){
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title,
        completed: false});
        commit('newTodo', response.data);
        },
        async deleteTodo({commit}, id){
            //to remove the todo from the backend
            await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}');

            commit('removeTodo', id);

        }

        
    },
    mutations:{
        setTodos:(state, todos) => (state.todos = todos),
        //unshift adds a new item at the beginning of an array
        newTodo: (state, todo) => state.todos.unshift(todo),
        //remove from the UI
        removeTodo:(state, id) => 
        (state.todos = state.todos.filter(todo => todo.id !==id))
    }
})

export default store;