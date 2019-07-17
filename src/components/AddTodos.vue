<template>
<div>
    <h3>Add Todo</h3>
    <div clas="add">
        <form @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add Todo....">
            <input type="submit" value="Submit" >
        </form>
    </div>
</div>


</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "AddTodos",
    data(){
        return{
            title:''
        }
    },
    methods:{
        ...mapActions(['addTodos']),
        onSubmit(e){
            e.preventDefault();
            //call addTodo function
            this.addTodos(this.title)
        }
    }

}
</script>

<style>

</style>
