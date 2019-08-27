<template>
<div>
    <h3> Todos</h3>
   
    <div class="todos">
        <div v-for="todo in todos" :key="todo.id" class="todo">
            {{todo.title}}
            <i class="fa fa-trash" @click="deleteTodo(todo.id)"></i>
             <!-- {{$store.state.todos}} -->
        </div>
        
    </div>
</div>   

</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { mapState } from 'vuex'
export default{
    name:"Todos",
    // implement the mapGetters
    computed:{
        todos(){
        return this.$store.getters.allTodos;
        },
        // ...mapGetters(['allTodos'])
    }, 
    methods:{
        ...mapActions(['fetchTodos', 'deleteTodo']),
        
    },
    created(){
        this.fetchTodos();
    }
   
    } 


</script>

<style scoped>
.todos{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1 rem;
}
.todo{
    border: 1px solid  white;
    background: blue;
    padding: 1rem;
    border-radius:5px;
    text-align:center;
    position:relative;
    cursor: pointer;

}
i{
    position: absolute;
    bottom: 10px;
    right:10px;
    color:white;
    cursor:pointer;
    
}

</style>