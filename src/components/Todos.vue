<template>
<div>
    <h3> Todos</h3>
    {{$store.state.todos}}
    <!-- <div class="todos">
        <div v-for="todo in allTodos" :key="todo.id" class="todo"></div>
        {{todo.title}}
    </div> -->
</div>   

</template>
<script>
// import { mapGetters } from 'vuex';
export default{
    name:"Todos",
    // implement the mapGetters
    computed: {
        t(){
            // return mapGetters(['todos/allTodos'])

        }
    } 
};

</script>